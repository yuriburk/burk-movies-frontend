type ButtonProps = React.PropsWithChildren & JSX.IntrinsicElements['button']

const Button = ({ children, ...props }: ButtonProps) => (
  <button
    {...props}
    className="bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full text-white text-base font-semibold px-7 py-3"
  >
    {children}
  </button>
)

export default Button
