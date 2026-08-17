export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content:  React.ReactNode;
  children: React.ReactNode;
  position?: TooltipPosition;
}

export interface TooltipIcon {
  name: string;
  content: string;
  icon: React.ComponentType;
  iconName: string;
}

export interface PropData {
  prop: string;
  type: string;
  default: string;
  description: string;
}