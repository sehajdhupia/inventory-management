/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "https://s3-sehajinventorymanagement.s3.us-east-2.amazonaws.com",
                port: "",
                pathname: "/**",
            },
        ],
        
    },
};

export default nextConfig;
