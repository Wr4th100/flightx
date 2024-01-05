"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

const UserAuthForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  const error = useSearchParams()?.get("error");


  async function onSubmit(values: z.infer<typeof loginSchema>) {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="roshan@gmail.com" {...field} />
              </FormControl>
              {/* <FormDescription>

              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              {/* <FormDescription>

              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
            {error ? (
              <SignInError error={error} />
            ) : (
              <div className="flex items-center justify-center py-2 text-sm text-red-500">
                <span>&nbsp;</span>
              </div>
            )}
          </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

const errors: Record<string, string> = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in.",
  "Invalid email or password": "Invalid email or password",
  USER_NOT_FOUND: "User doesn't exist",
  INVALID_PASSWORD: "Invalid password",
  "User not found": "User not found",
};

const SignInError = ({ error }: Record<string, string>) => {
  const errorMessage = error && (errors[error] ?? errors.default);
  return (
    <div className="flex items-center justify-center py-2 text-sm text-red-500">
      {errorMessage}
    </div>
  );
};


export default UserAuthForm;
