import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BASE_URL }from '../src/components/constants'
import StrapiClient from '../src/components/strapi_client'

export default function Home({homepage}) {

  if (!homepage) return <h1>ERROR</h1>
  const {alternativeText, url} = homepage.data.attributes.hompe_photo.data.attributes


  return (
      <div className={styles.container}>
        <Head>
          <title>Jorge Guillen</title>
          <meta name="description" content="Jorge Guillen portfolio hompage" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        
        <Image
              src={`${BASE_URL}` + `${url}`}
              alt={alternativeText}
              width={536} 
              height={750} 
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
              />
        <h1>this is the hompage</h1>
      </div>
  )
}

const client = new StrapiClient();
export async function getStaticProps() {
  const homepage = await client.fetchData("/api/homepage?populate=*")

  return {
    props: {
      // errorCode,
      homepage
    },
  }
}


