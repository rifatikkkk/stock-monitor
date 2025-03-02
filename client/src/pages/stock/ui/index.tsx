import { Layout } from "../../../shared/ui/layout"
import { Footer } from "../../../widgets/ui/footer"
import { Header } from "../../../widgets/ui/header"
import { Monitor } from "../../../widgets/ui/monitor"

export const Stock = () => {
  return (
    <>
      <Layout>
        <Header />
        <Monitor />
        <Footer />
      </Layout>
    </>
  )
}
