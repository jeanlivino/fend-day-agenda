import { Palestra } from "@/api/types";
import { useEffect, useState } from "react";
import { ButtonGroup } from "@/components/ButtonGroup";
import { DeadComponent } from "@/components/DeadComponent";
import { Header } from "@/components/Header";
import { LinkAgenda } from "@/components/LinkAgenda";
import { ReturnButton } from "@/components/ReturnButton";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useAgenda } from "@/hooks/useAgenda";
import { useSavedTalks } from "@/hooks/useSavedTalks";
import { splitTalksToMidDay } from "@/lib/talks";
import { RoomKeys, roomKeys } from "@/constants/rooms";
import { LoaderCircle } from "lucide-react";

export const HomePage = () => {
  const { data, isLoading } = useAgenda();
  const { savedCardIds, toggleSaveCard } = useSavedTalks();

  const [currentMode, setCurrentMode] = useState<RoomKeys | undefined>(undefined);

  const allTalks = roomKeys
    .reduce((acc: Palestra[], key) => {
      return acc.concat(data?.[key] || []);
    }, [])
    .sort((a, b) => a.hour.localeCompare(b.hour));

  const filteredTalks = allTalks.filter(
    (talk) => !currentMode || talk.room === currentMode.toLowerCase()
  );

  const { talksBeforeMidDay, talksAfterMidDay } = splitTalksToMidDay(filteredTalks);

  useEffect(() => {
    document.title = "Agenda do Evento";
  }, []);

  return (
    <section className="container my-12 flex flex-col items-center">
      <ReturnButton />
      <Header label="Agenda do Evento" />
      <div className="mt-8 w-full max-w-[500px]">
        <LinkAgenda />
      </div>

      {isLoading ? (
        <div className="my-8 w-full flex justify-center">
          <LoaderCircle color="#ffb015" className="animate-spin w-16 h-16" />
        </div>
      ) : (
        <>
          <div className="my-8 w-full flex justify-center">
            <ButtonGroup onChange={setCurrentMode} />
          </div>

          <div className="space-y-4 w-full max-w-[500px]">
            <DeadComponent title="Abertura" hours="8:00" />
            {talksBeforeMidDay.map((talk) => (
              <SpeakerCard
                key={talk.id}
                hour={talk.hour}
                label={talk.title}
                tags={talk.tags}
                speaker={talk.speaker}
                room={talk.room}
                showRoom={!currentMode}
                isSaved={savedCardIds.includes(talk.id)}
                onChangeMode={() => toggleSaveCard(talk.id)}
              />
            ))}
            <DeadComponent title="Almoço" hours="12:00" />
            {talksAfterMidDay.map((talk) => (
              <SpeakerCard
                key={talk.id}
                hour={talk.hour}
                label={talk.title}
                tags={talk.tags}
                room={talk.room}
                speaker={talk.speaker}
                showRoom={!currentMode}
                isSaved={savedCardIds.includes(talk.id)}
                onChangeMode={() => toggleSaveCard(talk.id)}
              />
            ))}
            <DeadComponent title="Encerramento" hours="19:50" />
          </div>
        </>
      )}
    </section>
  );
};
