import { Palestra } from "@/api/types";
import { DeadComponent } from "@/components/DeadComponent";
import { Header } from "@/components/Header";
import { LinkAgenda } from "@/components/LinkAgenda";
import { ReturnButton } from "@/components/ReturnButton";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useAgenda } from "@/hooks/useAgenda";
import { useSavedTalks } from "@/hooks/useSavedTalks";
import { useMemo } from "react";

export const MyAgenda = () => {
  const { data } = useAgenda();
  const { savedCardIds, toggleSaveCard } = useSavedTalks();

  const allTalks = useMemo(() => {
    if (!data) return [];
    const sections = Object.values(data).flat();
    return sections.flat();
  }, [data]);

  const savedTalks = useMemo(() => {
    return allTalks.filter((item: Palestra) => savedCardIds.includes(item.id));
  }, [allTalks, savedCardIds]);

  const talksByHour = useMemo(() => {
    const grouped: Record<string, Palestra[]> = {};
    savedTalks.forEach((talk) => {
      if (!grouped[talk.hour]) {
        grouped[talk.hour] = [];
      }
      grouped[talk.hour].push(talk);
    });
    return grouped;
  }, [savedTalks]);

  return (
    <section className="container mt-12 flex flex-col items-center">
      <ReturnButton />
      <Header label="Minha Agenda" />

      <div className="mt-8">
        <LinkAgenda />
      </div>
      <DeadComponent title={"Abertura"} hours={"8:00"} />
      {Object.keys(talksByHour).length > 0 ? (
        Object.keys(talksByHour).map((hour) => (
          <div key={hour} className="w-full mt-8">
            <div className="mt-4 flex flex-col items-center gap-3">
              {talksByHour[hour].map((talk) => (
                <SpeakerCard
                  key={talk.id}
                  hour={talk.hour}
                  label={talk.title}
                  tags={talk.tags}
                  imageUrl={talk.speaker.image}
                  imageFallback={talk.speaker.title[0]}
                  name={talk.speaker.title}
                  role={talk.speaker.role}
                  isSaved={true}
                  onChangeMode={() => toggleSaveCard(talk.id)}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Nenhuma palestra salva para exibir.</p>
      )}

      <DeadComponent title={"Encerramento"} hours={"18:00"} />
    </section>
  );
};
