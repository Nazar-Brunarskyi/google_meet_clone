import { FC, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { clear } from '../redux/features/sidebar/sidebarSlice';

export const Sidebar: FC = memo(
  () => {
    const { message } = useAppSelector(state => state.sidebar)
    const dispatch = useAppDispatch();

    return (
      <div className='sidebar app__sidebar'>
        <div className="sidebar__content-container">
          <div className="sidebar__header">
            <div className="sidebar__title">
              {message}
            </div>

            <div className="sidebar__cross">
              <Tooltip title='close'>
                <IconButton
                  onClick={() => dispatch(clear())}
                  aria-label="show reaction"
                  size="medium"
                >
                  <CloseIcon style={{ color: 'black' }} />
                </IconButton>
              </Tooltip >
            </div>
          </div>
        </div>
      </div>
    );
  },
);
