import { FC, memo } from 'react';

interface Props {
  name: string
  photo: string
}

export const UserCell: FC = memo(
  () => {
    return (
      <div className='user-cell participants__cell'>
        <div className="user-cell__name">Bobby Singer</div>
      </div>
    );
  },
);
