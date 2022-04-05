import Link from 'next/link';
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined';

import Button from 'components/Button';
import TextField from 'components/TextField';

import { FormWrapper, FormLink } from 'components/Form';

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="text"
        iconOptions={{ element: <AccountCircle /> }}
      />
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
      <TextField
        name="confirm password"
        placeholder="Confirm password"
        type="password"
        iconOptions={{ element: <Lock /> }}
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account?
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignUp;
