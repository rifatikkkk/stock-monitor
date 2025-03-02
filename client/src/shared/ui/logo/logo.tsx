import logo from "../../assets/logo.svg"
import companyName from "../../assets/companyName.svg"

export const Logo: React.FC = () => {
  return (
    <a
      className="flex flex-row items-center gap-[26px] no-underline" // ?
      href="/"
    >
      <img src={logo} width={38} height={38} alt="logo" />
      <img src={companyName} width={91} height={20} alt="company name" />
    </a>
  )
}
