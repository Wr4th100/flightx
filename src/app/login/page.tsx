import UserAuthForm from "@/components/auth/UserAuthForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Login - FlightX",
  description: "Login to your FlightX account",
};

const LoginPage = () => {
  return (
    <>
      <div className="md:hidden"></div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <Image
            src={"https://images.unsplash.com/photo-1605590427165-3884d6aa6731?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="FlightX"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-20 flex items-center text-lg font-medium ">
            <div className="rounded-md bg-white p-2 text-black">FlightX</div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2 bg-black/50 w-fit p-2 rounded-md">
              <p className="text-lg">
                &ldquo;Flight Booking has never been simplified to this
                level!&rdquo;
              </p>
              <footer className="text-sm">Sai Sabarish</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {/* Create an account */}
                Sign in to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to login to your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Not yet registered?{" "}
              <Link
                href="/register"
                className="underline underline-offset-4 hover:text-primary"
              >
                Create an account
              </Link>{" "}
              .
            </p>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
