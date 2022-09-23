import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post";

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div>
      <Head>
        <title> Andy Blog</title>
      </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post  key={index.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  //Get files from posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    //create slug

    const slug = filename.replace(".md", "");

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    console.log(markdownWithMeta);

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  // console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
