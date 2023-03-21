import { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor } from '../../utils/variables';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { OptionsMenu } from '../optionsMenu';
import { toggle } from '../../redux/features/optionsMenu/optionsMenuSlice';
import { useAppDispatch } from '../../redux/hooks';

export const OptionsButton: FC = memo(
  () => {
    const dispatch = useAppDispatch();

    return (
      <div style={{ position: 'relative' }}>
        <OptionsMenu />

        <Tooltip title='Options'>
          <IconButton
            aria-label="Options"
            size="medium"
            onClick={() => dispatch(toggle())}
            sx={[
              { background: greyColor },
              { '&:hover': { background: hoverGreyColor } },
            ]}
          >
            <MoreVertIcon sx={{ color: 'white' }} fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </div>
    );
  },
);
