import { Header } from "@/components/Header";
import { ReturnButton } from "@/components/ReturnButton";
import { SpeakerSection } from "@/components/SpeakerSection";
import { Separator } from "@/components/ui/separator";
import { useAgenda } from "@/hooks/useAgenda";
import { useSavedTalks } from "@/hooks/useSavedTalks";
import { getLiveTalk, getNextTalk } from "./utils/talks";
import { useEffect } from "react";

export const LivePage = () => {
  const { data } = useAgenda();
  const { savedCardIds, toggleSaveCard } = useSavedTalks();
  const now = new Date();

  const fendTalks = {
    live: getLiveTalk(data?.fendce || []),
    next: getNextTalk(data?.fendce || [], now),
  };

  const w3cTalks = {
    live: getLiveTalk(data?.w3c || []),
    next: getNextTalk(data?.w3c || [], now),
  };

  const firebankTalks = {
    live: getLiveTalk(data?.firebank || []),
    next: getNextTalk(data?.firebank || [], now),
  };

  const convidaTalks = {
    live: getLiveTalk(data?.convida || []),
    next: getNextTalk(data?.convida || [], now),
  };


  useEffect(() => {
    document.title = "Acontecendo agora";
  }, []);

  return (
    <section className="container mt-12 flex flex-col items-center">
      <ReturnButton />
      <Header label="Agenda do Evento" />
      <h2 className="text-white text-center mt-8 text-xl font-semibold">
        Acontecendo agora:
      </h2>
      <SpeakerSection
        handleCardModeChange={toggleSaveCard}
        liveTalk={fendTalks.live}
        savedCardIds={savedCardIds}
      />
      <SpeakerSection
        handleCardModeChange={toggleSaveCard}
        liveTalk={w3cTalks.live}
        savedCardIds={savedCardIds}
      />
      <SpeakerSection
        handleCardModeChange={toggleSaveCard}
        liveTalk={firebankTalks.live}
        savedCardIds={savedCardIds}
      />
      <SpeakerSection
        handleCardModeChange={toggleSaveCard}
        liveTalk={convidaTalks.live}
        savedCardIds={savedCardIds}
      />
      {
        !fendTalks.live && !w3cTalks.live && !firebankTalks.live && !convidaTalks.live &&
        <p className="text-white text-center mt-4">
          Se avexe não, já já as talks começam! 🙂 🥳
        </p>}
      <Separator className="w-20 mt-8 h-1 rounded-2xl self-center bg-[#7c3aed]" />
      <section className="mb-12 mt-8">
        <h3 className="text-xl font-semibold text-center text-white">
          Próximas Talks
        </h3>

        <SpeakerSection
          handleCardModeChange={toggleSaveCard}
          liveTalk={fendTalks.next}
          savedCardIds={savedCardIds}
        />
        <SpeakerSection
          handleCardModeChange={toggleSaveCard}
          liveTalk={w3cTalks.next}
          savedCardIds={savedCardIds}
        />
        <SpeakerSection
          handleCardModeChange={toggleSaveCard}
          liveTalk={firebankTalks.next}
          savedCardIds={savedCardIds}
        />
        <SpeakerSection
          handleCardModeChange={toggleSaveCard}
          liveTalk={convidaTalks.next}
          savedCardIds={savedCardIds}
        />

        {!fendTalks.next && !w3cTalks.next && !firebankTalks.next && !convidaTalks.next && (
          <p className="text-white text-center mt-4">
            Fique ligado, as próximas talks estão chegando!
          </p>
        )}
      </section>
    </section>
  );
};
