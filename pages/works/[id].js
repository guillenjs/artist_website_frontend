import Head from 'next/head'

const Details = ({work}) => {
    return(
            <div>
                <Head>
                    <title>Jorge Guillen</title>
                    <meta name="description" content="Jorge Guillen portfolio hompage" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1>Details Page</h1>
            </div>
    )
}
export default Details 

// export const getStaticProps = async () => {
//     const res = await fetch(BASE_URL + 'api/works')
//     const errorCode = res.ok ? false : true
//     const data = res.ok ? await res.json() : null

//     const paths = data.map(works => {
//         return {
//             params:{ id: works.id.toString()}
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async = async (context) => {
//         const id = context.params.id
//         const res  = await fetch(BASE_URL + 'api/works/id')
//         const data = await res.json()

//         return {
//             props: {work: data}
//         }

// }