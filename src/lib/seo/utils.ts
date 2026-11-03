/**
 * SEO Helper utilities
 */
import { SITE_URL } from './site';

/**
 * Truncates text to a maximum length without cutting words in the middle.
 * Adds an ellipsis if the text was truncated.
 */
export function truncateDescription(text: string, maxLength: number = 155): string {
  if (!text || text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace === -1) return truncated;
  return truncated.substring(0, lastSpace) + '...';
}

/**
 * Ensures a URL is absolute by prefixing it with the site URL if needed.
 */
export function toAbsoluteUrl(url: string): string {
  if (!url) return `${SITE_URL}/og.png`;
  if (url.startsWith('http')) return url;
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `${SITE_URL}${cleanPath}`;
}
