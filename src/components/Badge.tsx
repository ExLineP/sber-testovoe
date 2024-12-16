import { ReactNode } from "react";

type BadgeVariant = 'success' | 'warning';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantStyles = {
  success: 'bg-green-500/20 text-green-400',
  warning: 'bg-orange-500/20 text-orange-400',
};

export function Badge({ children, variant = 'success' }: BadgeProps) {
  return (
    <span className={`px-2 py-0.5 text-sm rounded ${variantStyles[variant]}`}>
      {children}
    </span>
  );
}