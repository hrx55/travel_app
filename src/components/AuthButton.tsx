"use client";
import React from "react";
import Button from "./Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthButton() {
  const [loading, setLoading] = useState<boolean>(false);

  const { data: session } = useSession();
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);

    if (session?.user) {
      return setLoading(false);
    }

    await signIn();
    router.push("/");
  };

  const handleLogout = async () => {
    setLoading(true);

    if (!session?.user) {
      return setLoading(false);
    }

    await signOut();
    setLoading(false);
  };

  return (
    <div className="lg:flexCenter hidden">
      <div className="flex flex-col items-center">
        {session?.user ? (
          <Button
            type="button"
            title="Sign out"
            icon={session.user.image || "/user.svg"}
            variant="btn_dark_green"
            onClick={handleLogout}
          />
        ) : (
          <Button
            type="button"
            title="Sign in"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={handleLogin}
          />
        )}
      </div>
    </div>
  );
}
