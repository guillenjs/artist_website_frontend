import Image from 'next/image'

const base_url = process.env.NEXT_PUBLIC_STRAPI_DOMAIN

export default function Hompage({errorCode, homepage}) {
    console.log(homepage.data.attributes.hompe_photo.data.attributes)
    if (errorCode === true) return <h1>ERROR</h1>
    
    const {home_information} = homepage.data.attributes
    const {alternativeText, url} = homepage.data.attributes.hompe_photo.data.attributes

    return (
        <div>
            <Image
            src={`${base_url}` + `${url}`}
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

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    
    const res =  await fetch(`${process.env.STRAPI_PATH}/homepage?populate=*`) 
    const errorCode = res.ok ? false : true
    const homepage = res.ok ? await res.json() : null
    
    return {
      props: {
        errorCode,
        homepage
      },
    }
  }

