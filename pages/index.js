import { useEffect, useState } from 'react';

import { getAllPosts } from '../services/postService';
import { getAllCategories } from '../services/categoryService';
import AppSkeleton from '../components/app-skeleton';
import Categories from '../components/categories';
import config from '../config.json';
import PostCards from '../components/post-cards';
import PostContainer from '../components/post-container';
import useRealTime from '../hooks/useRealTime';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [categories, setCategories] = useState(props.categories);

  const { data, error } = useRealTime(config.postApiUrl);

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  if (!data)
    return (
      <PostContainer>
        {arr.map((n) => (
          <AppSkeleton key={n} />
        ))}
      </PostContainer>
    );

  return (
    <>
      <Categories categories={categories} />
      <PostCards posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  const categories = await getAllCategories();
  return {
    props: {
      posts,
      categories,
    },
    revalidate: 1800,
  };
}

export default Home;
