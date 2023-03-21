import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor, tabletSize } from '../../utils/variables';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { toast } from 'react-hot-toast'
import { useMediaQuery } from '@mui/material';

export const EmojiButton: FC = memo(
  () => {
    const isTablet = useMediaQuery(`(min-width:${tabletSize})`);

    return (
      <Tooltip title='show reaction'>
        <IconButton
          onClick={() => toast('Emoji!', { icon: '😁' })}
          aria-label="show reaction"
          size="medium"
          sx={[
            { background: greyColor, display: !isTablet ? 'none' : '' },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <SentimentVerySatisfiedIcon sx={{ color: 'white' }} fontSize="inherit" />
        </IconButton>
      </Tooltip >
    );
  },
);
