import { memo, useCallback, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setMessage } from '../../redux/features/sidebar/sidebarSlice';
import { tabletSize } from '../../utils/variables';
import { OptionsMenuItemType } from '../../types/OptionsMenuItemType';
import { useMediaQuery } from '@mui/material';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

interface Props {
  onMenuToggle: () => void
}

const items: OptionsMenuItemType[] = [
  { text: 'conference board', Icon: BorderColorOutlinedIcon },
  { text: 'change layout', Icon: ViewQuiltIcon },
  { text: 'full-screen mode', Icon: FullscreenIcon },
  { text: 'move to picture into picture mode', Icon: PictureInPictureAltIcon },
  { text: 'use filters', Icon: PhotoFilterIcon },
  { text: 'report a problem', Icon: AnnouncementIcon },
  { text: 'report a violation', Icon: ReportGmailerrorredIcon },
  { text: 'troubleshooting and help', Icon: TroubleshootIcon },
  { text: 'settings', Icon: SettingsOutlinedIcon },
  { text: 'raise hand', Icon: PanToolOutlinedIcon, adaptive: true },
  { text: 'share screen', Icon: PresentToAllIcon, adaptive: true },
  { text: 'show reaction', Icon: SentimentVerySatisfiedIcon, adaptive: true },
]

export const OptionsMenu: FC<Props> = memo(
  ({ onMenuToggle }) => {
    const isTablet = useMediaQuery(`(min-width:${tabletSize})`);

    const { message } = useAppSelector(state => state.sidebar);
    const dispatch = useAppDispatch();

    const dispatchMessage = useCallback(
      (newMessage: string) => {
        dispatch(
          setMessage(message === newMessage ? '' : newMessage)
        );
      },
      [message, dispatch],
    );

    const handleClick = useCallback(
      (text: string) => {
        dispatchMessage(text);
        onMenuToggle();
      },
      [dispatchMessage, onMenuToggle],
    );

    return (
      <Paper
        sx={{
          width: 300,
          position: 'absolute',
          bottom: '120%',
          right: !isTablet ? '-340%' : '20%',
        }}
      >
        <MenuList dense>
          {
            items.map(({ text, Icon, adaptive }) => (
              <MenuItem
                sx={adaptive ? { display: isTablet ? 'none' : '' } : undefined}
                onClick={() => handleClick(text)}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                {text}
              </MenuItem>
            ))
          }
        </MenuList>
      </Paper>
    );
  }
);