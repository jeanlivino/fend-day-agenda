// import { useState, useEffect } from "react";
import { Separator } from "@radix-ui/react-separator";
import { ProfileCard } from "../ProfileCard";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { ToggleButton } from "../ToggleButton";
import { SpeakerCardProps } from "./types";
import { RoomKeys, roomKeysMap } from "@/constants/rooms";
import { RatingButton } from "../RattingButton";
import { hasTimePassed } from "@/lib/check-date-time";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { EyeIcon } from "lucide-react";
import { SpeakerDialog } from "../SpeakerDialog";

export const SpeakerCard = ({ talk, isSaved, showRoom, onChangeMode }: SpeakerCardProps) => {
  const { speaker, room, hour, title, tags } = talk;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const hasPassed = useMemo(() => hasTimePassed(hour), [hour]);

  const handleToggleSave = () => {
    onChangeMode(!isSaved);
  };

  return (
    <Card className="max-w-[500px] p-5 w-full flex items-start flex-col justify-center bg-transparent border gap-4 border-[#ffd5b1] rounded-lg ">
      {showRoom && room && (
        <span className="w-full text-orange-50 bg-orange-800 text-sm px-4 py-2 rounded-lg">
          Trilha:{" "}
          <b>{room in roomKeysMap ? roomKeysMap[room as RoomKeys].label : "Trilha desconhecida"}</b>
        </span>
      )}
      <div className="flex gap-3 justify-between items-start w-full">
        <span className="text-orange-200 text-sm">{hour}</span>
        <h1 className="text-orange-50 mt-0 pt-0 w-full text-wrap whitespace-normal text-base break-words">
          {title}
          {speaker?.keynote && (
            <Badge
              variant="outline"
              className="bg-orange-300 text-slate-950 font-thin rounded-lg ml-1"
            >
              Keynote
            </Badge>
          )}
        </h1>
      </div>
      <div className="flex gap-2 w-full justify-start flex-wrap">
        <Separator className="w-full h-[0.3px] mb-4 bg-[#ffd5b1] rounded-xl" />
        {tags.map((tag: string, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-white text-[#161616] font-thin rounded-lg"
          >
            {tag}
          </Badge>
        ))}
      </div>
      {speaker?.title && (
        <div className=" flex-cols p-2  w-full">
          <ProfileCard
            name={speaker.title}
            role={speaker.role}
            imageUrl={speaker.image}
            imageFallback={speaker.title[0]}
            company={speaker.company}
          />
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 w-full">
        {hasPassed && (
          <RatingButton
            label="Avaliar Palestra"
            ratingLink={`https://avaliacao.frontendday.com.br/${room}`}
          />
        )}
        {!hasPassed && <ToggleButton isSaved={isSaved} onToggle={handleToggleSave} />}
        <Button size="sm" variant="orange" onClick={() => setIsDialogOpen(true)}>
          Detalhes <EyeIcon className="ml-2" size={18} />
        </Button>
      </div>
      {isDialogOpen && <SpeakerDialog talk={talk} onClose={() => setIsDialogOpen(false)} />}
    </Card>
  );
};
