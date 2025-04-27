export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseUrl) {
    throw new Error("L'URL de base de l'API n'est pas définie dans .env");
  }

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Erreur API : ${response.status}`);
  }

  return response.json();
}