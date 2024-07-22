import { DeadComponentProps } from "./types";

export const DeadComponent = ({ title, hours }: DeadComponentProps) => {
  return (
    <div className="bg-[#261537] rounded-[8px] w-full max-w-[500px] p-4 flex items-center justify-start">
      <div className="text-[#E6D5F7] text-xl flex items-center">
        <span className="text-[#9888A8] mr-5">{hours}</span>
        <p>{title}</p>
      </div>
    </div>
  );
};
