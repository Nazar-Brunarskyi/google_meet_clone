import { FC, memo } from 'react';
import Clock from 'react-live-clock';

export const LiveClock: FC = memo(
  () => {
    return (
      <Clock format='HH:mm' timezone='Europe/Kyiv' />
    );
  },
);
