import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PostCard from './post-card';
import PostContainer from './post-container';

const PostCards = ({ posts }) => {
  return (
    <PostContainer>
      <>
        {posts &&
          posts.map((post) => {
            const { title, excerpt, id, img_url } = post;
            return (
              <Grid container item xs={12} sm={6} md={4} key={id}>
                <Box p={2} sx={{ margin: '0 auto' }}>
                  <PostCard title={title} excerpt={excerpt} imgUrl={img_url} />
                </Box>
              </Grid>
            );
          })}
      </>
    </PostContainer>
  );
};

export default PostCards;
