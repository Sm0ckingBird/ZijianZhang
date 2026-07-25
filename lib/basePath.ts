// Must match `basePath` in next.config.ts. Static export + next/image both
// require asset URLs to be prefixed manually, so this is the single source
// of truth for that prefix.
export const basePath = "/ZijianZhang";

export function withBasePath(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
