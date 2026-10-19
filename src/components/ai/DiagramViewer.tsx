"use client";

import * as React from "react";
import { DiagramSpec } from "@/lib/ai/diagram-spec";
import { Button } from "@/components/ui/Button";
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Download,
  Copy,
  Check,
  Eye,
  Sliders,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DiagramViewerProps {
  spec: DiagramSpec;
  className?: string;
}

export function DiagramViewer({ spec, className }: DiagramViewerProps) {
  const [zoom, setZoom] = React.useState(1);
  const [isExamMode, setIsExamMode] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [showLabels, setShowLabels] = React.useState(true);
  const svgRef = React.useRef<SVGSVGElement | null>(null);

  const handleCopySvg = () => {
    if (!svgRef.current) return;
    const svgString = new XMLSerializer().serializeToString(svgRef.current);
    navigator.clipboard.writeText(svgString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPng = () => {
    if (!svgRef.current) return;
    const svgString = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1000;
      canvas.height = 800;
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = isExamMode ? "#ffffff" : "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const png = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.download = `${spec.id || "diagram"}.png`;
        a.href = png;
        a.click();
      }
    };
    image.src = blobURL;
  };

  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs",
        isExamMode
          ? "bg-white border-neutral-slate-400 text-black"
          : "bg-gradient-to-b from-purple-50/40 via-white to-purple-50/20 border-purple-200",
        className
      )}
      data-testid="diagram-viewer"
    >
      {/* Interactive Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 border-b border-purple-100 bg-white/80 backdrop-blur-xs text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-neutral-slate-800 text-xs truncate max-w-xs">
            {spec.title}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800">
            {spec.family}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {/* Zoom Controls */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setZoom((z) => Math.min(2, z + 0.2))}
            className="h-7 w-7 p-0 text-neutral-slate-600 hover:text-service-ai-700"
            title="Zoom In"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setZoom((z) => Math.max(0.6, z - 0.2))}
            className="h-7 w-7 p-0 text-neutral-slate-600 hover:text-service-ai-700"
            title="Zoom Out"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setZoom(1)}
            className="h-7 px-1.5 text-[10px] font-mono text-neutral-slate-600"
            title="Reset Zoom"
          >
            {Math.round(zoom * 100)}%
          </Button>

          {/* Toggle Exam B&W Mode */}
          <Button
            type="button"
            variant={isExamMode ? "primary" : "outline"}
            size="sm"
            onClick={() => setIsExamMode(!isExamMode)}
            className="h-7 px-2 text-[10px] font-semibold"
            title="Toggle Black & White Exam Print Mode"
          >
            {isExamMode ? "Color Mode" : "Exam B&W"}
          </Button>

          {/* Toggle Labels */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowLabels(!showLabels)}
            className="h-7 w-7 p-0 text-neutral-slate-600 hover:text-service-ai-700"
            title="Toggle Labels"
          >
            <Eye className="h-3.5 w-3.5" />
          </Button>

          {/* Copy SVG */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleCopySvg}
            className="h-7 w-7 p-0 text-neutral-slate-600 hover:text-service-ai-700"
            title="Copy SVG"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-status-green-600" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>

          {/* Download PNG */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleDownloadPng}
            className="h-7 w-7 p-0 text-neutral-slate-600 hover:text-service-ai-700"
            title="Export as High-Res PNG"
          >
            <Download className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* SVG Canvas Rendering Area */}
      <div className="relative overflow-auto p-4 flex items-center justify-center min-h-[260px] max-h-[460px]">
        <div
          style={{ transform: `scale(${zoom})`, transformOrigin: "center center", transition: "transform 0.15s ease-out" }}
        >
          <svg
            ref={svgRef}
            viewBox={spec.viewBox || "0 0 500 400"}
            xmlns="http://www.w3.org/2000/svg"
            className={cn("max-w-full h-auto rounded-lg select-none", isExamMode && "filter grayscale contrast-125")}
            style={{ minWidth: 320, width: 440 }}
            role="img"
            aria-label={spec.altText}
          >
            <defs>
              <marker id="viewer-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={isExamMode ? "#000000" : "#4338ca"} />
              </marker>
            </defs>

            {/* Elements from Spec */}
            {spec.elements.map((el, i) => {
              if (el.type === "circle") return <circle key={i} {...el.attrs} stroke={isExamMode ? "#000000" : el.attrs.stroke} fill={isExamMode ? "#ffffff" : el.attrs.fill} />;
              if (el.type === "line") return <line key={i} {...el.attrs} stroke={isExamMode ? "#000000" : el.attrs.stroke} />;
              if (el.type === "rect") return <rect key={i} {...el.attrs} stroke={isExamMode ? "#000000" : el.attrs.stroke} fill={isExamMode ? "#ffffff" : el.attrs.fill} />;
              if (el.type === "path") return <path key={i} {...el.attrs} stroke={isExamMode ? "#000000" : el.attrs.stroke} fill={isExamMode ? (el.attrs.fill === "none" ? "none" : "#ffffff") : el.attrs.fill} />;
              if (el.type === "polygon") return <polygon key={i} {...el.attrs} stroke={isExamMode ? "#000000" : el.attrs.stroke} fill={isExamMode ? "#f8fafc" : el.attrs.fill} />;
              if (el.type === "text" && showLabels) return <text key={i} {...el.attrs} fill={isExamMode ? "#000000" : el.attrs.fill}>{el.attrs.children || el.label}</text>;
              return null;
            })}

            {/* Stated Annotations */}
            {showLabels &&
              spec.annotations?.map((ann, i) => (
                <text
                  key={`ann-${i}`}
                  x={ann.x}
                  y={ann.y}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="bold"
                  fill={isExamMode ? "#000000" : ann.color || "#4338ca"}
                  fontFamily="sans-serif"
                >
                  {ann.text}
                </text>
              ))}
          </svg>
        </div>
      </div>

      {/* Accessible Alt Description */}
      <div className="px-3.5 py-1.5 bg-neutral-slate-50 border-t border-purple-100 text-[11px] text-neutral-slate-600 flex items-center justify-between">
        <span className="truncate">{spec.altText}</span>
        <span className="font-mono text-[10px] text-neutral-slate-500">Vector SVG</span>
      </div>
    </div>
  );
}
