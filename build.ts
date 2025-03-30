const build = Bun.build({
  entrypoints: ["./src/userscript.js"],
  outdir: "dist",
  target: "browser",
  minify: true,
});
