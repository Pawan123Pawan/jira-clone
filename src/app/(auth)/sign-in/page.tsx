import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { SignInCard } from "@/features/auth/components/sign-in-card";

const SignInPage = async () => {
  const user = await getCurrent();

  console.log(user, "dkjsdjs")

  if (user) redirect("/");

  return <SignInCard />;
};

export default SignInPage;
