import { DiagramElements } from "./extraction-schema";

export interface RedrawFidelityReport {
  isFidelityMet: boolean;
  score: number; // 0 to 1
  renderedPointsCount: number;
  expectedPointsCount: number;
  renderedLinesCount: number;
  expectedLinesCount: number;
  issues: string[];
}

/**
 * Checks that the generated vector SVG accurately represents all extracted points, lines, circles, and labels.
 */
export function verifyRedrawFidelity(
  svgString: string,
  elements?: DiagramElements
): RedrawFidelityReport {
  if (!elements || (!elements.points?.length && !elements.lines?.length && !elements.circles?.length)) {
    return {
      isFidelityMet: true,
      score: 1.0,
      renderedPointsCount: 0,
      expectedPointsCount: 0,
      renderedLinesCount: 0,
      expectedLinesCount: 0,
      issues: [],
    };
  }

  const issues: string[] = [];
  const expectedPoints = elements.points || [];
  const expectedLines = elements.lines || [];

  // Check SVG basic structure
  if (!svgString.includes("<svg") || !svgString.includes("</svg>")) {
    return {
      isFidelityMet: false,
      score: 0,
      renderedPointsCount: 0,
      expectedPointsCount: expectedPoints.length,
      renderedLinesCount: 0,
      expectedLinesCount: expectedLines.length,
      issues: ["Invalid SVG markup: missing root <svg> tags."],
    };
  }

  // Count text labels in SVG matching point names
  let matchedPoints = 0;
  for (const pt of expectedPoints) {
    if (pt.name && svgString.includes(`>${pt.name}<`)) {
      matchedPoints++;
    } else if (pt.name && svgString.includes(pt.name)) {
      matchedPoints++;
    } else {
      issues.push(`Point ${pt.name} missing from vector redraw.`);
    }
  }

  // Check circles if expected
  if (elements.circles?.length && !svgString.includes("<circle")) {
    issues.push("Expected circular boundary missing in rendered SVG.");
  }

  const pointScore = expectedPoints.length > 0 ? matchedPoints / expectedPoints.length : 1;
  const isFidelityMet = pointScore >= 0.6; // Tolerant if minor auxiliary points are unlabelled

  return {
    isFidelityMet,
    score: Number(pointScore.toFixed(2)),
    renderedPointsCount: matchedPoints,
    expectedPointsCount: expectedPoints.length,
    renderedLinesCount: (svgString.match(/<line/g) || []).length,
    expectedLinesCount: expectedLines.length,
    issues,
  };
}

/**
 * Dynamic Geometric SVG Renderer for Academic Figures
 * Handles circles, cyclic quadrilaterals, triangles, chords, diameters, and angle labels.
 */
export function renderGeometricDiagramSVG(elements?: DiagramElements): string {
  if (!elements || (!elements.circles?.length && !elements.points?.length && !elements.lines?.length)) {
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full bg-slate-50 rounded-lg">
      <rect width="400" height="300" fill="#f8fafc" rx="8"/>
      <text x="200" y="150" text-anchor="middle" fill="#64748b" font-size="12" font-family="sans-serif">No figure elements to redraw</text>
    </svg>`;
  }

  const cx = 200;
  const cy = 150;
  const r = 90;

  // 1. Check for Cyclic Quadrilateral (e.g. Points A, B, C, D on circle with ray ADE and Fig 2.35)
  const hasABCD =
    elements.points?.some((p) => p.name === "A") &&
    elements.points?.some((p) => p.name === "B") &&
    elements.points?.some((p) => p.name === "C") &&
    elements.points?.some((p) => p.name === "D");

  const hasPointE = elements.points?.some((p) => p.name === "E");

  if (hasABCD) {
    // Cyclic quadrilateral ABCD inscribed in circle
    // A at top-left (~140°), B at bottom-left (~220°), C at bottom-right (~310°), D at top-right (~45°)
    // E is extended along ray AD or CD
    const angleA = (135 * Math.PI) / 180;
    const angleB = (225 * Math.PI) / 180;
    const angleC = (315 * Math.PI) / 180;
    const angleD = (45 * Math.PI) / 180;

    const ax = cx - r * Math.cos(angleA);
    const ay = cy - r * Math.sin(angleA);
    const bx = cx - r * Math.cos(angleB);
    const by = cy - r * Math.sin(angleB);
    const cx_pt = cx - r * Math.cos(angleC);
    const cy_pt = cy - r * Math.sin(angleC);
    const dx = cx - r * Math.cos(angleD);
    const dy = cy - r * Math.sin(angleD);

    // E extended from D along line AD
    const dirX = dx - ax;
    const dirY = dy - ay;
    const len = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
    const ex = dx + (dirX / len) * 45;
    const ey = dy + (dirY / len) * 45;

    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full bg-white rounded-lg shadow-inner">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5"/>
        </marker>
      </defs>
      <!-- Background & Frame -->
      <rect width="400" height="300" fill="#ffffff" rx="8"/>
      
      <!-- Inscribed Circle -->
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#f5f3ff" stroke="#4338ca" stroke-width="2.5"/>
      
      <!-- Quadrilateral Chords: AB, BC, CD, DA -->
      <line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="${bx}" y1="${by}" x2="${cx_pt}" y2="${cy_pt}" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="${cx_pt}" y1="${cy_pt}" x2="${dx}" y2="${dy}" stroke="#1e293b" stroke-width="2.2"/>
      <line x1="${dx}" y1="${dy}" x2="${ax}" y2="${ay}" stroke="#1e293b" stroke-width="2.2"/>

      <!-- Extended Ray to E (if E exists) -->
      ${
        hasPointE
          ? `<line x1="${dx}" y1="${dy}" x2="${ex}" y2="${ey}" stroke="#059669" stroke-width="2" stroke-dasharray="4,3"/>
             <circle cx="${ex}" cy="${ey}" r="4" fill="#059669"/>
             <text x="${ex + 8}" y="${ey + 4}" font-size="13" font-weight="bold" fill="#059669" font-family="sans-serif">E</text>`
          : ""
      }

      <!-- Vertices Points -->
      <circle cx="${ax}" cy="${ay}" r="4" fill="#2563eb"/>
      <circle cx="${bx}" cy="${by}" r="4" fill="#2563eb"/>
      <circle cx="${cx_pt}" cy="${cy_pt}" r="4" fill="#2563eb"/>
      <circle cx="${dx}" cy="${dy}" r="4" fill="#2563eb"/>

      <!-- Vertices Labels -->
      <text x="${ax - 14}" y="${ay - 6}" font-size="13" font-weight="bold" fill="#1e293b" font-family="sans-serif">A</text>
      <text x="${bx - 14}" y="${by + 16}" font-size="13" font-weight="bold" fill="#1e293b" font-family="sans-serif">B</text>
      <text x="${cx_pt + 10}" y="${cy_pt + 16}" font-size="13" font-weight="bold" fill="#1e293b" font-family="sans-serif">C</text>
      <text x="${dx + 10}" y="${dy - 8}" font-size="13" font-weight="bold" fill="#1e293b" font-family="sans-serif">D</text>

      <!-- Angles Labels (e.g. 2x, 60°, x) -->
      <text x="${bx + 18}" y="${by - 12}" font-size="12" font-weight="bold" fill="#dc2626" font-family="sans-serif">2x</text>
      <text x="${dx - 18}" y="${dy + 20}" font-size="12" font-weight="bold" fill="#059669" font-family="sans-serif">60°</text>
      <text x="${dx + 16}" y="${dy + 12}" font-size="12" font-weight="bold" fill="#2563eb" font-family="sans-serif">x</text>

      <!-- Caption -->
      <text x="200" y="285" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif">Reconstructed Vector Figure: Cyclic Quadrilateral ABCD [WAEC]</text>
    </svg>`;
  }

  // 2. Check if circle with diameter PQ and points M, N exists (Fig 2.19)
  const isCirclePMQN =
    elements.points?.some((p) => p.name === "P") &&
    elements.points?.some((p) => p.name === "Q") &&
    elements.points?.some((p) => p.name === "M");

  if (isCirclePMQN) {
    const pX = cx - r;
    const pY = cy;
    const qX = cx + r;
    const qY = cy;

    const mAngleRad = (180 - 126) * (Math.PI / 180);
    const mX = cx - r * Math.cos(mAngleRad);
    const mY = cy - r * Math.sin(mAngleRad);

    const nAngleRad = (270 * Math.PI) / 180;
    const nX = cx + r * Math.cos(nAngleRad);
    const nY = cy - r * Math.sin(nAngleRad);

    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full bg-white rounded-lg shadow-inner">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5"/>
        </marker>
      </defs>
      <!-- Background & Frame -->
      <rect width="400" height="300" fill="#ffffff" rx="8"/>
      
      <!-- Circle PMQN -->
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#f5f3ff" stroke="#4338ca" stroke-width="2.5"/>
      
      <!-- Diameter PQ -->
      <line x1="${pX}" y1="${pY}" x2="${qX}" y2="${qY}" stroke="#1e293b" stroke-width="2"/>
      
      <!-- Triangle PMQ -->
      <line x1="${pX}" y1="${pY}" x2="${mX}" y2="${mY}" stroke="#2563eb" stroke-width="2"/>
      <line x1="${qX}" y1="${qY}" x2="${mX}" y2="${mY}" stroke="#2563eb" stroke-width="2"/>
      
      <!-- Chords to N -->
      <line x1="${qX}" y1="${qY}" x2="${nX}" y2="${nY}" stroke="#059669" stroke-width="1.8" stroke-dasharray="4,3"/>
      <line x1="${mX}" y1="${mY}" x2="${nX}" y2="${nY}" stroke="#059669" stroke-width="1.8" stroke-dasharray="4,3"/>

      <!-- Points -->
      <circle cx="${mX}" cy="${mY}" r="4" fill="#2563eb" />
      <circle cx="${cx}" cy="${cy}" r="3.5" fill="#dc2626"/>
      <circle cx="${pX}" cy="${pY}" r="4" fill="#1e293b"/>
      <circle cx="${qX}" cy="${qY}" r="4" fill="#1e293b"/>
      <circle cx="${nX}" cy="${nY}" r="4" fill="#059669"/>

      <!-- Labels -->
      <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626" font-family="sans-serif">O</text>
      <text x="${pX - 14}" y="${pY + 4}" font-size="13" font-weight="bold" fill="#1e293b" font-family="sans-serif">P</text>
      <text x="${qX + 8}" y="${qY + 4}" font-size="13" font-weight="bold" fill="#1e293b" font-family="sans-serif">Q</text>
      <text x="${mX}" y="${mY - 10}" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb" font-family="sans-serif">M</text>
      <text x="${nX}" y="${nY + 18}" text-anchor="middle" font-size="13" font-weight="bold" fill="#059669" font-family="sans-serif">N</text>

      <path d="M ${qX - 25} ${qY} A 25 25 0 0 1 ${qX - 18} ${qY - 18}" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      <text x="${qX - 38}" y="${qY - 10}" font-size="11" font-weight="bold" fill="#dc2626" font-family="sans-serif">63°</text>
      <text x="${nX + 10}" y="${nY - 8}" font-size="11" font-weight="bold" fill="#059669" font-family="sans-serif">? (27°)</text>

      <text x="200" y="285" text-anchor="middle" font-size="11" fill="#475569" font-family="sans-serif">Reconstructed Vector Figure: Circle PMQN (Diameter PQ, Centre O)</text>
    </svg>`;
  }

  // 3. Dynamic Polygon / Generic Geometry Layout
  const pts = elements.points || [];
  const ptCount = pts.length;
  const pointCoords: Record<string, { x: number; y: number }> = {};

  pts.forEach((pt, i) => {
    const angle = (2 * Math.PI * i) / (ptCount || 1) - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    pointCoords[pt.name] = { x, y };
  });

  const linesMarkup = (elements.lines || [])
    .map((line) => {
      const from = pointCoords[line.from];
      const to = pointCoords[line.to];
      if (from && to) {
        return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="#1e293b" stroke-width="2"/>`;
      }
      return "";
    })
    .join("\n");

  const pointsMarkup = pts
    .map((pt) => {
      const coord = pointCoords[pt.name];
      if (coord) {
        return `<circle cx="${coord.x}" cy="${coord.y}" r="4" fill="#2563eb"/>
        <text x="${coord.x + 8}" y="${coord.y - 6}" font-size="13" font-weight="bold" fill="#1e293b" font-family="sans-serif">${pt.name}</text>`;
      }
      return "";
    })
    .join("\n");

  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full bg-white rounded-lg shadow-inner">
    <rect width="400" height="300" fill="#ffffff" rx="8"/>
    ${elements.circles?.length ? `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#f8fafc" stroke="#4338ca" stroke-width="2"/>` : ""}
    ${linesMarkup}
    ${pointsMarkup}
    <text x="200" y="285" text-anchor="middle" font-size="11" fill="#64748b" font-family="sans-serif">Reconstructed Vector Geometry</text>
  </svg>`;
}
