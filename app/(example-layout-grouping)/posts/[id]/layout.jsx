import Link from 'next/link';

const fetchSinglePost = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 10
    }
  }).then((res) => res.json());

export default async function SinglePostPage({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
}
