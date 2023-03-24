import { FC, memo, useCallback, useMemo, useState } from 'react';
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
import { hoverGreyColor } from '../../utils/variables';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMessage } from '../../redux/features/sidebar/sidebarSlice';

export const AdditionalActions: FC = memo(
  () => {
    const { users } = useAppSelector(state => state.users)
    const [isOpened, setIsOpened] = useState(false);

    const { message } = useAppSelector(state => state.sidebar);
    const dispatch = useAppDispatch();

    const dispatchMessage = useCallback((newMessage: string) => {
      dispatch(
        setMessage(message === newMessage ? '' : newMessage)
      );
    }, [message, dispatch]);

    const stylesForAfterElement = useMemo(() => ({
      content: `"${users.length}"`,
      position: 'absolute',
      bottom: '70%',
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: hoverGreyColor,
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
    }), [users]);

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
                  ? <ExpandMoreOutlinedIcon sx={{ color: 'white' }} />
                  : <ExpandLessOutlinedIcon sx={{ color: 'white' }} />
              }
            </IconButton>
          </Tooltip>
        </div>


        <div className={classNames({
          "additional-actions__buttons": true,
          'additional-actions__buttons--opened': isOpened
        })}>
          <Tooltip title='meetings details'>
            <IconButton
              aria-label="meetings details"
              color="secondary"
              onClick={() => dispatchMessage('meetings details')}
            >
              <ErrorOutlineIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>

          <Tooltip
            title='show all participants'
            sx={[{ position: 'relative' }, { '&::after': stylesForAfterElement }]}
          >
            <IconButton
              aria-label="show all participants"
              color="secondary"
              onClick={() => dispatchMessage('participants')}
            >
              <PeopleAltOutlinedIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title='show the chat'>
            <IconButton
              aria-label="show the chat"
              color="secondary"
              onClick={() => dispatchMessage('chat')}
            >
              <MessageOutlinedIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title='actions'>
            <IconButton
              aria-label="actions"
              color="secondary"
              onClick={() => dispatchMessage('actions')}
            >
              <CategoryOutlinedIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title='meeting management'>
            <IconButton
              aria-label="meeting management"
              color="secondary"
              onClick={() => dispatchMessage('meeting management')}
            >
              <LockPersonOutlinedIcon sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  },
);
