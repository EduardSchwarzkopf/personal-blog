import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Post({ post, allPosts }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout list={allPosts}>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <PostHeader
              title={post.title}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts(["title", "date", "slug", "content", "excerpt"]);
  let post = allPosts.find((post) => `${post.slug}` === params.slug);

  if (post) {
    post.content = await markdownToHtml(post.content);
  } else {
    post = null;
  }

  return {
    props: { post: post, allPosts: allPosts },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
