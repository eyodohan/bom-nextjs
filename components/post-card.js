import { useState } from 'react';
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

  const formattedExcerpt = excerpt.rendered.replace('<p>', '');
  const formattedExcerptAgain = formattedExcerpt.replace('</p>', '');

  const formattedTitle = title.rendered.replace('&#8217;', "'");
  const formattedTitleAgain = formattedTitle.replace('&#8217;', "'");

  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 500,
        position: 'relative',
        margin: '0 auto',
      }}
    >
      <CardMedia
        component={'img'}
        image={imgUrl}
        height='100%'
        width={'100%'}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component={'div'}>
          {formattedTitleAgain}
        </Typography>
        <Typography variant='body2' color={'text.secondary'}>
          {formattedExcerptAgain}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: 'absolute', bottom: 10 }}>
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
