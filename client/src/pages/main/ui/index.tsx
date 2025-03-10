import { Layout } from "../../../shared/ui/layout"
import { Header } from "../../../widgets/ui/header"
import { Footer } from "../../../widgets/ui/footer"

export const Main = () => {
  return (
    <>
      <Layout>
        <Header />
        <main className="grow-1">main</main>
        <Footer />
      </Layout>
    </>
  )
}
