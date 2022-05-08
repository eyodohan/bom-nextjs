import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

const PostCardFooter = ({ show, showCartLink }) => {
  return (
    <>
      {show ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: 1.5,
          }}
        >
          <IconButton size='small' onClick={showCartLink}>
            <ShareOutlinedIcon sx={{ color: ' #9faabb' }} />
          </IconButton>
          <IconButton size='small' sx={{ position: 'absolute', right: '60px' }}>
            <MoreHorizOutlinedIcon sx={{ color: ' #9faabb' }} />
          </IconButton>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: 1.5,
          }}
        >
          <IconButton size='small' onClick={showCartLink}>
            <CloseIcon sx={{ color: ' #9faabb' }} />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '200px',
            }}
          >
            <FacebookOutlinedIcon sx={{ color: ' #9faabb' }} />
            <TwitterIcon sx={{ color: ' #9faabb' }} />
            <LinkedInIcon sx={{ color: ' #9faabb' }} />
            <PinterestIcon sx={{ color: ' #9faabb' }} />
            <TelegramIcon sx={{ color: ' #9faabb' }} />
            <EmailOutlinedIcon sx={{ color: ' #9faabb' }} />
          </Box>
          <IconButton size='small' sx={{ position: 'absolute', right: '60px' }}>
            <MoreHorizOutlinedIcon sx={{ color: ' #9faabb' }} />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default PostCardFooter;
