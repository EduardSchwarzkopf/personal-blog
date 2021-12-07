import { MDXRemote } from "next-mdx-remote";
const components = {};

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="markdown">
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  );
}
