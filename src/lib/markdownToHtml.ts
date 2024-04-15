import { remark } from "remark";
import mdx from 'remark-mdx'
import gfm from 'remark-gfm'
import html from "remark-html";

export default async function markdownToHtml(mdxfile: string) {
  const result = await remark().use(mdx).process(mdxfile);
  return result.toString();
}
