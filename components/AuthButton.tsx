"use client";
import React from "react";
import Button from "./Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = () => {
    if (session?.user) {
      <p>Signed in as {session.user.email}</p>;
      signOut().then(() => {});
    } else {
      signIn().then(() => {
        router.push("/");
      });
    }
  };

  return (
    <div className="lg:flexCenter hidden">
      <Button
        type="button"
        title={session?.user ? "Sign out" : "Sign in"}
        icon="/user.svg"
        variant="btn_dark_green"
        onClick={handleClick}
      />
    </div>
  );
}
