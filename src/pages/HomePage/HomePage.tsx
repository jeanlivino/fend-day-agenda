import { Palestra } from "@/api/types";
import { useState } from "react";
import { ButtonGroup } from "@/components/ButtonGroup";
import { DeadComponent } from "@/components/DeadComponent";
import { Header } from "@/components/Header";
import { LinkAgenda } from "@/components/LinkAgenda";
import { ReturnButton } from "@/components/ReturnButton";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useAgenda } from "@/hooks/useAgenda";
import { Mode } from "@/components/ButtonGroup/ButtonGroup";
import { useSavedTalks } from "@/hooks/useSavedTalks";

export const HomePage = () => {
  const { data } = useAgenda();
  const { savedCardIds, toggleSaveCard } = useSavedTalks();
  
  const [currentMode, setCurrentMode] = useState<Mode>("Frontend");

  const keys = ["Frontend", "Convida", "FireBanking", "Comunidades"];

  const allTalks = keys .reduce((acc: Palestra[], key) => {
      return acc.concat(data?.[key] || []);
    }, []).sort((a, b) => a.hour.localeCompare(b.hour));

  const filteredTalks = allTalks.filter((talk) => talk.room === currentMode.toLowerCase());

  return (
    <section className="container my-12 flex flex-col items-center">
      <ReturnButton />
      <Header label="Agenda do Evento" />
      <div className="mt-8 w-full max-w-[500px]">
        <LinkAgenda />
      </div>
      <div className="my-8 w-full flex justify-center">
        <ButtonGroup onChange={setCurrentMode} />
      </div>
      <DeadComponent title="Abertura" hours="8:00" />
      <div className="flex flex-col items-center gap-6 mt-6 w-full mb-8">
        {filteredTalks.map((talk) => (
          <SpeakerCard
            key={talk.id}
            hour={talk.hour}
            label={talk.title}
            tags={talk.tags}
            imageUrl={talk.speaker.image}
            imageFallback={talk.speaker.title[0]}
            name={talk.speaker.title}
            role={talk.speaker.role}
            isSaved={savedCardIds.includes(talk.id)}
            onChangeMode={() => toggleSaveCard(talk.id)}
          />
        ))}
      </div>
      <DeadComponent title="Encerramento" hours="18:00" />
    </section>
  );
};
