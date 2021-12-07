import { useRouter } from "next/router";
import Link from "next/link";
import ErrorPage from "next/error";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import { serialize } from "next-mdx-remote/serialize";
import { TimesIcon } from "../../components/Icon";
import TitleBar from "../../components/TitleBar";
import { LABEL_POSTS } from "../../lib/constants";
import { NextSeo } from "next-seo";
import { baseUrl } from "/config/seo";
import routes from "/config/routes";

export default function Post({ post, allPosts }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <div className="md:hidden">
        <TitleBar>
          <Link href="/posts">
            <a className="flex items-center justify-center p-2 rounded-md md:hidden hover:bg-gray-200">
              <TimesIcon />
            </a>
          </Link>
        </TitleBar>
      </div>

      <NextSeo
        title={post.title}
        description={post.content}
        openGraph={{
          title: post.title,
          url: `${baseUrl}/posts/${post.slug}`,
          description: post.content,
          images: [
            {
              url: routes.posts.seo.image,
              alt: routes.posts.description,
            },
          ],
        }}
      />

      <Layout list={allPosts} label={LABEL_POSTS} toggleMenuVisible={false}>
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
    </>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts(["title", "date", "slug", "content", "excerpt"]);
  let post = allPosts.find((post) => {
    if (`${post.slug}` === params.slug) {
      post.active = true;
      return post;
    }
    return null;
  });

  if (post) {
    post.content = await serialize(post.content);
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
