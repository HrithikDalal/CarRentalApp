import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import ProfileForm from '../profile/ProfileForm';
import Profiles from '../allProfiles/Profiles';
import Profile from '../profile/Profile';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';

const AppRoutes = () => {
  return (
    <section className="container">
      <Alert />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="create-profile" element={<PrivateRoute component={ProfileForm} />} />
        <Route path="edit-profile" element={<PrivateRoute component={ProfileForm} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default AppRoutes;
