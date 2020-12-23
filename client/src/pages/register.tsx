import React from 'react';
import { Form, Formik } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {(values, handleChange) => (
          <FormControl>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input
              value={values.username}
              onChange={handleChange}
              id='username'
              placeholder='username'
            />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
