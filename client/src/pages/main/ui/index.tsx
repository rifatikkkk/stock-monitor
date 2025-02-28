import { Layout } from "../../../shared/ui/layout"
import logo from "../../../shared/assets/logo.svg"
import companyName from "../../../shared/assets/companyName.svg"

export const Main = () => {
  return (
    <>
      <Layout>
        <header className="flex flex-row justify-between py-8 px-28">
          <a
            className="flex flex-row items-center gap-[26px] no-underline" // ?
            href="/"
          >
            <img src={logo} width={38} height={38} alt="logo" />
            <img src={companyName} width={91} height={20} alt="company name" />
          </a>
          <nav className="text-white hover:text-hover">
            <a href="/stock">Stock</a>
          </nav>
        </header>
        <main className="grow-1">main</main>
        <footer className="py-8 px-[22px] text-xs text-footer opacity-[0.9]">
          <p>Peter Partner, 2025</p>
        </footer>
      </Layout>
    </>
  )
}
