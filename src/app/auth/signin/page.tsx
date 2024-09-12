"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";


const SignIn: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/authentication", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const json = await res.json();
        localStorage.setItem("token", json.token);
        localStorage.setItem("role", json.role);
        switch (json.role) {
          case "ADMINISTRATOR":
            router.push("/");
            break;
          case "VALIDEUR":
            router.push("/");
            break;
          default:
            router.push("/auth/signin");
            break;
        }
      } else {
        alert("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout hideNavAndSidebar>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="px-26 py-17.5 text-center">
              <div className="mb-5.5 inline-block">
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo.png"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </div>

              <p className="2xl:px-20">
                Bienvenue sur la plateforme de gestion des demandes et de gestion des stocks de{" "}
                <strong>Mamda-MCMA</strong>.
              </p>

              <span className="mt-15 inline-block">
                <Image
                  className="dark:hidden"
                  src={"/images/logo/people-carrying-icons-related-insurance.png"}
                  alt="Logo"
                  width={400}
                  height={400}
                />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Connexion à votre compte
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Entrer votre adresse email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Entrer votre mot de passe"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value={loading ? "Chargement..." : "Se Connecter"}
                    className="w-full cursor-pointer rounded-lg border-[#D63384] bg-[#D63384] p-4 text-white transition hover:bg-opacity-90"
                    disabled={loading}
                  />
                </div>
                <div className="mt-6 text-center"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;
