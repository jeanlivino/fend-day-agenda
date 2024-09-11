import { Button } from "../ui/button";
import { RatingButtonProps } from "./types";

export const RatingButton = ({ label, ratingLink }: RatingButtonProps) => {
  return (
    <a href={ratingLink} target="_blank" className="w-full flex justify-center">
    <Button className="h-7 py-2 text-white bg-[#a855f7] border border-white rounded-lg font-medium px-8 hover:bg-[#842bd83e]">
      {label}
    </Button>
    </a>
  );
};
