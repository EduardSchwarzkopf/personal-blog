import Link from "next/link";
import { baseUrl } from "/config/seo";

export function PageLink({ url, children }) {
  let isExternal = baseUrl.indexOf(url) === -1;
  return (
    <Link href={url}>
      <a
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <span className="flex-1">{children ? children : url}</span>
      </a>
    </Link>
  );
}
