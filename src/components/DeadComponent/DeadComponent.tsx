import { DeadComponentProps } from "./types";

export const DeadComponent = ({title, hours}: DeadComponentProps) => {
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-[#261537] w-full sm:w-[620px] h-[62px] rounded-[8px] p-4 sm:p-12 flex items-center justify-start">
        <div className="text-[#E6D5F7] text-xl sm:text-3xl flex items-center">
          <span className="text-[#9888A8] mr-5">{hours}</span>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};
