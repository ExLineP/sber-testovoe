import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function TabButton({
  children,
  active = false,
  onClick,
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 text-sm relative w-full font-medium rounded-xl
        ${active ? "bg-white text-gray-900" : "text-gray-500"}
      `}
    >
      {children}
    </button>
  );
}
