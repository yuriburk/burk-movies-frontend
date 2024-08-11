declare module 'colorthief/dist/color-thief-node' {
  type Color = [number, number, number]

  export function getColor(img: HTMLImageElement | string | null): Color
  export function getPalette(img: HTMLImageElement | string | null): Color[]
}
