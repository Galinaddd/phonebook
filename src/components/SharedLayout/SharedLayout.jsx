import { NavLink, Outlet } from 'react-router-dom';

import css from './SharedLayout.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
// import { useCurrentUserQuery } from '../../redux/authApi';
// import { useEffect } from 'react';

export const SharedLayout = () => {
  // const { data, isSuccess } = useCurrentUserQuery();

  // useEffect(() => {
  //   if (data) {
  //     console.log('user status change');
  //   }
  // }, [data]);
  return (
    <>
      <header className={css.header}>
        <p>Sharelayout</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/register"> register</NavLink>
        <UserMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
