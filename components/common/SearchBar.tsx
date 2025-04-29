"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { X } from "lucide-react";
import { CARS_SEARCH_PARAMS } from "@/shared/constants";

import { Button } from "../ui/button";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get(CARS_SEARCH_PARAMS.search) || ""
  );

  // Quand les searchParams changent (ex: reset), on met à jour l'input
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
        <input
          id="search"
          type="text"
          placeholder="Rechercher par marque ou modèle..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border px-4 py-2 pr-10 text-sm focus:outline-none focus:ring focus:ring-primary/50"
          autoComplete="off"
        />

        {searchTerm && (
          <Button
            type="button"
            variant="ghost"
            onClick={clearSearch}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
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