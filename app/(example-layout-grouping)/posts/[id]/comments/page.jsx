const fetchComments = async (id) => {
  // para mostrar componente error
  // throw new Error('Cannot fetch comments');

  // para mostrar componente loading
  // await new Promise((resolve, reject) => setTimeout(resolve, 5000));

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 10
    }
  }).then((res) => res.json());
};

export default async function CommentsPage({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: '#444' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h5>{comment.name}</h5>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}
