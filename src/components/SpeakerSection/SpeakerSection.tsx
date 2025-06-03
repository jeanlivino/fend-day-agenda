import { SpeakerCard } from "@/components/SpeakerCard";
import { SpeakerSectionProps } from "./types";

export const SpeakerSection = ({
  liveTalk,
  savedCardIds,
  handleCardModeChange,
}: SpeakerSectionProps) => {
  return (
    <section className="w-full">
      {liveTalk && (
        <div className="flex flex-col items-center gap-6 mt-6 w-full">
          <SpeakerCard
            isSaved={savedCardIds.includes(liveTalk.id)}
            onChangeMode={(mode) => handleCardModeChange(liveTalk.id, mode)}
            key={liveTalk.id}
            talk={liveTalk}
            showRoom
          />
        </div>
      )}
    </section>
  );
};
