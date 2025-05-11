"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { X } from "lucide-react";
import { CARS_SEARCH_PARAMS } from "@/shared/constants";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get(CARS_SEARCH_PARAMS.search) || ""
  );

  useEffect(() => {
    setSearchTerm(searchParams.get(CARS_SEARCH_PARAMS.search) || "");
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (searchTerm.trim()) {
      params.set(CARS_SEARCH_PARAMS.search, searchTerm.trim());
    } else {
      params.delete(CARS_SEARCH_PARAMS.search);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  const clearSearch = () => {
    setSearchTerm("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete(CARS_SEARCH_PARAMS.search);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center flex-3/4 gap-2"
    >
      <div className="relative flex-1">
        <label htmlFor="search" className="sr-only">
          Rechercher une voiture
        </label>
        <Input
          id="search"
          type="text"
          placeholder="Rechercher par marque ou modèle"
          className="placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />

        {searchTerm && (
          <Button
            type="button"
            variant="link"
            onClick={clearSearch}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-red-600 focus:outline-none"
            aria-label="Effacer la recherche"
          >
            <X size={18} />
          </Button>
        )}
      </div>

      <Button type="submit" variant="secondary">
        Rechercher
      </Button>
    </form>
  );
}