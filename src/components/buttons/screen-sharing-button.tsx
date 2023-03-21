import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor } from '../../utils/variables';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import { toast } from 'react-hot-toast'

export const ScreenSharingButton: FC = memo(
  () => {
    return (
      <Tooltip title='share screen'>
        <IconButton
          aria-label="share screen"
          size="medium"
          onClick={() => toast('share screen!', { icon: '📺' })}
          sx={[
            { background: greyColor },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <PresentToAllIcon sx={{color: 'white'}} fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  },
);
