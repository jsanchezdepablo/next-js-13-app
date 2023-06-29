import Counter from './posts/components/Counter';

export default function PostsLayout({ children }) {
  return (
    <div>
      <marquee style={{ backgroundColor: 'white', color: 'violet' }}> Created by yisus 😁👍</marquee>
      <Counter />
      {children}
    </div>
  );
}
