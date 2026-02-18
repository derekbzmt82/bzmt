export const SITE_NAME = "BZMT";
export const SITE_FULL_NAME = "BodyZen Muscular Therapy";
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://bodyzenmuscular.com").replace(/\/$/, "");
export const DEFAULT_TITLE = `${SITE_NAME} | Sports Massage in Cambridge, MA`;
export const DEFAULT_DESCRIPTION =
  "Sports massage, deep tissue, myofascial release, and recovery-focused muscular therapy in Cambridge, MA.";
export const DEFAULT_IMAGE_PATH = "/logo-square.png";

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function canonicalUrl(path: string): string {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${normalized}`;
}
