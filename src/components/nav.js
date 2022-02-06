import Link from 'next/link'
import StrapiClient from './strapi_client'
import BASE_URL from './constants'

export default function NavBar (){
    const work = []
        return (
            <div>
                navbar
            </div>
        )
}

// the problem here is that get static props does not work in components only pages

// const client = new StrapiClient();
// export async function getStaticProps() {
//   const data = await client.fetchData("/api/work-years")
//   return {
//     props: {
//       // errorCode,
//       data
//     },
//   }
// }
// export default MyApp
