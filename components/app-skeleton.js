import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const AppSkeleton = () => {
  return (
    <Grid container item xs={12} sm={6} md={4}>
      <Box p={2}>
        <Stack spacing={1} width='350px'>
          <Skeleton
            variant='rectangular'
            width={'100%'}
            height={200}
            animation='wave'
          />
          <Skeleton animation='wave' height={30} />
          <Skeleton animation='wave' height={30} width='30%' />
          <Skeleton animation='wave' height={10} />
          <Skeleton animation='wave' height={10} />
          <Skeleton animation='wave' height={10} />
          <Skeleton animation='wave' height={10} />
        </Stack>
      </Box>
    </Grid>
  );
};

export default AppSkeleton;
