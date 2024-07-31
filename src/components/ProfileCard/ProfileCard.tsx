import { AvatarFallback } from "@radix-ui/react-avatar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ProfileCardProps } from "./types";

export const ProfileCard = ({ name, role, imageUrl, imageFallback, company }: ProfileCardProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-10 h-10 rounded-full flex justify-center border border-gray-50 bg-white ">
        <AvatarImage className="object-cover" alt={name} src={imageUrl} />
        <AvatarFallback className="font-semibold text-lg justify-center items-center flex">
          {imageFallback}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-semibold text-sm text-white">{name}</p>
        <span className="text-xs text-[#A9A9A9] ">
          {role} {company && <span> | {company}</span>}
        </span>
      </div>
    </div>
  );
};
