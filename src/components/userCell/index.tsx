import { FC, memo } from 'react';

interface Props {
  name?: string
  photo?: string
}

export const UserCell: FC<Props> = memo(
  ({name, photo}) => {
    const defaultImage = 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='

    return (
      <div className='user-cell participants__cell'>
        <img
          className='user-cell__image'
          src={photo || defaultImage}
          alt="123"
        />
        <div className="user-cell__name">{name || 'unknown'}</div>
      </div>
    );
  },
);
