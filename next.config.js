module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    domains: ['localhost:1337', 'localhost', 'localhost:3000', 'http://localhost:1337', process.env.NEXT_PUBLIC_STRAPI_DOMAIN ],
  }
}
