import Container from "@/src/app/_components/container";
import { HeroPost } from "@/src/app/_components/hero-post";
import { Intro } from "@/src/app/_components/intro";
import { MoreStories } from "@/src/app/_components/more-stories";
import { MoreProjects } from "@/src/app/_components/more-projects";
import { getAllPosts } from "@/src/lib/api";
import Portrait from "@/src/app/_components/portrait"
import About from "@/src/app/_components/about"

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <Portrait />
        <About />
        {morePosts.length > 0 && <MoreProjects posts={morePosts} />}
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
