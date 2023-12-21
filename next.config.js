/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol:'http',
                hostname:'localhost'
            },
        ]
    }
}

module.exports = nextConfig
