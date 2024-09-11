import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router";

type ToggleButtonProps = {
  isSaved: boolean;
  onToggle: (isSaved: boolean) => void;
};

export const ToggleButton = ({ isSaved, onToggle }: ToggleButtonProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const isMyList = location.pathname === '/minha-lista';

    onToggle(!isSaved);

    toast({
      title: !isSaved ? 'Adicionado à agenda com sucesso': 'Removido da agenda com sucesso',
      ...(!isMyList ? {
        action: <Button size="sm" variant="outline" onClick={() => navigate('/minha-lista')}>Ver agenda</Button>
      }: {})
    })
  };

  return (
    <Button
      size="sm"
      onClick={handleClick}
      variant={
        !isSaved ? 'outline' : 'secondary'
      } className="w-full">
      {!isSaved ?
        'Adicionar à agenda'
        : 'Remover da agenda'}
    </Button>
  );
};
