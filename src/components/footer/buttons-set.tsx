import { FC, memo } from 'react';
import { EmojiButton } from '../Buttons/emoji-button';
import { HangUpButton } from '../Buttons/hang-up-button';
import { MicrophoneButton } from '../Buttons/microphone-button';
import { OptionsButton } from '../Buttons/options-button';
import { RaiseHandButton } from '../Buttons/raise-hand-button';
import { ScreenSharingButton } from '../Buttons/screen-sharing-button';
import { VideoButton } from '../Buttons/video-button';


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
