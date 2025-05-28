/**
 * Utility functions for KDRV UI components
 */

/**
 * Combines multiple class names into a single string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Creates a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
} 