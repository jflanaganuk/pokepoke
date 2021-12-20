export const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/";

export function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function capitalizeMoveName(input: string): string {
  return input
    .split("-")
    .reduce((acc, d) => {
      return acc + d.charAt(0).toUpperCase() + d.slice(1) + " ";
    }, "")
    .trimEnd();
}
