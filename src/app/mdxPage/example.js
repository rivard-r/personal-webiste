// pages/example.js
import MDXLayout from '@/src/app/_components/MDXlayout.js';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const ExamplePage = ({ source, frontMatter }) => {
  return (
    <MDXLayout>
      <article>
        <h1>{frontMatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: source }} />
      </article>
    </MDXLayout>
  );
};

export const getStaticProps = async () => {
  const mdxFilePath = path.join(process.cwd(), 'path/to/example.mdx');
  const source = fs.readFileSync(mdxFilePath, 'utf-8');

  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default ExamplePage;
