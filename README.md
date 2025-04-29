# 🚗 Saabre - Frontend Test

Projet frontend réalisé avec **Next.js 15**, **TypeScript**, **Tailwind CSS**, et **Shadcn UI** dans le cadre d’un test technique pour afficher une liste de voitures avec pagination, recherche, tri, et filtrage.

Live demo: [https://saabre-cars.vercel.app](https://saabre-cars.vercel.app)

---

## 📦 Fonctionnalités principales

- 🔍 Recherche de voitures par marque ou modèle
- 🧮 Tri par prix (croissant / décroissant)
- ⚡ Filtrage par source d’énergie (Hybride / Électrique / Autres)
- 🔁 Pagination avec sélection du nombre d’éléments par page
- 🔄 Réinitialisation rapide des filtres
- 🌐 Métadonnées SEO et Open Graph
- 🧠 Architecture modulaire (feature-based)
- 📱 Responsive et accessible

---

## 🧱 Structure du projet

```
├── app/                     # Routes Next.js (App Router)
│   ├── (home)/             # Page d’accueil avec filtres et pagination
│   └── cars/[carId]/       # Détail d’un véhicule
├── features/cars/          # Domaine métier voiture
│   ├── api/                # Fonctions d’appel API
│   ├── components/         # Composants spécifiques au domaine
│   ├── lib/                # Logique métier (tri, filtre, etc.)
│   ├── repositories/       # Abstraction des appels API
│   └── types/              # Types TypeScript du domaine
├── components/ui/          # UI de base (Shadcn UI)
├── components/common/      # Composants réutilisables (search, tri, pagination...)
├── shared/                 # Fonctions / constantes génériques et cross-domain
├── public/                 # Images statiques (voitures par défaut)
├── lib/                    # API client générique, helpers
```

---

## ⚙️ Installation

1. Cloner le repository
```bash
git clone https://github.com/mamadykonte/saabre-test
cd saabre-test
```

2. Installer les dépendances
```bash
npm install
```
ou
```bash
pnpm install
```

3. Renommer le fichier `.env.local.example` en `.env.local` et ajouter base url de l'API

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Démarrer le projet
```bash
npm run dev
```

---

## 🛠 Technologies utilisées

- [Next.js 15](https://nextjs.org/)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Picsum API](https://picsum.photos/) (images)

---

## 🧪 À faire pour aller plus loin

- Permettre la comparaison de voitures (mini comparateur)
- Stocker les filtres dans l’URL de manière persistante
- Ajouter un système de favoris
- Ajouter des tests unitaires (Jest / Vitest)
- Mettre en place des vraies images de voitures
- Ajouter des animation
