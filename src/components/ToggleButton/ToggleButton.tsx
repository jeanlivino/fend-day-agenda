import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ToggleButtonProps = {
  isSaved: boolean;
  onToggle: (isSaved: boolean) => void;
};

export const ToggleButton = ({ isSaved, onToggle }: ToggleButtonProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const isMyList = location.pathname === "/minha-lista";

    onToggle(!isSaved);

    toast({
      title: !isSaved ? "Adicionado à agenda com sucesso" : "Removido da agenda com sucesso",
      ...(!isMyList
        ? {
            action: (
              <Button size="sm" variant="outline" onClick={() => navigate("/minha-lista")}>
                Ver agenda
              </Button>
            ),
          }
        : {}),
    });
  };

  return (
    <Button
      size="sm"
      onClick={handleClick}
      variant={!isSaved ? "outline" : "secondary"}
      className={cn("w-full", isSaved ? "hover:bg-white/70" : "hover:bg-white/30")}
    >
      Agenda
      {!isSaved ? (
        <PlusIcon className="ml-2" size={18} />
      ) : (
        <MinusIcon className="ml-2" size={18} />
      )}
    </Button>
  );
};
