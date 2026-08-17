import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-[var(--card-bg)]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-[var(--bg-color)]">
        <span className="text-sm font-medium text-[var(--text-color)]">
          Preview
        </span> 
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1 px-3 py-1 text-[var(--text-color)] text-sm bg-[var(--card-bg)] hover:opacity-80 rounded transition-opacity"
        >
          <Code className="text-sm font-medium text-[var(--text-color)]" size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
          
        </button>
      </div>

      <div className="py-20 px-4 flex items-center justify-center">
        {children}
      </div>

      {isCodeVisible && (
        <div className="border-t border-gray-200">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
