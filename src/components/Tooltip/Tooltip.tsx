import { useState } from "react";
import type { TooltipPosition, TooltipProps } from "./types";

const positionClasses: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowClasses: Record<TooltipPosition, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black",
  bottom:
    "bottom-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black",
  left: "left-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-black",
  right:
    "right-full top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-black",
};

const Tooltip = ({ content, children, position = "top" }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}>
      {children}

      <div
        className={`
    absolute
    ${positionClasses[position]}
    bg-black text-white
    px-3 py-2
    text-sm rounded-md shadow-md
    whitespace-nowrap
    transition-opacity duration-300
    pointer-events-none
    ${showTooltip ? "opacity-100" : "opacity-0"}
  `}
      >
        {content}

        <div className={`absolute ${arrowClasses[position]}`} />
      </div>
    </div>
  );
};

export default Tooltip;
