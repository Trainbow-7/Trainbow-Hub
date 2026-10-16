"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import {
  Square,
  Circle,
  Triangle,
  Spline,
  Eraser,
  Undo2,
  Download,
  Trash2,
  X,
  Palette,
} from "lucide-react";

interface MathDrawingCanvasProps {
  onClose?: () => void;
  onInsertDiagram?: (diagramType: string) => void;
}

export function MathDrawingCanvas({ onClose, onInsertDiagram }: MathDrawingCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [tool, setTool] = React.useState<"pen" | "triangle" | "circle" | "parabola" | "eraser">("pen");
  const [color, setColor] = React.useState("#7C3AED"); // Violet brand
  const [lineWidth, setLineWidth] = React.useState(3);

  // History for Undo
  const [history, setHistory] = React.useState<ImageData[]>([]);

  // Initialize Canvas
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill white background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle grid lines for mathematical graphing
    ctx.strokeStyle = "#F1F5F9";
    ctx.lineWidth = 1;
    const gridSize = 20;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Save initial state
    setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  }, []);

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    setHistory((prev) => [...prev.slice(-10), ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  };

  const handleUndo = () => {
    const canvas = canvasRef.current;
    if (!canvas || history.length <= 1) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const newHistory = [...history];
    newHistory.pop(); // Remove current
    const previous = newHistory[newHistory.length - 1];
    ctx.putImageData(previous, 0, 0);
    setHistory(newHistory);
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Redraw grid
    ctx.strokeStyle = "#F1F5F9";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    saveState();
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === "pen" || tool === "eraser") {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.strokeStyle = tool === "eraser" ? "#FFFFFF" : color;
      ctx.lineWidth = tool === "eraser" ? 20 : lineWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      setIsDrawing(true);
    } else if (tool === "triangle") {
      // Draw instant right-angled geometric triangle
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.fillStyle = "rgba(124, 58, 237, 0.05)";
      ctx.beginPath();
      ctx.moveTo(x, y + 80);
      ctx.lineTo(x + 120, y + 80);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      // Right angle square
      ctx.strokeRect(x, y + 68, 12, 12);
      ctx.fillStyle = "#0F172A";
      ctx.font = "12px sans-serif";
      ctx.fillText("Base (b)", x + 40, y + 95);
      ctx.fillText("Height (a)", x - 55, y + 45);
      ctx.fillText("Hypotenuse (c)", x + 45, y + 35);
      saveState();
    } else if (tool === "circle") {
      // Draw instant circle with radius
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.fillStyle = "rgba(37, 99, 235, 0.05)";
      ctx.beginPath();
      ctx.arc(x, y, 50, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fill();

      // Center point and radius line
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#0F172A";
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 50, y);
      ctx.strokeStyle = "#DC2626";
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.font = "11px sans-serif";
      ctx.fillStyle = "#DC2626";
      ctx.fillText("r", x + 22, y - 5);
      saveState();
    } else if (tool === "parabola") {
      // Draw Cartesian plane with quadratic curve
      ctx.strokeStyle = "#475569";
      ctx.lineWidth = 1.5;
      // Axes
      ctx.beginPath();
      ctx.moveTo(x - 80, y);
      ctx.lineTo(x + 80, y);
      ctx.moveTo(x, y - 60);
      ctx.lineTo(x, y + 60);
      ctx.stroke();
      // Curve
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(x - 60, y - 45);
      ctx.quadraticCurveTo(x, y + 55, x + 60, y - 45);
      ctx.stroke();
      // Roots points
      ctx.fillStyle = "#2563EB";
      ctx.beginPath();
      ctx.arc(x - 38, y, 4, 0, Math.PI * 2);
      ctx.arc(x + 38, y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "10px sans-serif";
      ctx.fillText("x₁", x - 42, y + 14);
      ctx.fillText("x₂", x + 34, y + 14);
      saveState();
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveState();
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `trainbow-diagram-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="rounded-2xl border border-purple-200 bg-white p-4 sm:p-5 shadow-md space-y-3">
      {/* Canvas Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-100 text-service-ai-600 flex items-center justify-center">
            <Spline className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-neutral-slate-900">
              Interactive Mathematical Diagramming Board
            </h4>
            <p className="text-[11px] text-neutral-slate-600">
              Draw geometrical shapes, graphs, coordinate planes, or freehand formulas
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            type="button"
            className="p-1 rounded-lg text-neutral-slate-500 hover:text-neutral-slate-800 hover:bg-neutral-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Toolbar Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setTool("pen")}
            className={`px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition-all ${
              tool === "pen"
                ? "bg-purple-600 text-white border-purple-600 shadow-2xs"
                : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-purple-50"
            }`}
          >
            <Palette className="w-3.5 h-3.5" /> Pen
          </button>

          <button
            type="button"
            onClick={() => setTool("triangle")}
            className={`px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition-all ${
              tool === "triangle"
                ? "bg-purple-600 text-white border-purple-600 shadow-2xs"
                : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-purple-50"
            }`}
          >
            <Triangle className="w-3.5 h-3.5" /> Triangle
          </button>

          <button
            type="button"
            onClick={() => setTool("circle")}
            className={`px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition-all ${
              tool === "circle"
                ? "bg-purple-600 text-white border-purple-600 shadow-2xs"
                : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-purple-50"
            }`}
          >
            <Circle className="w-3.5 h-3.5" /> Circle
          </button>

          <button
            type="button"
            onClick={() => setTool("parabola")}
            className={`px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition-all ${
              tool === "parabola"
                ? "bg-purple-600 text-white border-purple-600 shadow-2xs"
                : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-purple-50"
            }`}
          >
            <Spline className="w-3.5 h-3.5" /> Parabola / Graph
          </button>

          <button
            type="button"
            onClick={() => setTool("eraser")}
            className={`px-2.5 py-1 rounded-lg border font-medium flex items-center gap-1 transition-all ${
              tool === "eraser"
                ? "bg-neutral-slate-800 text-white border-neutral-slate-800 shadow-2xs"
                : "bg-white text-neutral-slate-700 border-neutral-slate-200 hover:bg-neutral-slate-100"
            }`}
          >
            <Eraser className="w-3.5 h-3.5" /> Eraser
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {/* Color choices */}
          <div className="flex items-center gap-1 mr-2">
            {["#7C3AED", "#2563EB", "#0F766E", "#DC2626", "#0F172A"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                style={{ backgroundColor: c }}
                className={`w-4 h-4 rounded-full border ${
                  color === c ? "ring-2 ring-purple-600 ring-offset-1" : "border-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleUndo}
            disabled={history.length <= 1}
            className="p-1 rounded text-neutral-slate-600 hover:text-neutral-slate-900 disabled:opacity-40"
            title="Undo"
          >
            <Undo2 className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="p-1 rounded text-neutral-slate-600 hover:text-neutral-slate-900"
            title="Clear Canvas"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="px-2 py-1 rounded bg-neutral-slate-100 text-neutral-slate-700 hover:bg-neutral-slate-200 font-medium text-[11px] flex items-center gap-1"
          >
            <Download className="w-3 h-3" /> Save PNG
          </button>
        </div>
      </div>

      {/* Interactive HTML5 Canvas */}
      <div className="w-full flex justify-center bg-neutral-slate-100 rounded-xl p-1.5 border border-neutral-slate-200 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={640}
          height={280}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          className="bg-white rounded-lg cursor-crosshair max-w-full touch-none shadow-xs"
        />
      </div>

      <div className="text-[11px] text-neutral-slate-500 text-center">
        Tip: Click on <strong>Triangle</strong>, <strong>Circle</strong>, or <strong>Parabola</strong> and click on the canvas to place instant geometric figures!
      </div>
    </div>
  );
}
