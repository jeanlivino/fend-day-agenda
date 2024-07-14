import {CircleMinus, CirclePlus } from "lucide-react";

type Props ={
    mode: boolean;
}

export const Togglebutton = ({mode}:Props) => {
  if( mode == true ){
     return (
    <div data-testid="true">
      <CirclePlus color="#ffffff"/>
    </div>
  );
  } else {
    return (
    <div data-testid="false">
      <CircleMinus color="#ffffff" />
    </div>
    )
  }
 
};