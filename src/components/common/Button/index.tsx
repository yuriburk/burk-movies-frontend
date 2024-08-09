type ButtonProps = React.PropsWithChildren & JSX.IntrinsicElements['button']

const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    {...props}
    className={`bg-gradient-to-r from-primary-color to-secondary-color rounded-full text-white text-base font-semibold px-7 py-3 ${className}`}
  >
    {children}
  </button>
)

export default Button
