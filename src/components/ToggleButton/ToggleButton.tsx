import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";

type ToggleButtonProps = {
  isSaved: boolean;
  onToggle: (isSaved: boolean) => void;
};

export const ToggleButton = ({ isSaved, onToggle }: ToggleButtonProps) => {
  const { toast } = useToast();

  const handleClick = () => {
    onToggle(!isSaved);

    toast({
      title: isSaved ? 'Adicionado à agenda com sucesso': 'Removido da agenda com sucesso',
    })
  };

  return (
    <Button
      size="sm"
      onClick={handleClick}
      variant={
        isSaved ? 'outline' : 'secondary'
      } className="w-full">
      {isSaved ?
        'Adicionar à agenda'
        : 'Remover da agenda'}
    </Button>
  );
};
