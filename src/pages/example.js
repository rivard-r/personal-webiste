// // pages/example.js
// import MDXLayout from '@/src/app/_components/MDXlayout';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote } from 'next-mdx-remote';

// const components = {
//   h1: (props) => <h1 style={{ color: 'blue' }} {...props} />,
//   p: (props) => <p style={{ fontSize: '18px' }} {...props} />,
//   Image: (props) => <img style={{ maxWidth: '100%' }} {...props} />,
// };

// const ExamplePage = ({ mdxSource, frontMatter }) => {
//   return (
//     <MDXLayout>
//       <article>
//         <h1>{frontMatter.title}</h1>
//         <MDXRemote {...mdxSource} components={components} />
//       </article>
//     </MDXLayout>
//   );
// };

// export const getStaticProps = async () => {
//   const mdxFilePath = path.join(process.cwd(), 'src/pages/example.mdx');
//   const source = fs.readFileSync(mdxFilePath, 'utf-8');

//   const { content, data } = matter(source);
//   const mdxSource = await serialize(content, {
//     scope: data,
//   });

//   return {
//     props: {
//       mdxSource,
//       frontMatter: data,
//     },
//   };
// };

// export default ExamplePage;
// pages/example.js
// pages/example.js
// pages/example.js
// pages/example.js
import MDXLayout from '@/src/app/_components/MDXlayout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const components = {
  h1: (props) => <h1 style={{ color: 'blue' }} {...props} />,
  p: (props) => <p style={{ fontSize: '18px' }} {...props} />,
  img: (props) => <img style={{ maxWidth: '100%' }} {...props} />,
  Image: (props) => <img src={props.src} alt={props.alt} width={props.width} height={props.height} />,
};

const ExamplePage = ({ mdxSource, frontMatter }) => {
  return (
    <MDXLayout>
      <article>
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...mdxSource} components={components} />
      </article>
    </MDXLayout>
  );
};

export const getStaticProps = async () => {
  const mdxFilePath = path.join(process.cwd(), 'src/pages/example.mdx');
  const source = fs.readFileSync(mdxFilePath, 'utf-8');

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
};

export default ExamplePage;



