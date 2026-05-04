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
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignUpPage() {
    const handleGoogleSignIn = async() => {
        await authClient.signIn.social({
            provider: 'google',
        })
      }

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({email,password,name,image})

    const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        image,
    });
    console.log({data, error});

    if(!error){
        router.push("/");
    }
    if(error){
          toast.error("Sign Up Failed");
        }
  };
  return (
    <Card className="shadow rounded-2xl mx-auto w-125 py-9 mt-5">
      <h1 className="text-center text-2xl font-bold">Register</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
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
          <Button className="w-full text-[#131D4F] text-sm border bg-white rounded-xl" type="reset" >
            Reset
          </Button>
        </div>
      </Form>
      <br/>
      <br/>
      <Separator/>
      <p className="text-center text-muted">Already have an account?</p>
        <Link href={'/signin'}><Button className="w-full bg-[#131D4F] font-bold text-sm text-white rounded-xl">Log In</Button></Link>
        <Button onClick={handleGoogleSignIn} className="w-full bg-[#131D4F] font-bold text-sm text-white rounded-xl"><GrGoogle /> Log In with Google</Button>
    </Card>
  );
}