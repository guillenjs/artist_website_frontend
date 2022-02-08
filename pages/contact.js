import Head from 'next/head'

export default function Contact(errorCode, contact) {
    return (
        <div>
            <Head>
                <title>Jorge Guillen</title>
                <meta name="description" content="Jorge Guillen portfolio hompage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>this is the contact page</h1>
        </div>
    )
}

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching libraryhttp://httpstat.us/500
//     const res =  await fetch(`${process.env.STRAPI_PATH}/contact?populate=*`) 
//     const errorCode = res.ok ? false : true
//     const contact= res.ok ? await res.json() : null
    

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//     props: {
//         errorCode,
//         contact
//     },
// }
// }
