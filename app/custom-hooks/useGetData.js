import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/compat/firestore';
import { firebase } from '../../firebase.config'; // Update the path

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const collectionRef = firebase.firestore().collection(collectionName);
//   const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      collectionRef.onSnapshot( (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });

      
    };

    getData();
  }, []);

  return { data };
};

export default useGetData;
