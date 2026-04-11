import React, { useState, useEffect } from 'react';

const lines = [
  { text: "class InterviewSolution:", className: "text-secondary" },
  { text: "    def solve_problem(self, data):", className: "text-secondary pl-4" },
  { text: "        # Implement the optimized solution here", className: "text-gray-500 pl-8" },
  { text: "        result = []", className: "text-gray-300 pl-8" },
  { text: "        for item in data:", className: "text-secondary pl-8" },
  { text: "            item.process()", className: "pl-12 bg-surface-container-highest/50 text-white rounded-sm px-1 py-0.5 border border-white/5 inline-block" },
  { text: "            result.append(item)", className: "text-gray-300 pl-12" },
  { text: "        return result", className: "text-secondary pl-8" },
];

export default function CodeEditorPrototype() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    const text = currentLine.text;

    const interval = setInterval(() => {
      setCurrentCharIndex((prev) => {
        const next = prev + 1;

        if (next > text.length) {
          clearInterval(interval);
          setCurrentLineIndex((prevLine) => prevLine + 1);
          return 0;
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [currentLineIndex]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="bg-surface-container-low rounded-xl p-4 shadow-2xl flex flex-col h-[500px] md:h-[600px] text-left border border-white/5 relative z-10">
        {/* Editor header */}
        <div className="flex items-center px-4 pb-4 border-b border-white/5 shrink-0">
          <div className="flex space-x-2 mr-6">
            <div className="w-3 h-3 rounded-full bg-error-dim"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="bg-surface text-gray-300 px-4 py-1.5 rounded-sm text-sm font-mono flex items-center space-x-2 shadow-sm">
            <span className="text-primary">#</span>
            <span>test_cases.py</span>
          </div>
        </div>

        {/* Editor body */}
        <div className="flex flex-1 overflow-hidden pt-4 min-h-0">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col items-center space-y-6 w-14 pt-2 border-r border-white/5 text-gray-500 shrink-0">
            <svg
              className="w-5 h-5 hover:text-white cursor-pointer transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <svg
              className="w-5 h-5 hover:text-white cursor-pointer transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>

          {/* Right side: code + terminal */}
          <div className="flex flex-1 flex-col min-w-0">
            {/* Code viewport */}
            <div className="flex-1 overflow-auto p-4 flex min-h-0">
              {/* Line numbers */}
              <div className="flex flex-col text-gray-600 pr-6 select-none text-right shrink-0 leading-7">
                {Array.from({ length: lines.length }, (_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>

              {/* Animated code with reserved height */}
              <div className="flex-1 min-w-0 font-mono text-sm sm:text-base">
                <div className="flex flex-col tracking-wide leading-7">
                  {lines.map((line, index) => {
                    const isPast = index < currentLineIndex;
                    const isCurrent = index === currentLineIndex;
                    const visibleText = isPast
                      ? line.text
                      : isCurrent
                      ? line.text.slice(0, currentCharIndex)
                      : "";

                    return (
                      <div key={index} className="min-h-7">
                        <span className={line.className}>
                          {visibleText || "\u00A0"}
                          {isCurrent && currentLineIndex < lines.length && (
                            <span className="ml-0.5 inline-block w-[2px] h-4 bg-white animate-pulse align-middle"></span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="h-36 bg-surface mx-4 mb-4 rounded-sm p-4 border border-white/5 overflow-y-auto shrink-0">
              <div className="text-[10px] font-body font-bold text-gray-500 mb-2 tracking-widest">
                CONSOLE OUTPUT
              </div>
              <div className="text-green-400 opacity-80">$ python solution.py --test</div>
              <div className="text-gray-400">Running 5 test cases...</div>
              <div className="text-green-400">Test 1: PASSED (12ms)</div>
              <div className="text-green-400">Test 2: PASSED (8ms)</div>
              <div className="text-green-400">Test 3: PASSED (15ms)</div>
              <div className="text-green-400">Test 4: PASSED (9ms)</div>
              <div className="text-green-400">Test 5: PASSED (11ms)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}