import { DeadComponent } from "@/components/DeadComponent";
import { Header } from "@/components/Header";
import { LinkAgenda } from "@/components/LinkAgenda";
import { ReturnButton } from "@/components/ReturnButton";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useAgenda } from "@/hooks/useAgenda";
import { useSavedTalks } from "@/hooks/useSavedTalks";
import { agendaResponseToTalks, splitTalksToMidDay } from "@/lib/talks";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export const MyAgenda = () => {
  const { data } = useAgenda();
  const { savedCardIds, toggleSaveCard } = useSavedTalks();

  const allTalks = useMemo(() => {
    if (!data) return [];
    return agendaResponseToTalks(data);
  }, [data]);

  const savedTalks = useMemo(() => {
    return allTalks
      .filter((item) => savedCardIds.includes(item.id))
      .sort((a, b) => a.hour.localeCompare(b.hour));
  }, [allTalks, savedCardIds]);

  const { talksBeforeMidDay, talksAfterMidDay } = splitTalksToMidDay(savedTalks);

  const hasSavedTalks = useMemo(() => savedTalks.length > 0, [savedTalks]);

  useEffect(() => {
    document.title = "Minha Agenda";
  });

  return (
    <section className="container mt-12 flex flex-col items-center">
      <ReturnButton />
      <Header label="Minha Agenda" />
      <div className="mt-8 w-full max-w-[500px]">
        <LinkAgenda isMyAgenda />
      </div>

      {!hasSavedTalks && (
        <p className="text-white text-center mt-4 p-8">
          Nenhuma palestra salva para exibir. <br />
          <Link className="text-white underline text-nowrap" to="/">
            Ver todas as palestras.
          </Link>
        </p>
      )}

      {hasSavedTalks && (
        <div className="my-8 space-y-4">
          <DeadComponent title={"Abertura"} hours={"8:00"} />

          {talksBeforeMidDay.map((talk) => (
            <SpeakerCard
              key={talk.id}
              hour={talk.hour}
              label={talk.title}
              tags={talk.tags}
              speaker={talk.speaker}
              room={talk.room}
              showRoom
              isSaved
              onChangeMode={() => toggleSaveCard(talk.id)}
            />
          ))}
          <DeadComponent title={"Almoço"} hours={"12:00"} />

          {talksAfterMidDay.map((talk) => (
            <SpeakerCard
              key={talk.id}
              hour={talk.hour}
              label={talk.title}
              tags={talk.tags}
              speaker={talk.speaker}
              room={talk.room}
              showRoom
              isSaved
              onChangeMode={() => toggleSaveCard(talk.id)}
            />
          ))}

          <DeadComponent title="Encerramento" hours="19:50" />
        </div>
      )}
    </section>
  );
};
