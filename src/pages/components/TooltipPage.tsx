import { useState } from "react";
import ComponentDemo from "../ComponentsDemo";
import type { TooltipPosition } from "@/components/Tooltip/types";
import Tooltip from "@/components/Tooltip/Tooltip";
import { propsData, tooltipIcons } from "@/components/Tooltip/TooltipData";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const [position, setPosition] = useState<TooltipPosition>("top");
  const [selectedIcon, setSelectedIcon] = useState("settings");

  const positions: TooltipPosition[] = ["top", "bottom", "left", "right"];

  const tooltipCode = `<Tooltip content="Save your latest changes" position="${position}" >
      <button>Save Changes</button>
    </Tooltip>`;

  const selectedIconData = tooltipIcons.find(
    (item) => item.name === selectedIcon,
  );

  const iconTooltipCode = `
<div className="flex items-center gap-4">
  <Tooltip content=${selectedIconData?.content}>
    <button>  
    <${selectedIconData?.iconName} size={18} />
    </button>
  </Tooltip>
</div>`;

const richContentCode = `
<Tooltip
  content={
    <div className="space-y-1">
      <p className="font-medium">
        Keyboard Shortcut
      </p>

      <p className="text-xs text-gray-300">
        Press Ctrl + S to save your changes.
      </p>
    </div>
  }
>
  <button>
    Save Changes
  </button>
</Tooltip>
`;

  return (
    // heading
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--text-color)]">Tooltip</h1>
        <p className="text-gray-600 text-lg">
          A small text label that appears when user hover or Focuses on an
          element.
        </p>
      </div>
      {/* positions */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-[var(--text-color)]">Positions</h3>

        <p className="text-sm text-gray-500">
          Choose where the tooltip should appear relative to the element.
        </p>

        <ComponentDemo code={tooltipCode}>
          <div className="flex flex-col gap-13">
            {/* Position Buttons */}
            <div className="flex items-center justify-center gap-8">
              {positions.map((item) => (
                <button
                  key={item}
                  onClick={() => setPosition(item)}
                  className={`
              px-4 py-2
              rounded-md
              border
              text-sm
              font-medium
              capitalize
              transition-all
              ${
                position === item
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }
            `}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Tooltip Preview */}
            <div className="flex items-center justify-center">
              <Tooltip content="Save your latest changes" position={position}>
                <button className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800">
                  Save Changes
                </button>
              </Tooltip>
            </div>
          </div>
        </ComponentDemo>
      </div>

      {/* icons */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-[var(--text-color)]"> With Icons</h3>
        <p className="text-sm text-gray-500">
          Use tooltips to describe icon-only actions.
        </p>

        <ComponentDemo code={iconTooltipCode}>
          <div className="flex flex-col items-center justify-center gap-6 py-10">
            {/* Icon buttons */}
            <div className="flex items-center gap-5">
              {tooltipIcons.map((item) => {
                const Icon = item.icon;

                return (
                  <Tooltip key={item.name} content={item.content}>
                    <button
                      onClick={() => setSelectedIcon(item.name)}
                      className={`
                flex h-10 w-10 items-center justify-center
                rounded-md border
                transition-all duration-200
                ${
                  selectedIcon === item.name
                    ? "border-black bg-black text-white shadow-sm"
                    : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                }
              `}
                      aria-label={item.content}
                    >
                      <Icon />
                    </button>
                  </Tooltip>
                );
              })}
            </div>

            {/* Selected icon hint */}
            <p className="text-sm text-gray-500">
              Select an icon to view its usage code.
            </p>
          </div>
        </ComponentDemo>
      </div>

      {/* variant */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-[var(--text-color)]">Rich Content</h3>

        <p className="text-sm text-gray-500">
          Tooltips can display more than simple text using React content.
        </p>

        <ComponentDemo code={richContentCode}>
          <div className="flex items-center justify-center py-10">
            <Tooltip
              content={
                <div className="space-y-1">
                  <p className="font-medium">Keyboard Shortcut</p>

                  <p className="text-xs text-gray-300">
                    Press Ctrl + S to save your changes.
                  </p>
                </div>
              }
            >
             <button className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800">
                  Save Changes
                </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </div>

        <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-[var(--text-color)]">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};
export default TooltipPage;
