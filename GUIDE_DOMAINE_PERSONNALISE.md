# 🌐 CONFIGURATION DOMAINE PERSONNALISÉ

## 📋 **Guide de Configuration pour fabienastorg.com**

### **1. Configuration DNS chez OVH**

Connectez-vous à votre espace client OVH et ajoutez ces enregistrements DNS :

#### **Option A : Domaine principal (fabienastorg.com)**
```
Type: A
Nom: @
Valeur: 185.199.108.153
TTL: 3600
```
```
Type: A
Nom: @
Valeur: 185.199.109.153
TTL: 3600
```
```
Type: A
Nom: @
Valeur: 185.199.110.153
TTL: 3600
```
```
Type: A
Nom: @
Valeur: 185.199.111.153
TTL: 3600
```

#### **Option B : Avec sous-domaine www**
Ajoutez également :
```
Type: CNAME
Nom: www
Valeur: fabienastorg.com
TTL: 3600
```

### **2. Configuration GitHub Pages**

1. Allez dans votre repo GitHub → **Settings** → **Pages**
2. Dans **"Custom domain"**, tapez : `fabienastorg.com`
3. GitHub va créer un commit avec le fichier CNAME
4. Attendez la propagation DNS (15 minutes à 48h)
5. Cochez **"Enforce HTTPS"** une fois le domaine validé

### **3. Vérification**

#### **Tester la propagation DNS :**
```bash
# Vérifier les enregistrements A
nslookup fabienastorg.com

# Vérifier depuis différents DNS
dig @8.8.8.8 fabienastorg.com
dig @1.1.1.1 fabienastorg.com
```

#### **Outils en ligne :**
- https://www.whatsmydns.net/
- https://dnschecker.org/

### **4. Timeline de Migration**

1. **Immédiat** : Configuration DNS chez OVH
2. **5-15 minutes** : Premier test de résolution
3. **1-4 heures** : Propagation dans la plupart des DNS
4. **24-48 heures** : Propagation mondiale complète
5. **Après validation** : Activation HTTPS sur GitHub

### **5. Problèmes Courants**

#### **"Domain is not properly configured"**
- Vérifier les enregistrements A
- Attendre la propagation DNS
- Tester avec `nslookup`

#### **"Certificate error"**
- Décocher puis recocher "Enforce HTTPS"
- Attendre que GitHub génère le certificat SSL
- Peut prendre jusqu'à 24h

#### **"404 Not Found"**
- Vérifier que le fichier CNAME existe
- Vérifier que le site se build correctement
- Vérifier les chemins dans le code (plus de /Portfolio/)

### **6. URLs Mises à Jour**

Toutes les URLs dans le projet ont été mises à jour :

- **Ancien** : `https://vaporisateur.github.io/Portfolio/`
- **Nouveau** : `https://fabienastorg.com`

**Fichiers modifiés :**
- ✅ `index.html` - Toutes les meta tags
- ✅ `src/components/SEO.tsx` - URLs par défaut
- ✅ `public/robots.txt` - Sitemap URLs
- ✅ `public/sitemap.xml` - URL du site
- ✅ `vite.config.ts` - Base path en `/`
- ✅ `public/site.webmanifest` - Chemins des icônes
- ✅ `README.md` - Lien de démo

### **7. Checklist Post-Migration**

Après que le domaine fonctionne :

- [ ] Tester toutes les pages
- [ ] Vérifier les favicons
- [ ] Tester le partage sur réseaux sociaux
- [ ] Vérifier Google Search Console
- [ ] Mettre à jour les liens sur LinkedIn/CV
- [ ] Tester le sitemap : `fabienastorg.com/sitemap.xml`
- [ ] Vérifier les rich snippets avec Google

### **8. SEO et Réseaux Sociaux**

#### **Mettre à jour :**
- LinkedIn : URL du portfolio
- GitHub : URL du site dans la description du repo
- CV/Resume : Nouvelle URL
- Google Search Console : Ajouter la nouvelle propriété

#### **Redirection automatique :**
GitHub Pages redirigera automatiquement `vaporisateur.github.io/Portfolio/` vers `fabienastorg.com` une fois configuré.

---

**🎯 Résultat :** Portfolio accessible sur **https://fabienastorg.com** avec certificat SSL gratuit !
