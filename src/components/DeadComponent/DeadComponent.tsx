import { DeadComponentProps } from "./types";

export const DeadComponent = ({ title, hours }: DeadComponentProps) => {
  return (
    <div className="bg-orange-800 rounded-[8px] w-full max-w-[500px] p-4 flex items-center justify-start">
      <div className="text-[#fff] text-xl flex items-center">
        <span className="text-[#ddd] mr-5">{hours}</span>
        <p>{title}</p>
      </div>
    </div>
  );
};
