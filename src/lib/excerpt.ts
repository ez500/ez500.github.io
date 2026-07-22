/**
 * Build a short plain-text excerpt from the start of a post's Markdown body —
 * used to fill out blog cards (homepage + blog index). Strips the common
 * Markdown syntax so the first `words` words read as clean prose, then appends
 * an ellipsis to signal the text trails off.
 */
export function excerpt(body: string | undefined, words = 20): string {
  if (!body) return "";
  const plain = body
    .replace(/```[\s\S]*?```/g, " ") // fenced code blocks
    .replace(/`[^`]*`/g, " ") // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/^#{1,6}\s+/gm, " ") // headings
    .replace(/^\s*[-*+]\s+/gm, " ") // list bullets
    .replace(/[*_>#~]/g, " ") // emphasis / blockquote / strikethrough markers
    .replace(/\s+/g, " ")
    .trim();

  const parts = plain.split(" ").filter(Boolean);
  const slice = parts.slice(0, words).join(" ");
  return parts.length > words ? `${slice}…` : slice;
}
