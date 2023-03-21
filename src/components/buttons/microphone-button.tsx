import { FC, memo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MicOffIcon from '@mui/icons-material/MicOff';
import Tooltip from '@mui/material/Tooltip';
import { greyColor, hoverGreyColor, hoverRedColor, redColor } from '../../utils/variables';

export const MicrophoneButton: FC = memo(
  () => {
    const [isMuted, SetIsMuted] = useState(true);

    return (
      <Tooltip title={isMuted ? 'unmute' : 'mute'}>
        <IconButton
          aria-label="switch mike"
          size="medium"
          onClick={() => SetIsMuted((prevState) => !prevState )}
          sx={[
            { background: isMuted ? redColor : greyColor},
            { '&:hover': { background: isMuted ? hoverRedColor : hoverGreyColor} },
          ]}
        >
          {
            isMuted
              ? <MicOffIcon sx={{color: 'white'}} fontSize="inherit" />
              : <KeyboardVoiceIcon sx={{color: 'white'}} fontSize="inherit" />
          }
        </IconButton>
      </Tooltip>
    );
  },
);
