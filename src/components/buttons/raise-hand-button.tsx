import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor, tabletSize } from '../../utils/variables';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import { toast } from 'react-hot-toast'
import { useMediaQuery } from '@mui/material';

export const RaiseHandButton: FC = memo(
  () => {
    const isTablet = useMediaQuery(`(min-width:${tabletSize})`);

    return (
      <Tooltip title='raise hand'>
        <IconButton
          aria-label="raise hand"
          size="medium"
          onClick={() => toast('raise hand!', { icon: '🤚' })}
          sx={[
            { background: greyColor, display: !isTablet ? 'none' : '' },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <PanToolOutlinedIcon sx={{ color: 'white' }} fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  },
);
