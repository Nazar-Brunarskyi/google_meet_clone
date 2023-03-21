import { FC, memo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor } from '../../utils/variables';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { OptionsMenu } from '../optionsMenu';

export const OptionsButton: FC = memo(
  () => {
    const [areOptionsOpened, setAreOptionsOpened] = useState(false);

    const toggleMenu = () => {
      setAreOptionsOpened(isOpen => !isOpen)
    };

    return (
      <div style={{ position: 'relative' }}>
        {
          areOptionsOpened && <OptionsMenu onMenuToggle={toggleMenu} />
        }

        <Tooltip title='Options'>
          <IconButton
            aria-label="Options"
            size="medium"
            onClick={toggleMenu}
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
