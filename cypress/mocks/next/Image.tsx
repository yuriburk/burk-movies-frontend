/* eslint-disable @next/next/no-img-element */
import type { ImageProps } from 'next/image'

const changeURL = (url: string) => {
  return url
    .replace(/\/_next\/static\/media\//, '/images/')
    .replace(/(?<=\.)(.+)(?=png|jp?eg|tiff?|png|webp|bmp|gif)/, '')
}

const Image = (props: ImageProps) => {
  if (typeof props.src === 'string') {
    return (
      <img
        id={props.id}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className}
      />
    )
  }

  let src: string
  if ('src' in props.src) {
    src = props.src.src
  } else {
    src = props.src.default.src
  }

  return (
    <img
      id={props.id}
      src={changeURL(src)}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className={props.className}
    />
  )
}

export default Image
