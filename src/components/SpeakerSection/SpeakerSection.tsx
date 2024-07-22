import { SpeakerCard } from "@/components/SpeakerCard";
import { Button } from "@/components/ui/button";
import { SpeakerSectionProps } from "./types";

export const SpeakerSection = ({
  sectionTitle,
  liveTalk,
  savedCardIds,
  handleCardModeChange,
}: SpeakerSectionProps) => {
  return (
    <section className="w-full">
      {liveTalk && (
        <div className="flex flex-col items-center w-full">
          <Button className="max-w-[500px] w-full mt-8 bg-[#261537] justify-start pl-5 text-base font-semibold hover:bg-[#261537] text-[#E6D5F7]">
            {sectionTitle}
          </Button>
          <div className="flex flex-col items-center gap-6 mt-6 w-full">
            <SpeakerCard
              isSaved={savedCardIds.includes(liveTalk.id)}
              onChangeMode={(mode) => handleCardModeChange(liveTalk.id, mode)}
              key={liveTalk.id}
              hour={liveTalk.hour}
              label={liveTalk.title}
              tags={liveTalk.tags}
              imageUrl={liveTalk.speaker.image}
              imageFallback={liveTalk.speaker.title[0]}
              name={liveTalk.speaker.title}
              role={liveTalk.speaker.role}
              keynote={liveTalk.keynote}
            />
          </div>
        </div>
      )}
    </section>
  );
};
