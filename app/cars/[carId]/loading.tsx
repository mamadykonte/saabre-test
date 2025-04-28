import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <main className="container max-w-5xl mx-auto flex-grow p-4 md:pt-10">
      <div className="p-6 space-y-6">
        {/* Bouton retour */}
        <Skeleton className="h-6 w-40" />

        {/* Image principale */}
        <Skeleton className="h-64 w-full rounded-2xl" />

        {/* Infos principales */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
          <Skeleton className="h-8 w-60" /> {/* Marque - Modèle */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <Skeleton className="h-5 w-32" /> {/* Prix de base barré */}
            <Skeleton className="h-7 w-24" /> {/* Prix actuel */}
          </div>
        </div>

        {/* Badge Commercialisé */}
        <Skeleton className="h-6 w-24 rounded-full" />

        {/* Section spécifications */}
        <div className="space-y-4 mt-6">
          <Skeleton className="h-5 w-64" />{" "}
          {/* Titre "Spécifications techniques" */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
        </div>

        {/* Date de dernière mise à jour */}
        <div className="flex justify-end">
          <Skeleton className="h-4 w-56" />
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
