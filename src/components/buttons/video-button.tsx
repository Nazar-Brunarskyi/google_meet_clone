import { FC, memo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor, hoverRedColor, redColor } from '../../utils/variables';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';

export const VideoButton: FC = memo(
  () => {
    const [isVideoOn, SetIsVideoOn] = useState(true);

    return (
      <Tooltip title={isVideoOn ? 'switch the video on' : 'switch the video off'}>
        <IconButton
          aria-label="switch video"
          size="medium"
          onClick={() => SetIsVideoOn((prevState) => !prevState )}
          sx={[
            { background: isVideoOn ? redColor : greyColor},
            { '&:hover': { background: isVideoOn ? hoverRedColor : hoverGreyColor} },
          ]}
        >
          {
            isVideoOn
              ? <VideocamOffIcon sx={{color: 'white'}} fontSize="inherit" />
              : <VideocamIcon sx={{color: 'white'}} fontSize="inherit" />
          }
        </IconButton>
      </Tooltip>
    );
  },
);
