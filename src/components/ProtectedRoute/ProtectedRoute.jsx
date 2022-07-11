import React from 'react';
import { Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Home from '../Home/Home';

function ProtectedRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);

  const ProtectedComponent = component || (() => children);

  return (
    <Route
      {...props}
    >
      {user.id ?
        <ProtectedComponent />
        :
        <Home />
      }
    </Route>

  );
}

export default ProtectedRoute;
