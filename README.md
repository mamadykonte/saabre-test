# 🚗 Saabre - Test Frontend Developer

Bienvenue sur mon projet de test technique pour Saabre.
Ce projet est un MVP d'un catalogue interactif de véhicules électrifiés (voitures électriques, hybrides...).

## 📦 Stack technique
- **Next.js 15** (App Router)
- **React 18** (Server Components + Client Components)
- **TypeScript**
- **TailwindCSS**
- **Shadcn UI**
- **ESLint** et **Prettier**
- **Vercel** pour le déploiement

## ✨ Fonctionnalités réalisées

- Affichage d'une liste paginée des véhicules
- Système de pagination dynamique avec `page` et `pageSize`
- Page de détail pour chaque véhicule (`/cars/[carId]`)
- Gestion des erreurs (`error.tsx`) et chargements (`loading.tsx`)
- Architecture modulaire : **features-based**
- Respect des bonnes pratiques SEO (meta tags, OpenGraph, titres dynamiques)
- Accessibilité améliorée : balises HTML sémantiques, aria-labels, alt-texts
- UX fluide : Skeletons de chargement, spinners, scroll-to-top automatique
- Déploiement sur Vercel

## 🚀 Lancer le projet en local

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

3. Ajouter un fichier `.env.local`
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Démarrer le projet
```bash
npm run dev
```

## 👨‍💻 Structure du projet

```
├── app/ (routing Next.js)
├── features/ (logique métier des voitures)
├── components/ui/ (UI génériques : boutons, select...)
├── components/common/ (Pagination, Spinner, etc.)
├── lib/ (utils et hooks)
├── public/ (images statiques)
├── shared/ (formatters, constantes)
├── tsconfig.json, eslint.config.mjs (configurations)
```

## 📘 Sources utilisées
- [Next.js 15 documentation](https://nextjs.org/docs)
- [TailwindCSS documentation](https://tailwindcss.com/docs)
- [Shadcn UI documentation](https://ui.shadcn.dev/)

## 📜 Respect des consignes Saabre

- HTML optimisé et accessibilité
- Responsive design adapté à tous les écrans
- Code clair, composantisé et réutilisable
- Bonne performance et expérience utilisateur
- Projet scalable, facilement évolutif et mantenable

---

Merci beaucoup pour votre attention et votre évaluation ! 🚀
