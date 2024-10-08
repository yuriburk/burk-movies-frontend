'use client'
import useProgressRouter from '@/hooks/useProgressRouter'
import { themeColors } from '../../../../tailwind.config'

type LogoProps = {
  id: string
  width: number
  height: number
  onClick?: () => void
}

const Logo = ({ id, width, height }: LogoProps) => {
  const { onLogoClick } = useProgressRouter()

  return (
    <button className="flex items-center gap-1" onClick={onLogoClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 94 94"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor={themeColors['primary-color']} offset="0%"></stop>
            <stop
              stopColor={themeColors['secondary-color']}
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g fill={`url(#${id})`}>
          <rect x="0" y="0" width="94" height="94" rx="10" ry="10"></rect>
        </g>
        <g
          transform="translate(43, 43) scale(0.8) translate(-43, -43)"
          fill="#ffffff"
          stroke="#ffffff"
          strokeWidth="1.5"
        >
          <path d="M11.125,90c0.553,0,1-0.448,1-1v-6.177h11.961V89c0,0.552,0.447,1,1,1s1-0.448,1-1v-6.177h48.089V89c0,0.552,0.447,1,1,1s1-0.448,1-1v-6.177h11.961V89c0,0.552,0.447,1,1,1s1-0.448,1-1V11c0-0.552-0.447-1-1-1s-1,0.448-1,1v6.177H76.175V11c0-0.552-0.447-1-1-1s-1,0.448-1,1v6.177H26.086V11c0-0.552-0.447-1-1-1s-1,0.448-1,1v6.177H12.125V11c0-0.552-0.447-1-1-1s-1,0.448-1,1v78C10.125,89.552,10.572,90,11.125,90z M24.086,59.607H12.125V51h11.961V59.607z M24.086,49H12.125v-8.607h11.961V49z M12.125,61.607h11.961v8.607H12.125V61.607z M24.086,38.393H12.125v-8.607h11.961V38.393z M12.125,80.823v-8.608h11.961v8.608H12.125z M76.175,80.823v-8.608h11.961v8.608H76.175z M76.175,51h11.961v8.607H76.175V51z M88.136,49H76.175v-8.607h11.961V49z M76.175,61.607h11.961v8.607H76.175V61.607z M88.136,38.393H76.175v-8.607h11.961V38.393z M88.136,19.177v8.608H76.175v-8.608H88.136z M74.175,19.177v61.646H26.086V19.177H74.175z M24.086,19.177v8.608H12.125v-8.608H24.086z"></path>
          <path d="M38.478,65.917c0.154,0.089,0.327,0.134,0.5,0.134s0.346-0.044,0.5-0.134l24.51-14.151c0.31-0.179,0.5-0.509,0.5-0.866s-0.19-0.688-0.5-0.866l-24.51-14.15c-0.309-0.179-0.691-0.179-1,0c-0.31,0.179-0.5,0.509-0.5,0.866v28.301C37.978,65.409,38.168,65.739,38.478,65.917z M39.978,38.482L61.487,50.9l-21.51,12.419V38.482z"></path>
        </g>
      </svg>
      <h1 className="font-extrabold text-xl bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
        Burk Movies
      </h1>
    </button>
  )
}

export default Logo
