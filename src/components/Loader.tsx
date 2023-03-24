import { FC, memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { stylesToCenterAnElement } from '../utils/variables';

export const Loader: FC = memo(
  () => {
    return (
      <Box sx={stylesToCenterAnElement}>
        <CircularProgress />
      </Box>
    );
  }
);