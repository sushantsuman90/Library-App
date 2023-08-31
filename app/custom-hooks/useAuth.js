import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebase } from '../../firebase.config'; // Update the path

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = firebase.auth(); // Use the Firebase authentication object

    const unsubscribe = auth.onAuthStateChanged( (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { currentUser, loading };
};

export default useAuth;
