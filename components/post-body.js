import { MDXRemote } from "next-mdx-remote";
import { PageLink } from "./PageLink";
import { VideoFile } from "./VideoFile";

const components = { PageLink, VideoFile };

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="markdown">
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  );
}
