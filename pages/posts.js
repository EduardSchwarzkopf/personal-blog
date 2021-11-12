import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import { LABEL_POSTS } from "../lib/constants";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout list={allPosts} label={LABEL_POSTS}></Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return {
    props: { allPosts },
  };
}
