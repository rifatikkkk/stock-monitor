import { type NavLinkType } from "../../types"

type Props = {
  links: NavLinkType[] | undefined
}

export const NavLink: React.FC<Props> = ({ links }) => {
  return (
    <nav className="flex flex-row gap-3">
      {links?.map(link => {
        return (
          <a className="text-white hover:text-custom-green" href={link.href}>
            {link.name}
          </a>
        )
      })}
    </nav>
  )
}
