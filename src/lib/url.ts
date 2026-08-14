// GitHub Pages serves this site under a repo-name base path (e.g. /Kobaru-Website/),
// injected at build time via `astro build --base`. Any hardcoded root-absolute path
// ("/pt/", "/imagens/x.jpg") must go through this helper or it 404s once deployed.
// BASE_URL may or may not carry a trailing slash depending on how --base was passed.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
