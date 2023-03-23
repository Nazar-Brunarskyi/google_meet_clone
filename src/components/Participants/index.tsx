import { FC, memo, useEffect } from 'react';
import { fetchUsers } from '../../redux/features/users/usersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Loader } from '../loader';
import { UserCell } from '../userCell';
import Alert from '@mui/material/Alert';
import { stylesToCenterAnElement } from '../../utils/variables';

export const Participants: FC = memo(
  () => {
    const dispatch = useAppDispatch();
    const { users, isLoading, errorMessage } = useAppSelector(state => state.users);

    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);

    return (
      <div className='participants app__participants'>
        <div className="participants__content-container">
          {isLoading && <Loader />}

          {
            users.length > 0 && !isLoading
            && users.map((user, index) => (
              <UserCell
                user={user}
                index={index}
                key={user?.characterName}
              />
            ))
          }

          {
            errorMessage && !isLoading
            && (
              <Alert
                severity="error"
                sx={stylesToCenterAnElement}
              >
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    );
  },
);
