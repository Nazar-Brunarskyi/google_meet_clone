import { FC, memo } from 'react';
import { UserCell } from '../userCell';

export const Participants: FC = memo(
  () => {
    return (
      <div className='participants app__participants'>
        <div className="participants__content-container">
        {
          new Array(12).fill(1).map(() => <UserCell />)
        }
        </div>
      </div>
    );
  },
);
