import { FC, memo } from 'react';
import { AdditionalActions } from './additional-actions';
import { ButtonsSet } from './buttons-set';
import { LiveClock } from './clock';

export const Footer: FC = memo(
  () => {
    return (
      <footer className='footer'>
        <div className="footer__meeting-details meeting-details">
          <LiveClock /> &nbsp; | &nbsp; family business
        </div>

        <ButtonsSet />

        <AdditionalActions />
      </footer>
    );
  },
);
