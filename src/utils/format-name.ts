export function formatName(name: string): string {
  if (!name) {
    return '';
  }

  const trimmedName = name.trim();
  const firstLetter = trimmedName.charAt(0).toUpperCase();
  return firstLetter + trimmedName.slice(1);
}
