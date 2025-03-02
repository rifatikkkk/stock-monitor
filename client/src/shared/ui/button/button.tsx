type Props = {
  children: React.ReactNode
  type?: "button" | "submit"
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Button: React.FC<Props> = ({ children, type, onClick }) => {
  return (
    <button
      type={type}
      className="bg-custom-green rounded-xl p-4 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
