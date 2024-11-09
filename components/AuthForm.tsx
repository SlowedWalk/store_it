"use client";

import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

type AuthFormProps = {
  type: "sign-in" | "sign-out";
};

const AuthForm = ({ type }: AuthFormProps) => {
  return <div></div>;
};

export default AuthForm;
