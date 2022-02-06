import '../styles/globals.css'
import Layout from '../src/components/layout'
import StrapiClient from '../src/components/strapi_client';

function MyApp({ Component, pageProps, }) {
  return (
  <Layout >

    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
