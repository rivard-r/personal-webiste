// import type { MDXComponents } from 'mdx/types'
 
// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     ...components,
//   }
// }

import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import profilePhoto from "@/src/public/assets/blog/landing-page/20240412-Rivard_edited.jpg";
import cn from "classnames";
import Header from '@/src/app/_components/header';

 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
    Header,
    cn
  }
}