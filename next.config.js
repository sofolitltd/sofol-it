/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "/**",

            },
        ],
    }

}

// module.exports = {
//   reactStrictMode: true,
//   // Enable Incremental Static Regeneration
//   experimental: {
//     revalidate: 60, // Revalidate every 60 seconds
//   },
// };

module.exports = nextConfig
