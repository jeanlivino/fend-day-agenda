import { Palestra } from "@/api/types";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Card } from "../ui/card";

interface Props {
  talk: Palestra;
  onClose: () => void;
}

export const SpeakerDialog: React.FC<Props> = ({ talk, onClose }) => {
  const { speaker } = talk;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="bg-white w-full max-w-[600px] p-4 rounded-lg">
        <div className="grid grid-cols-[1fr,3fr] gap-4 p-4">
          <img
            src={speaker.image}
            alt={speaker.title}
            className="w-full aspect-square object-cover rounded-full"
          />
          <div className="self-center">
            <h2 className="text-md font-semibold">{speaker.title}</h2>
            <p className="text-sm font-medium">
              {speaker.role} - {speaker.company}
            </p>
            <Separator className="my-1" />
            <p className="text-xs">{speaker.bio}</p>
          </div>
        </div>

        <Card className="p-4 bg-slate-100">
          <h3 className="text-md text-orange-500 font-semibold">{talk.title}</h3>
          <Separator className="my-2" />
          <p className="text-sm" dangerouslySetInnerHTML={{ __html: talk.description }} />
        </Card>
      </DialogContent>
    </Dialog>
  );
};
