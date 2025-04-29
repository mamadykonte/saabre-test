"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import {
  CARS_ENERGY_OPTIONS,
  CARS_SEARCH_PARAMS,
  CARS_SORT_OPTIONS,
} from "@/shared/constants";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "../ui/button";

export default function SortAndFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sort = searchParams.get(CARS_SEARCH_PARAMS.sort) || "";
  const energy = searchParams.get(CARS_SEARCH_PARAMS.energy) || "";
  const search = searchParams.get(CARS_SEARCH_PARAMS.search) || "";

  const updateSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  const resetFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(CARS_SEARCH_PARAMS.search);
    params.delete(CARS_SEARCH_PARAMS.energy);
    params.delete(CARS_SEARCH_PARAMS.sort);
    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`);
  };

  const isFilterActive = search || sort || energy;

  return (
    <div className="flex flex-col md:flex-row gap-2">
      {/* Tri par prix */}

      <Select
        value={sort}
        onValueChange={(value) =>
          updateSearchParam(CARS_SEARCH_PARAMS.sort, value)
        }
      >
        <SelectTrigger aria-label="Trier par prix" className="flex-1 w-full">
          <SelectValue placeholder="Trier" />
        </SelectTrigger>
        <SelectContent>
          {CARS_SORT_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Filtrer par énergie */}

      <Select
        value={energy || CARS_ENERGY_OPTIONS[0].value}
        onValueChange={(value) =>
          updateSearchParam(
            CARS_SEARCH_PARAMS.energy,
            value === CARS_ENERGY_OPTIONS[0].value ? "" : value
          )
        }
      >
        <SelectTrigger
          aria-label="Filtrer par source d'énergie"
          className="flex-1 w-full"
        >
          <SelectValue placeholder="Toutes" />
        </SelectTrigger>
        <SelectContent>
          {CARS_ENERGY_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Bouton Reset */}
      <Button
        type="button"
        onClick={resetFilters}
        disabled={!isFilterActive}
        variant="outline"
        className="flex-1"
      >
        Réinitialiser les filtres
      </Button>
    </div>
  );
}
