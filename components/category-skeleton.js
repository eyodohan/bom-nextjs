import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const CategorySkeleton = () => {
  return (
    <Stack spacing={1} width='180px'>
      <Skeleton
        variant='rectangular'
        width='180px'
        height='300px'
        animation='wave'
      />
    </Stack>
  );
};

export default CategorySkeleton;
