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
import { useMemo } from "react";

export const SpeakerCard = ({
  label,
  tags,
  hour,
  isSaved,
  showRoom,
  room,
  speaker,
  onChangeMode,
}: SpeakerCardProps) => {
  const hasPassed = useMemo(() => hasTimePassed(hour), [hour]);

  const handleToggleSave = () => {
    onChangeMode(!isSaved);
  };

  return (
    <Card className="max-w-[500px] p-5 w-full flex items-start flex-col justify-center bg-transparent border gap-4 border-[#D9B1FF] rounded-lg ">
      {showRoom && room && (
        <span className="w-full text-[#E6D5F7] bg-[#261537] text-sm px-4 py-2 rounded-lg">
          Trilha:{" "}
          <b>{room in roomKeysMap ? roomKeysMap[room as RoomKeys].label : "Trilha desconhecida"}</b>
        </span>
      )}
      <div className="flex gap-3 justify-between items-start w-full">
        <span className="text-[#A190B2] text-sm">{hour}</span>
        <h1 className="text-[#E6D5F7] mt-0 pt-0 w-full text-wrap whitespace-normal text-base break-words">
          {label}
          {speaker?.keynote && (
            <Badge variant="outline" className="bg-[#A855F7] text-white font-thin rounded-lg ml-1">
              Keynote
            </Badge>
          )}
        </h1>
      </div>
      <div className="flex gap-2 w-full justify-start flex-wrap">
        {tags.map((tag: string, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-white text-[#A855F7] font-thin rounded-lg"
          >
            {tag}
          </Badge>
        ))}
      </div>
      {speaker?.title && (
        <div className=" flex-cols p-2  w-full">
          <Separator className="w-full h-[0.3px] mb-4 bg-[#D9B1FF] rounded-xl" />
          <ProfileCard
            name={speaker.title}
            role={speaker.role}
            imageUrl={speaker.image}
            imageFallback={speaker.title[0]}
            company={speaker.company}
          />
        </div>
      )}
      {hasPassed && <RatingButton label="Avaliar Palestra" ratingLink={`https://avaliacao.frontendday.com.br/${room}`}/>}
       {!hasPassed&& <ToggleButton isSaved={isSaved} onToggle={handleToggleSave} />}

    </Card>
  );
};
