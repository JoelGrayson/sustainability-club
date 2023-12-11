/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const jredirects=require('./jredirects/dist');
 
const nextConfig={
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    swcMinify: true,
    redirects: jredirects,
}
 
module.exports = withMDX(nextConfig)
