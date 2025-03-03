import { Layout } from "../../../shared/ui/layout"
import { Footer } from "../../../widgets/ui/footer"
import { Header } from "../../../widgets/ui/header"
import { Dashboard } from "../../../widgets/ui/dashboard"

export const Stock = () => {
  return (
    <>
      <Layout>
        <Header />
        <Dashboard />
        <Footer />
      </Layout>
    </>
  )
}
