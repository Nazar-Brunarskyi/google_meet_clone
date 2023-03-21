import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor, tabletSize } from '../../utils/variables';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import { toast } from 'react-hot-toast'
import { useMediaQuery } from '@mui/material';

export const ScreenSharingButton: FC = memo(
  () => {
    const isTablet = useMediaQuery(`(min-width:${tabletSize})`);

    return (
      <Tooltip title='share screen'>
        <IconButton
          aria-label="share screen"
          size="medium"
          onClick={() => toast('share screen!', { icon: '📺' })}
          sx={[
            { background: greyColor, display: !isTablet ? 'none' : '' },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <PresentToAllIcon sx={{color: 'white'}} fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  },
);
