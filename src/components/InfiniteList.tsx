import { useState, useEffect, useRef } from "react";
import Card from "./Card";

interface PostData {
  slug: string;
  title: string;
  description: string;
}

interface Props {
  posts: PostData[];
  batchSize?: number;
}

const InfiniteList = ({ posts, batchSize = 12 }: Props) => {
  const [visible, setVisible] = useState(batchSize);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(v => Math.min(v + batchSize, posts.length));
        }
      },
      { rootMargin: "300px" }
    );

    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [posts.length, batchSize]);

  const shown = posts.slice(0, visible);
  const remaining = posts.length - visible;

  return (
    <>
      <ul>
        {shown.map(post => (
          <Card
            key={post.slug}
            href={`/posts/${post.slug}/`}
            frontmatter={{ title: post.title, description: post.description }}
          />
        ))}
      </ul>
      {remaining > 0 && (
        <div ref={sentinelRef} className="py-10 text-center text-sm opacity-40">
          {remaining} more categories...
        </div>
      )}
    </>
  );
};

export default InfiniteList;
