const lessons = [
  ["physics-ss1-measurement-motion-forces", "fundamental-derived-quantities-si-units"],
  ["physics-ss1-measurement-motion-forces", "vernier-calipers-micrometer-screw-gauge"],
  ["physics-ss1-measurement-motion-forces", "dimensional-analysis-and-physical-homogeneity"],
  ["physics-ss1-measurement-motion-forces", "rectilinear-motion-equations-uniform-acceleration"],
  ["physics-ss1-measurement-motion-forces", "velocity-time-graphs-gradient-area-analysis"],
  ["physics-ss1-measurement-motion-forces", "vectors-scalars-component-resolution"],
  ["physics-ss1-measurement-motion-forces", "principle-of-moments-and-center-of-gravity"],
  ["physics-ss2-energy-heat-waves-light", "thermal-expansion-linear-superficial-cubic"],
  ["physics-ss2-energy-heat-waves-light", "specific-heat-capacity-method-of-mixtures"],
  ["physics-ss3-electricity-magnetism-modern", "emf-internal-resistance-terminal-pd"],
  ["physics-ss3-electricity-magnetism-modern", "radioactive-decay-half-life-nuclear-reactions"],
  ["waec-neco-ssce-physics-mastery", "projectile-motion-time-of-flight-range-calculations"],
  ["jamb-utme-physics-complete", "cbt-time-management-proportional-reasoning"],
  ["physics-numericals-bootcamp", "formula-rearrangement-powers-roots-reciprocals"],
  ["graphs-diagrams-practical-physics", "waec-graph-plotting-rules-scales-gradients"],
  ["mechanics-deep-dive", "friction-inclined-plane-normal-reaction"],
  ["heat-and-thermal-physics", "latent-heat-fusion-vaporisation-ice-water-steam"],
  ["waves-sound-light-optics", "snells-law-refractive-index-total-internal-reflection"],
  ["electricity-magnetism-deep-dive", "transformers-turns-ratios-power-efficiency-ac"],
  ["atomic-nuclear-physics-essentials", "photoelectric-effect-work-function-einstein-equation"]
];

async function run() {
  let ok = 0;
  for (const [course, lesson] of lessons) {
    const url = `http://localhost:3000/api/academy/courses/${course}/lessons/${lesson}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.success && data.video?.hasVideo && data.video?.primary?.providerVideoId) {
      ok++;
      console.log(`✓ [${ok}/${lessons.length}] ${course} / ${lesson} -> ${data.video.primary.providerVideoId} ("${data.video.primary.title}")`);
    } else {
      console.error(`✗ FAILED: ${course} / ${lesson}`, data);
    }
  }
  console.log(`\nResult: ${ok}/${lessons.length} physics lessons verified with active video player.`);
  if (ok !== lessons.length) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
