import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { hoverRedColor, redColor } from '../../utils/variables';
import CallEndIcon from '@mui/icons-material/CallEnd';
import { toast } from 'react-hot-toast'

export const HangUpButton: FC = memo(
  () => {
    return (
      <Tooltip title='hang up'>
        <IconButton
          aria-label="hang up"
          size="medium"
          onClick={() => toast('hang up!', { icon: '📴' })}
          sx={[
            { background: redColor, width: '70px', borderRadius: '100px' },
            { '&:hover': { background: hoverRedColor } },
          ]}
        >
          <CallEndIcon sx={{color: 'white'}} fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  },
);
