import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CategoryItem = ({ imgUrl, name }) => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        marginTop: '20px',
        width: '180px',
        height: '300px',
        backgroundImage: `url(https://picsum.photos/200/300)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          color: 'dodgerblue',
          textAlign: 'center',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default CategoryItem;
