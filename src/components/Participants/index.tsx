import { FC, memo } from 'react';

export const Participants: FC = memo(
  () => {
    return (
      <div className='participants app__participants'>
        <div className="participants__content-container">
        {
          new Array(12).fill(1).map(() => <div className='participants__cell'></div>)
        }
        </div>
      </div>
    );
  },
);
