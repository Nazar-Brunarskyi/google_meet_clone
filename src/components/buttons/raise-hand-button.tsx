import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor } from '../../variables';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';

export const RaiseHandButton: FC = memo(
  () => {
    return (
      <Tooltip title='raise hand'>
        <IconButton
          aria-label="raise hand"
          size="medium"
          sx={[
            { background: greyColor },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <PanToolOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  },
);
