import { Button } from "../ui/button";
import { RatingButtonProps } from "./types";

export const RatingButton = ({ label, ratingLink }: RatingButtonProps) => {
  return (
    <a href={ratingLink} target="_blank">
    <Button className="h-7 py-2 bg-transparent border border-white rounded-lg font-medium px-8 hover:bg-[#842bd83e]">
      {label}
    </Button>
    </a>
  );
};
