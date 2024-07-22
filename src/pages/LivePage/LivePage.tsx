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

  const liveFrontendTalk = getLiveTalk(data?.Frontend || [], now);
  const liveConvidadosTalk = getLiveTalk(data?.Convida || [], now);
  const liveComunidadesTalk = getLiveTalk(data?.Comunidades || [], now);

  const nextFrontendTalk = getNextTalk(data?.Frontend || [], now);
  const nextComunidadesTalk = getNextTalk(data?.Comunidades || [], now);
  const nextConvidadosTalk = getNextTalk(data?.Convida || [], now);

  useEffect(() => {
    document.title = "Acontecendo agora";
  }, []);

  return (
    <section className="container mt-12 flex flex-col items-center">
      <ReturnButton/>
      <Header label="Agenda do Evento" />
      <h2 className="text-white text-center mt-8 text-xl font-semibold">
        Acontecendo agora:
      </h2>
      {liveFrontendTalk || liveConvidadosTalk || liveComunidadesTalk ? (
        <>
          <SpeakerSection
            handleCardModeChange={toggleSaveCard}
            liveTalk={liveFrontendTalk}
            savedCardIds={savedCardIds}
            sectionTitle="Front-End CE"
          />
          <SpeakerSection
            handleCardModeChange={toggleSaveCard}
            liveTalk={liveConvidadosTalk}
            savedCardIds={savedCardIds}
            sectionTitle="Convida"
          />
          <SpeakerSection
            handleCardModeChange={toggleSaveCard}
            liveTalk={liveComunidadesTalk}
            savedCardIds={savedCardIds}
            sectionTitle="Comunidades"
          />
        </>
      ) : (
        <p className="text-white text-center mt-4">
          Se avexe não, já já tem mais! 🙂 🥳
        </p>
      )}
      <Separator className="w-20 mt-8 h-1 rounded-2xl self-center bg-[#7c3aed]" />
      <section className="mb-12 mt-8">
        <h3 className="text-xl font-semibold text-center text-white">
          Próximas Talks
        </h3>
        {nextFrontendTalk || nextConvidadosTalk || nextComunidadesTalk ? (
          <>
            <SpeakerSection
              handleCardModeChange={toggleSaveCard}
              liveTalk={nextFrontendTalk}
              savedCardIds={savedCardIds}
              sectionTitle="Front-End CE"
            />
            <SpeakerSection
              handleCardModeChange={toggleSaveCard}
              liveTalk={nextConvidadosTalk}
              savedCardIds={savedCardIds}
              sectionTitle="Convida"
            />
            <SpeakerSection
              handleCardModeChange={toggleSaveCard}
              liveTalk={nextComunidadesTalk}
              savedCardIds={savedCardIds}
              sectionTitle="Comunidades"
            />
          </>
        ) : (
          <p className="text-white text-center mt-4">
            Fique ligado, as próximas talks estão chegando!
          </p>
        )}
      </section>
    </section>
  );
};
