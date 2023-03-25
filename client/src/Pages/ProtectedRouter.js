import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const ProtectedRouter = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (window.location.pathname !== '/') {
          navigate('/');
        }
      } else {
        if (window.location.pathname !== '/home') {
          navigate('/home');
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return <>{children}</>;
};

export default ProtectedRouter;
