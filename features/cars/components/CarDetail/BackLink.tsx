"use client";

import { useRouter } from "next/navigation";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackLink = () => {
  const router = useRouter();

  const handleBack = () =>
    window.history.length > 2 ? router.back() : router.push("/");

  return (
    <Button
      className="w-fit cursor-pointer text-base"
      onClick={handleBack}
      aria-label="Retourner à la recherche"
      title="Retourner à la recherche"
      variant="link"
    >
      <ChevronLeft /> Retourner à la recherche
    </Button>
  );
};

export default BackLink;
