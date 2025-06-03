import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with Tailwind CSS class merging
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return twMerge(clsx(inputs));
} 