import { MDXRemote } from "next-mdx-remote";
import { PageLink } from "./PageLink";
const components = { PageLink };

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="markdown">
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  );
}
