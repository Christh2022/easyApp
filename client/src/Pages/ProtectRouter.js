import React from 'react';
import { Navigate } from 'react-router-dom';
import {  UserAuth } from '../context/AuthContext';

const ProtectRouter = ({Children}) => {
  const { user } = UserAuth();

 if(!user){
    return <Navigate to="/login" />
 }
 
 return Children
};

export default ProtectRouter;