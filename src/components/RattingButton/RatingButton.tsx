import { Button } from "../ui/button";
import { RatingButtonProps } from "./types";

export const RatingButton = ({ label, ratingLink }: RatingButtonProps) => {
  return (
    <a href={ratingLink} target="_blank" className="w-full flex justify-center">
      <Button variant="orange" className="h-7 py-2 border border-white rounded-lg font-medium px-8">
        {label}
      </Button>
    </a>
  );
};
