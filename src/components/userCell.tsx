/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC, memo, useCallback, useState } from 'react';
import { getRandomUser } from '../API/getRandomUser';
import { setNewUser } from '../redux/features/users/usersSlice';
import { useAppDispatch } from '../redux/hooks';
import { User } from '../types/user';
import { toast } from 'react-hot-toast'
import _ from 'lodash';
import { defaultImage } from '../utils/variables';
import { Loader } from './Loader';
import { Blur } from './Blur';

interface Props {
  index: number,
  user: User,
  allUsers: User[],
}

export const UserCell: FC<Props> = memo(
  ({ user, index, allUsers }) => {
    const dispatch = useAppDispatch();

    const [isloading, setIsLoading] = useState(false);

    const loadNewUser = useCallback(
      async () => {
        try {
          const newUser = await getRandomUser();

          if (allUsers.some(user => _.isEqual(user, newUser))) {
            loadNewUser();

            return;
          }

          dispatch(setNewUser({ index, newUser }))
        } catch (err) {
          toast.error('an error has happened, try later')
        }
      },
      [index, dispatch, allUsers]
    )

    const handleClick = async () => {
      if (!isloading) {
        setIsLoading(true);

        await loadNewUser();

        setIsLoading(false);
      }
    }

    return (
      <div className='user-cell participants__cell' onClick={handleClick}>

        {
          user.image
            ? <img
              className='user-cell__image'
              src={user.image || defaultImage}
              alt="123"
            />
            : <div className="user-cell__without-video">
              <img
                className='user-cell__default-image'
                src={defaultImage}
                alt="picture that shows us, that user doesn't have a photo"
              />
            </div>
        }




        <div className="user-cell__name">{user?.characterName || 'unknown'}</div>

        {
          isloading && (
            <>
              <Blur />
              <Loader />
            </>
          )
        }
      </div>
    );
  },
);
