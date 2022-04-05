import Link from 'next/link';
import { Email, Lock } from 'styled-icons/material-outlined';

import Button from 'components/Button';
import TextField from 'components/TextField';
import { FormWrapper, FormLink } from 'components/Form';

import * as S from './styles';

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        iconOptions={{ element: <Email /> }}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        iconOptions={{ element: <Lock /> }}
      />
      <S.ForgotPassword href="#">forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        Don´t have an account?
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
