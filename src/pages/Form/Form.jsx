import React from 'react';

import './Form.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const Form = () => (
  <div className='form'>
    <SignIn />
    <SignUp />
  </div>
);

export default Form;
