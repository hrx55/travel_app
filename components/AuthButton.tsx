"use client";
import React from "react";
import Button from "./Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = () => {
    if (session?.user) {
      signOut().then(() => {});
    } else {
      signIn().then(() => {
        router.push("/");
      });
    }
  };

  return (
    <div className="lg:flexCenter hidden">
      <div className="flex flex-col items-center">
        <Button
          type="button"
          title={session?.user ? "Sign out" : "Sign in"}
          icon="/user.svg"
          variant="btn_dark_green"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
