///** @type {import('next').NextConfig} */
//const nextConfig = {};

// //export default nextConfig;
// import {remark} from 'remark'
// import remarkMdx from 'remark-mdx'
// import createMDX from '@next/mdx'
// import nextMdx from '@next/mdx'
// import remarkGfm from 'remark-gfm'

// const withMdx = nextMdx({
//   // Add markdown plugins here, as desired
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm, remarkMdx],
//     rehypePlugins: [],
//   },
// })

// /** @type {import('next').NextConfig} */
// const nextConfig = withMdx({
//   // Configure `pageExtensions`` to include MDX files
//   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//   // Optionally, add any other Next.js config below
// })
 
// // Wrap MDX and Next.js config with each other
// export default nextConfig


// next.config.mjs
import mdx from '@next/mdx';
import remarkMdx from 'remark-mdx';

export default mdx({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkMdx]
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});
