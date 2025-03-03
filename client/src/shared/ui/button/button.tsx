type Props = {
  children: React.ReactNode
  type?: "button" | "submit"
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
}

export const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      className={`bg-custom-green rounded-xl cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
