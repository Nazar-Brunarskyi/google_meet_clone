import { FC, memo, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import classNames from 'classnames';

export const AdditionalActions: FC = memo(
  () => {
    const [isOpened, setIsOpened] = useState(true);

    return (
      <div className="footer__additional-actions additional-actions">
        <div className="additional-actions__arrow">
          <Tooltip title='other options'>
            <IconButton
              onClick={() => setIsOpened((precState) => !precState)}
              aria-label="fingerprint"
              color="secondary"
            >
              {
                isOpened
                  ? <ExpandMoreOutlinedIcon sx={{color: 'white'}} />
                  : <ExpandLessOutlinedIcon sx={{color: 'white'}} />
              }
            </IconButton>
          </Tooltip>
        </div>


        <div className={classNames({
          "additional-actions__buttons": true,
          'additional-actions__buttons--opened': isOpened
        })}>
          <Tooltip title='meetings details'>
            <IconButton aria-label="fingerprint" color="secondary">
              <ErrorOutlineIcon sx={{color: 'white'}} />
            </IconButton>
          </Tooltip>

          <Tooltip title='show all participants'>
            <IconButton aria-label="fingerprint" color="secondary">
              <PeopleAltOutlinedIcon sx={{color: 'white'}} />
            </IconButton>
          </Tooltip>

          <Tooltip title='show the chat'>
            <IconButton aria-label="fingerprint" color="secondary">
              <MessageOutlinedIcon sx={{color: 'white'}} />
            </IconButton>
          </Tooltip>

          <Tooltip title='actions'>
            <IconButton aria-label="fingerprint" color="secondary">
              <CategoryOutlinedIcon sx={{color: 'white'}} />
            </IconButton>
          </Tooltip>

          <Tooltip title='meeting management'>
            <IconButton aria-label="fingerprint" color="secondary">
              <LockPersonOutlinedIcon sx={{color: 'white'}} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  },
);
