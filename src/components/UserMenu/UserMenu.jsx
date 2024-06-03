// import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import {
  useCurrentUserQuery,
  useLoginUserMutation,
  useLogoutUserMutation,
} from '../../redux/authApi';
import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const { isSuccess, data, currentData } = useCurrentUserQuery();

  const [logout] = useLogoutUserMutation();

  const handleLogout = e => {
    logout();
    localStorage.setItem('token', '');
    console.log(data);
    console.log('click on logout');

    //   <Navigate to="/contacts"/>
  };

  console.log(data);

  console.log('currentdata', currentData);

  return (
    <>
      <div>
        {isSuccess && data && (
          <>
            <p>{data.name}</p>
            <button type="submit" onClick={handleLogout}>
              LogOut
            </button>
          </>
        )}
      </div>
    </>
  );
};
