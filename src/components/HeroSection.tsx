import { Vault } from "./Vault";

export function HeroSection() {
  return (
    <div className="relative h-48 bg-gradient-to-r from-emerald-800 to-blue-800 rounded-3xl m-3">
      <div className="absolute bottom-[-65px] left-0 right-0 p-8 flex justify-center">
        <Vault className="text-gray-300 h-[120px]" />
      </div>
    </div>
  );
}
