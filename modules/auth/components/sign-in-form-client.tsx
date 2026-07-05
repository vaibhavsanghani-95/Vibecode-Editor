import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "@/auth";

async function handleGoogleSignIn() {
  "use server";
  await signIn("google");
}

async function handleGithubSignIn() {
  "use server";
  await signIn("github");
}

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md border border-slate-200 bg-white text-slate-900 shadow-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-slate-900">
          Sign In
        </CardTitle>
        <CardDescription className="text-center text-slate-600">
          Choose your preferred sign-in method
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form action={handleGoogleSignIn}>
          <Button
            type="submit"
            variant={"outline"}
            className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            <span>Sign in with google</span>
          </Button>
        </form>
        <form action={handleGithubSignIn}>
          <Button
            type="submit"
            variant={"outline"}
            className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            <span>Sign in with github</span>
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <p className="w-full text-center text-sm text-slate-600">
          By signing in, you agree to our{" "}
          <a href="#" className="underline hover:text-slate-900">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-slate-900">
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;
