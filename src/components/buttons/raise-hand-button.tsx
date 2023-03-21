import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor } from '../../utils/variables';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import { toast } from 'react-hot-toast'

export const RaiseHandButton: FC = memo(
  () => {
    return (
      <Tooltip title='raise hand'>
        <IconButton
          aria-label="raise hand"
          size="medium"
          onClick={() => toast('raise hand!', { icon: '🤚' })}
          sx={[
            { background: greyColor },
            { '&:hover': { background: hoverGreyColor } },
          ]}
        >
          <PanToolOutlinedIcon sx={{color: 'white'}} fontSize="inherit" />
        </IconButton>
      </Tooltip>
    );
  },
);
