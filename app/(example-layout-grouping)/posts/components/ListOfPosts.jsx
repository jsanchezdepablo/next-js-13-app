import Link from 'next/link';
import { LikeButton } from './LikeButton';

const fetchPosts = () => {
  console.log('fetching posts');

  // getStaticProps
  // -->  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  // getServerSideProps
  // -->  return fetch('https://jsonplaceholder.typicode.com/posts',  { cache: 'no-store' }).then((res) => res.json());

  // incremental static regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10
    }
  }).then((res) => res.json());
};

export const ListOfPosts = async () => {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id}>
      {/* <Link href='/posts/[id]' as={`/posts/${post.id}`}> */}
      <Link href={`/posts/${post.id}`}>
        <h3 style={{ color: 'blueviolet' }}>{post.title}</h3>
      </Link>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ));
};
