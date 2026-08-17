export function toProgramSlug(programName: string): string {
  return programName.toLowerCase().trim().replace(/\s+/g, "-");
}
