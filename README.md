# 🚀 Portfolio Personnel

Portfolio moderne et responsive développé avec React, TypeScript, Vite et Tailwind CSS. Animations fluides et une interface utilisateur élégante.

## 🌟 Aperçu

Un portfolio professionnel présentant :
- **Design moderne** avec des effets de glassmorphism
- **Animations orbitales** dans la section hero
- **Navigation fluide** avec défilement automatique
- **Cartes de projets** avec positionnement sticky
- **Interface responsive** pour tous les appareils

🔗 **Demo Live** : [https://fabienastorg.com](https://fabienastorg.com)

## 🛠️ Technologies Utilisées

- **Frontend :**
  - React 19 + TypeScript
  - Vite 7.0.5
  - Tailwind CSS 3.4.16
  - PostCSS + Autoprefixer

- **Déploiement :**
  - GitHub Pages
  - Configuration automatique CI/CD

## 📁 Structure du Projet

```
src/
├── components/
│   ├── sections/           # Sections principales du site
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                 # Composants UI réutilisables
│   │   ├── Card.tsx
│   │   ├── SectionHeader.tsx
│   │   └── HeroOrbit.tsx
│   ├── icons/              # Icônes personnalisées
│   │   ├── StarIcon.tsx
│   │   ├── SparkleIcon.tsx
│   │   └── CheckIcon.tsx
│   └── Header.tsx          # Navigation principale
├── assets/
│   └── images/             # Images du portfolio
└── styles/
    └── index.css           # Styles globaux + Tailwind
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/Vaporisateur/Portfolio.git

# Naviguer dans le dossier
cd Portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173/`

## 📋 Scripts Disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Compile pour la production
npm run preview      # Prévisualise le build de production

# Qualité du code
npm run lint         # Vérifie le code avec ESLint
```

## 🎨 Fonctionnalités

### ✨ Animations
- **HeroOrbit** : Animations orbitales avec des étoiles et étincelles
- **Transitions fluides** entre les sections
- **Effets de survol** sur les éléments interactifs

### 🔧 Navigation
- **Scroll automatique** vers les sections
- **Détection de la section active** dans la navigation
- **Navigation sticky** avec effet glassmorphism

### 📱 Responsive Design
- **Mobile-first** approach
- **Breakpoints Tailwind** pour tous les écrans
- **Images optimisées** pour différentes résolutions

### 🏗️ Architecture
- **Composants modulaires** bien organisés
- **TypeScript** pour la sécurité des types
- **Imports centralisés** avec fichiers index
- **Séparation claire** entre UI, sections et icônes

## 🌍 Déploiement

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions :

1. **Push sur main** déclenche le déploiement
2. **Build automatique** avec Vite
3. **Publication** sur GitHub Pages

### Configuration GitHub Pages
- Domaine personnalisé configuré : `fabienastorg.com`
- Assets correctement gérés pour la production
- Images optimisées et servies depuis `src/assets/`

## 🎯 Sections du Portfolio

### 🏠 Hero Section
- Présentation personnelle avec animations orbitales
- Effets visuels avec particules flottantes
- Call-to-action vers les projets

### 💼 Projets
- **Menu Maker** : Planification stratégique et gestion Agile
- **SEO Nina Carducci** : Optimisation et performance web
- **ArgentBank** : Application bancaire sécurisée

### 👨‍💻 À Propos
- Présentation des compétences
- Parcours professionnel
- Technologies maîtrisées

### 📞 Contact
- Formulaire de contact
- Liens vers les réseaux sociaux
- Informations de contact directes

## 🛡️ Bonnes Pratiques

- **Code TypeScript** avec typage strict
- **Composants réutilisables** et maintenables
- **Performance optimisée** avec Vite
- **SEO-friendly** avec métadonnées appropriées
- **Accessibilité** respectée (ARIA, navigation clavier)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

**Développé avec ❤️ par [Vaporisateur](https://github.com/Vaporisateur)**

*Portfolio Personnel - Juillet 2025*
