import Typography from '@mui/material/Typography';

const Title = ({ children }) => {
  return (
    <Typography
      variant='h4'
      color={'warning.light'}
      sx={{ marginLeft: '20px' }}
    >
      {children}
    </Typography>
  );
};

export default Title;
