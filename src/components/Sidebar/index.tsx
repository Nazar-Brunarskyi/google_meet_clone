import { FC, memo } from 'react';
import { useAppSelector } from '../../redux/hooks';

export const Sidebar: FC = memo(
  () => {
    const { message } = useAppSelector(state => state.sidebar)

    return (
      <div className='sidebar'>
        <div className="sidebar__content-container">
          {message}
        </div>
      </div>
    );
  },
);
