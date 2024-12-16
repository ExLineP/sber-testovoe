import { ReactNode } from "react";

interface DetailRowProps {
  label: string;
  value: ReactNode;
}

export function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="flex text-[14px] min-w-[330px] md:min-w-[700px] justify-between">
      <div className="flex items-center">
        <span className="text-white font-semibold">{label}</span>
      </div>
      <div className="text-gray-400">{value}</div>
    </div>
  );
}