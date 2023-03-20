import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor } from '../../variables';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';

export const ScreenSharingButton: FC = memo(
  () => {
    return (
      <Tooltip title='share screen'>
        <IconButton
          aria-label="share screen"
          size="medium"
          sx={[
            { background: greyColor },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <PresentToAllIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  },
);
