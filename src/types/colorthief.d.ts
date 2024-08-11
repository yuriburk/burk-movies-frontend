declare module 'colorthief' {
  type Color = [number, number, number]
  export default class ColorThief {
    getColor: (img: HTMLImageElement | string | null) => Color
    getPalette: (img: HTMLImageElement | string | null) => Color[]
  }
}
