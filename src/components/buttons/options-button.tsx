import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor } from '../../utils/variables';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const OptionsButton: FC = memo(
  () => {
    return (
      <Tooltip title='Options'>
        <IconButton
          aria-label="Options"
          size="medium"
          sx={[
            { background: greyColor },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <MoreVertIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  },
);
