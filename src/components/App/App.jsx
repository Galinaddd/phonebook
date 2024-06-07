import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
// import { useCurrentUserQuery } from '../../redux/authApi';
// import { useEffect } from 'react';

export const App = () => {
  // const { isSuccess, data, currentData } = useCurrentUserQuery();
  // useEffect(() => {
  //   if (data) {
  //     console.log('user status change');
  //   }
  // }, [data]);

  // console.log('app login ore not');
  // console.log('data isSuccess', data, isSuccess);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
