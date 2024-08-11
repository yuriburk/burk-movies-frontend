type RoundButtonProps = React.PropsWithChildren &
  JSX.IntrinsicElements['button']

const RoundButton = ({ children, className, ...props }: RoundButtonProps) => (
  <button
    {...props}
    className={`flex items-center justify-center rounded-full bg-primary-background ${className}`}
  >
    {children}
  </button>
)

export default RoundButton
