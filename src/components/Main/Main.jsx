import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from '../../router';
import { refreshUser } from '../../redux/auth/authOperations';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { Home } from '../../screens/Home/Home';

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const routing = useRoute();
  return (
    <NavigationContainer>{isLoggedIn ? <Home /> : routing}</NavigationContainer>
  );
};
