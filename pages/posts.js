import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout list={allPosts}></Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return {
    props: { allPosts },
  };
}
