
import { ChevronLeft } from 'lucide-react';

export function Header() {
  return (
    <header className="px-4 py-3 flex items-center gap-4 bg-gray-900">
      <button className="p-1">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-lg">Продукт</h1>
    </header>
  );
}