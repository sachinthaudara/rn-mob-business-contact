/**
 * Convert hex to RGB or RGBA
 * @param hexValue hex decimal value
 * @param alpha alpha value *(optional)*
 * @returns {string} RGB or RGBA
 */
export const hexToRgb = (hexValue: string, alpha?: number): string => {
  const hex = hexValue.replace('#', '');
  const r = parseInt(
    hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16,
  );
  const g = parseInt(
    hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16,
  );
  const b = parseInt(
    hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16,
  );

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};
