"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { mockAccounts } from "../mockData/MockData";
import Header from "../header/Header";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(
      (account) => account.holder.username === username
    );
    if (!userAccount) {
      setError("User not found");
      return;
    }
    if (userAccount.holder.password !== password) {
      setError("Invalid password");
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(userAccount));
    router.push("/dashboard");
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />
      <div className="pl-9 mt-5 text-black bg-transparent flex items-center justify-start"><p>Log In to Online Banking</p></div>
      <div className="h-screen bg-[white] p-4">
        <div className="mt-3">
          {error && (
            <p className="text-[20px] text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">
              {error}
            </p>
          )}
        </div>

        <div className="bg-white mx-auto rounded-xl max-w-[350px] py-7 pt-0">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6 border p-5 rounded-lg">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="Username"
                  className="text-[#5c5c5c] text-[16px]"
                >
                  User ID
                </label>
                <input
                  type="text"
                  value={username}
                  className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="password"
                  className="text-[#5c5c5c] text-[16px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-6">
              <button
                type="submit"
                className="p-4 bg-[#d71e28] w-full text-white font-semibold rounded-md"
              >
                Sign In
              </button>
            </div>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
}