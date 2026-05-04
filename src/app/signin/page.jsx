'use client'
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
        password,
        email,
        callbackURL: '/',
    });
    if (error) {
      toast.error("Sign In Failed");
    }
  };

  const handleGoogleSignIn = async() => {
    await authClient.signIn.social({
        provider: 'google',
    })
  }
  return (
    <Card className="shadow rounded-2xl mx-auto py-9 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="text">
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>


        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="grid grid-cols-2 gap-2">
          <Button className="w-full bg-[#131D4F] font-bold text-sm text-white rounded-xl" type="submit">
            <Check />
            Submit
          </Button>
          <Button className="w-full text-[#131D4F] border font-bold text-sm bg-white rounded-xl" type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <br/>
      <br/>
      <Separator></Separator>
      <p className="text-center text-muted">Or</p>
      <Button onClick={handleGoogleSignIn} className="w-full bg-[#131D4F] font-bold text-sm text-white rounded-xl"><GrGoogle /> Sign In with Google</Button>    
      <p className="text-center text-muted">Dont have an account?</p>
    <Link href={'/signup'}><Button className="w-full bg-[#131D4F] font-bold text-sm text-white rounded-xl">Sign Up</Button></Link>
    </Card>
  );
}