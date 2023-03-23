import { FC, memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { stylesToCenterAnElement } from '../../utils/variables';

export const Loader: FC = memo(
  () => {
    return (
      <CircularProgress
      sx={stylesToCenterAnElement}
      />
    );
  },
);
