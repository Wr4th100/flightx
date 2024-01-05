import UserAuthForm from "@/components/auth/UserAuthForm";
import UserRegisterForm from "@/components/auth/UserRegisterForm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Register - FlightX",
  description: "Register to your FlightX account",
};

const LoginPage = () => {
  return (
    <>
      <div className="md:hidden"></div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <Image
            src={
              "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="FlightX"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-20 flex items-center text-lg font-medium ">
            <div className="rounded-md bg-white p-2 text-black">Flight <span className="text-black">X</span></div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="w-fit space-y-2 rounded-md bg-black/50 p-2">
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
                Create your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details to create your account
              </p>
            </div>
            <UserRegisterForm />

            <p className="px-8 text-center text-sm text-muted-foreground">
              By registering, you agree to our{" "}
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
