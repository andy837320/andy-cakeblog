import React from "react";
import Link from "next/link";
import Image from "next/image";

function Post({ post }) {
  return (
    <div className="card">
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        height={350}
        width={350}
      />
      <div className="post-date"> Created on {post.frontmatter.date}</div>

      <h3> {post.frontmatter.title}</h3>
      <p> {post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}

export default Post;
