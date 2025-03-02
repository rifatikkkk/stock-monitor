import { Logo } from "../../../shared/ui/logo"
import { NavLink } from "../../../shared/ui/navLink"
import { type NavLinkType } from "../../../shared/types"

const navLinks: NavLinkType[] = [
  {
    href: "/stock",
    name: "stock",
  },
]

export const Header = () => {
  return (
    <header className="flex flex-row justify-between py-8">
      <Logo />
      <NavLink links={navLinks} />
    </header>
  )
}
