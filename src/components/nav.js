import Link from 'next/link'
import StrapiClient from './strapi_client'
import {BASE_URL, TOKEN} from './constants'
import useSWR from 'swr'
import styles from '../../styles/Nav.module.css'
import { useState, useEffect} from 'react'
import { render } from 'react-dom'

const fetcher = (...args) =>  fetch(...args,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
  }
}).then((res) => res.json())

export default function NavBar (){

    const { data, error } = useSWR(`${BASE_URL}/api/work-years`, fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const renderYears = () => {
        return data.data.map(year => (
                        <Link href={`/works/${year.attributes.slug}`}>{year.attributes.title}</Link>              
                ))
    }

        return (
            <div class={styles.navbar}>
                <Link href="/cv">CV</Link>
                <Link href="/cv">Works</Link>
                <Link href="/contact">Contact</Link>
                <div class={styles.dropdown}>
                    <button class={styles.dropbtn}>Dropdown 
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class={styles.dropdown_content}>
                        {renderYears()}
                    </div>
                </div> 
            </div>
        )
}




//     useEffect(() => {
//         setLoading(true)
//         async function fetchNavItems() {
//             // const client = new StrapiClient()
//             // const data = await client.fetchData('/api/work-years')
//             // setData(data)
    
//             // const client = new StrapiClient()
//             // const data = client.fetchData('/api/work-years')
//         //     await fetch(`${BASE_URL}/api/work-years`,{
//         //         method: 'GET',
//         //         headers: {
//         //           Authorization: `Bearer ${TOKEN}`,
//         //       }
//         //   })
//         //     .then((res) => res.json())
//         //     .then((data) => {
//         //       setData(data)
//         //       setLoading(false)
//         //     })
//         }
//         setLoading(false)
//         fetchNavItems()
//     }, [])
//     console.log(data)
//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>



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

