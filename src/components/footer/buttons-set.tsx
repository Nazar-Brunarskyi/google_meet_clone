import { FC, memo } from 'react';
import { EmojiButton } from '../buttons/emoji-button';
import { HangUpButton } from '../buttons/hang-up-button';
import { MicrophoneButton } from '../buttons/microphone-button';
import { OptionsButton } from '../buttons/options-button';
import { RaiseHandButton } from '../buttons/raise-hand-button';
import { ScreenSharingButton } from '../buttons/screen-sharing-button';
import { VideoButton } from '../buttons/video-button';


export const ButtonsSet: FC = memo(
  () => {
    return (
      <div className="footer__call-buttons-set">
        <MicrophoneButton />
        <VideoButton />
        <EmojiButton />
        <ScreenSharingButton />
        <RaiseHandButton />
        <OptionsButton />
        <HangUpButton />
      </div>
    );
  },
);
