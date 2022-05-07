import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Title from './title';

const PostContainer = ({ children }) => {
  return (
    <Box sx={{ paddingX: { xs: '0', md: '10%', lg: '20%' } }}>
      <Title>Popüler Yazılar</Title>
      <Grid container my={4} rowSpacing={1} columnSpacing={1}>
        {children}
      </Grid>
    </Box>
  );
};

export default PostContainer;
