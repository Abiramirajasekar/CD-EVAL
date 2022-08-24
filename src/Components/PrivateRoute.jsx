import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AppContext';

function PrivateRoute({ actualComponent, path, redirectPath }) {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return (
      <Routes>
        <Route path={path} element={actualComponent} />;
      </Routes>
    );
  }
  return <Navigate to={redirectPath} replace={true} />;
}

export default PrivateRoute;