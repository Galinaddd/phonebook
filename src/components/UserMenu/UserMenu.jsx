import { useEffect } from 'react';
import {
  useCurrentUserQuery,
  useLogoutUserMutation,
} from '../../redux/authApi';

export const UserMenu = () => {
  const { data, isError, refetch } = useCurrentUserQuery();
  console.log('component User data loaded:', data);
  console.log(' component  isError:', isError);

  const [logout, { data: logoutDataUser }] = useLogoutUserMutation();

  useEffect(() => {
    if (data) {
      console.log(' use effect User data loaded:', data);
      // console.log(' use effect isError:', isError);
    }
  }, [data]);

  const handleLogout = async e => {
    await logout().unwrap();
    localStorage.setItem('token', '');
    console.log(data);
    console.log('logoutDataUser', logoutDataUser);
    console.log('click on logout');
    await refetch(); // Повторний запит даних користувача
    console.log('Logged out successfully');
    // <Navigate to="/contacts" />;
    console.log('after refetch user data', data);
    console.log(' after refetch isError:', isError);
  };

  return (
    <>
      <div>
        {
          <>
            <p>{data ? data.name : 'Anonimus'}</p>
            <button type="submit" onClick={handleLogout}>
              LogOut
            </button>
          </>
        }
      </div>
    </>
  );
};
