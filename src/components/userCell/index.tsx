import { FC, memo, useCallback, useState } from 'react';
import { getRandomUser } from '../../API/getRandomUser';
import { setNewUser } from '../../redux/features/users/usersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { User } from '../../types/user';
import { toast } from 'react-hot-toast'
import _ from 'lodash';
import { defaultImage } from '../../utils/variables';
import { Loader } from '../loader';
import { Blur } from '../blur';

interface Props {
  index: number,
  user: User | null;
}

export const UserCell: FC<Props> = memo(
  ({ user, index }) => {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector(state => state.users);

    const [isloading, setIsLoading] = useState(false);

    const loadNewUser = useCallback(
      async () => {
        try {
          const newUser = await getRandomUser();

          if (users.some(user => _.isEqual(user, newUser))) {
            loadNewUser();

            return;
          }

          dispatch(setNewUser({ index, newUser }))
        } catch (err) {
          toast.error('an error has happened, try later')
        }
      },
      [index, dispatch, users]
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
        <img
          className='user-cell__image'
          src={user?.image || defaultImage}
          alt="123"
        />
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
