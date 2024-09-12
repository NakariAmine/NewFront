"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function AccessDenied() {
  const router = useRouter();

  const handleHome = () => {
    const role = localStorage.getItem("role");
    console.log(role);
    if (role === "ADMINISTRATOR") {
      router.push("/");
    } else if (role === "VALIDEUR") {
      router.push("/");
    }
    else{
      router.push("/");
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
      <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[20rem] font-extrabold leading-none text-transparent">
        403
      </span>
      <h2 className="font-heading my-4 text-4xl font-bold">Accès refusé</h2>
      <p className="text-xl">
        Vous n'avez pas le droit d'accéder à cette page.
      </p>
      <div className="mt-16 flex justify-center gap-4">
        <Button onClick={handleHome} variant="default" size="lg" className="text-white text-xl">
        Retour à votre tableau de bord
        </Button>
      </div>
      </div>
    </div>
  );
}
