import { FC, memo } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

export const AdditionalActions: FC = memo(
  () => {
    return (
      <div className="footer__additional-actions">
        <Tooltip title='meetings details'>
          <IconButton aria-label="fingerprint" color="secondary">
            <ErrorOutlineIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title='show all participants'>
          <IconButton aria-label="fingerprint" color="secondary">
            <PeopleAltOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title='show the chat'>
          <IconButton aria-label="fingerprint" color="secondary">
            <MessageOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title='actions'>
          <IconButton aria-label="fingerprint" color="secondary">
            <CategoryOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title='meeting management'>
          <IconButton aria-label="fingerprint" color="secondary">
            <LockPersonOutlinedIcon />
          </IconButton>
        </Tooltip>

      </div>
    );
  },
);
