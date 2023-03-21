import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor } from '../../utils/variables';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { toast } from 'react-hot-toast'

export const EmojiButton: FC = memo(
  () => {
    return (
      <Tooltip title='show reaction'>
        <IconButton
          onClick={() => toast('Emoji!', { icon: '😁' })}
          aria-label="show reaction"
          size="medium"
          sx={[
            { background: greyColor },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <SentimentVerySatisfiedIcon fontSize="inherit" />
        </IconButton>
      </Tooltip >
    );
  },
);
