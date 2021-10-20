import { useState } from 'react';
import { IBasicFormFields } from './BasicForm/types';
import { BasicForm } from './BasicForm/BasicForm';

export function App() {
  const [userProfile, setUserProfile] = useState<IBasicFormFields>();
  return (
    <>
      <h1>Formik</h1>
      <BasicForm
        initialValues={userProfile}
        setValues={(values) => {
          setUserProfile(values);
        }}
      />
      <p>Name: {userProfile?.name}</p>
      <p>Favorite Number: {userProfile?.favoriteNumber}</p>
    </>
  );
}
