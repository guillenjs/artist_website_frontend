import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BASE_URL }from '../src/components/constants'
import Layout from '../src/components/layout'
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


{/* <main className={styles.main}>
<h1 className={styles.title}>
  Welcome to <a href="https://nextjs.org">Next.js!</a>
</h1>

<p className={styles.description}>
  Get started by editing{' '}
  <code className={styles.code}>pages/index.js</code>
</p>

<div className={styles.grid}>
  <a href="https://nextjs.org/docs" className={styles.card}>
    <h2>Documentation &rarr;</h2>
    <p>Find in-depth information about Next.js features and API.</p>
  </a>

  <a href="https://nextjs.org/learn" className={styles.card}>
    <h2>Learn &rarr;</h2>
    <p>Learn about Next.js in an interactive course with quizzes!</p>
  </a>

  <a
    href="https://github.com/vercel/next.js/tree/canary/examples"
    className={styles.card}
  >
    <h2>Examples &rarr;</h2>
    <p>Discover and deploy boilerplate example Next.js projects.</p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
  >
    <h2>Deploy &rarr;</h2>
    <p>
      Instantly deploy your Next.js site to a public URL with Vercel.
    </p>
  </a>
</div>
</main> */}


      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}