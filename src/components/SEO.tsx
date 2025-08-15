import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO = ({
  title = "Fabien Astorg - Développeur Frontend | Portfolio",
  description = "Développeur Frontend spécialisé en React, TypeScript et Node.js. Découvrez mes projets et compétences en développement web moderne.",
  keywords = "développeur web, frontend, React, TypeScript, Node.js, JavaScript, portfolio, développeur français",
  image = "https://fabienastorg.com/snippet.png",
  url = "https://fabienastorg.com",
  type = "website"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement;
      }
      if (element) {
        element.content = content;
      }
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = url;
    }
  }, [title, description, keywords, image, url, type]);

  return null;
};

// Hook personnalisé pour utiliser SEO plus facilement
export const useSEO = (seoProps: SEOProps) => {
  const {
    title = "Fabien Astorg - Développeur Frontend | Portfolio",
    description = "Développeur Frontend spécialisé en React, TypeScript et Node.js. Découvrez mes projets et compétences en développement web moderne.",
    keywords = "développeur web, frontend, React, TypeScript, Node.js, JavaScript, portfolio, développeur français",
    image = "https://fabienastorg.com/snippet.png",
    url = "https://fabienastorg.com",
    type = "website"
  } = seoProps;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement;
      }
      if (element) {
        element.content = content;
      }
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', image);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = url;
    }
  }, [title, description, keywords, image, url, type]);
};
