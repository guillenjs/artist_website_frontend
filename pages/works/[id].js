import BASE_URL from "../../src/components/constants"
import Layout from "../../src/components/layout"

const Details = ({work}) => {
    return(
        <Layout>
            <div>
                <h1>Details Page</h1>
            </div>
        </Layout>
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