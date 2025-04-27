import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <Card className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 cursor-pointer hover:shadow-lg transition-shadow">
      <Skeleton className="h-60 w-72 md:h-32 md:w-48 rounded-xl" />

      <CardContent className="p-0 w-full flex flex-col md:flex-row md:justify-between flex-1 gap-3">
        <div className="flex flex-col flex-1 gap-4 md:gap-3">
          <Skeleton className="w-full h-8 md:h-6 md:w-40" />{" "}
          {/* Marque - Modèle */}
          <Skeleton className="w-full h-8 md:h-6 md:w-40" /> {/* Prix */}
          <Skeleton className="w-full h-8 md:h-6 md:w-40 rounded-full" />{" "}
          {/* Tag "Commercialisé" */}
          <Skeleton className="h-5 w-32" /> {/* Stars + Reviews */}
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <Skeleton className="w-full h-8 md:h-6 md:w-40" />
          <Skeleton className="w-full h-8 md:h-6 md:w-40" />
          <Skeleton className="w-full h-8 md:h-6 md:w-40" />
          <Skeleton className="w-full h-8 md:h-6 md:w-40" />
        </div>
      </CardContent>
    </Card>
  );
};

const LoadingPage = () => {
  return (
    <main className="max-w-5xl mx-auto flex-grow container mt-6 grid gap-6">
      <section
        aria-label="Liste des voitures"
        className="flex flex-col gap-6 max-w-5xl"
      >
        {Array.from({ length: 3 }, (_, index) => (
          <CardSkeleton key={index} />
        ))}

        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-36" />
          <Skeleton className="h-10 w-72" />
        </div>
      </section>
    </main>
  );
};

export default LoadingPage;
