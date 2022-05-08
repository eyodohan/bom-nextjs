import { useState } from 'react';
import Parser from 'html-react-parser';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PostCardFooter from './post-card-footer';

const PostCard = ({ title, excerpt, imgUrl }) => {
  const [show, setShow] = useState(true);

  const showCartLink = () => {
    setShow(!show);
  };

  return (
    <Card
      sx={{
        width: 300,
        minHeight: 500,
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <CardMedia component={'img'} image={imgUrl} />
      <CardContent>
        <Typography gutterBottom variant='h5' component={'span'}>
          {Parser(title.rendered)}
        </Typography>
        <Typography variant='body2' color={'text.secondary'} component={'span'}>
          {Parser(excerpt.rendered)}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: 'absolute', bottom: 0 }}>
        <Box
          sx={{
            width: '330px',
            borderTop: '1px solid #9faabb',
          }}
        >
          <PostCardFooter show={show} showCartLink={showCartLink} />
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
