import { Separator } from "@radix-ui/react-separator";
import { ProfileCard } from "../ProfileCard";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { SpeakerCardProps } from "./types";
import { ToggleButton } from "../ToggleButton";

export const SpeakerCard = ({
  label,
  tags,
  imageFallback,
  imageUrl,
  name,
  role,
  hour,
  isSaved,
  onChangeMode,
}: SpeakerCardProps) => {
  const handleToggleSave = () => {
    onChangeMode(!isSaved);
  };

  return (
    <Card className="max-w-[500px] p-5 w-full flex items-start flex-col justify-center bg-transparent border gap-4 border-[#D9B1FF] rounded-lg ">
      <div className="flex gap-3 justify-between items-start w-full">
        <span className="text-[#A190B2] text-sm">{hour}</span>
        <h1 className="text-[#E6D5F7] mt-0 pt-0 w-full text-wrap whitespace-normal text-base break-words">
          {label}
        </h1>
        <ToggleButton isSaved={isSaved} onToggle={handleToggleSave} />
      </div>
      <div className="flex gap-2 w-full justify-start overflow-x-auto scrollbar-cards [&::-webkit-scrollbar]:hidden">
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
      <div className=" flex-cols p-2  w-full">
        <Separator className="w-full h-[0.3px] mb-4 bg-[#D9B1FF] rounded-xl" />
        <ProfileCard
          name={name}
          role={role}
          imageUrl={imageUrl}
          imageFallback={imageFallback}
        />
      </div>
    </Card>
  );
};
