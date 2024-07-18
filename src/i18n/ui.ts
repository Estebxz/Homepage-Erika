import SpanishFlag from "@/components/flags/ColombiaIcon.astro";
import BrazilFlag from "@/components/flags/BrazilIcon.astro";
import UnitedStatesFlag from "@/components/flags/USAIcon.astro";

export const LANGUAGES: Record< string, { code: string; name: string; flag: typeof SpanishFlag } > = {
    es: {
      code: 'es',
      name: 'Español',
      flag: SpanishFlag
    },
    br: {
      code: 'br',
      name: 'Portuguese',
      flag: BrazilFlag
    },
    en: {
      code: 'en',
      name: 'English',
      flag: UnitedStatesFlag
    }
};

export const defaulLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.briefcase': 'Portafolio',
    'nav.about_us': 'Acerca de nosotros',
    'nav.contact_us': 'Contactanos',
    'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidad',
		'nav.cookies': 'Cookies'
  },
  br: {
    'nav.home': 'Começar',
    'nav.briefcase': 'Portfólio',
    'nav.about_us': 'Sobre nós',
    'nav.contact_us': 'Contate-nós',
    'nav.legal': 'Aviso Legal',
    'nav.privacidad': 'Privacidade',
    'nav.cookies': 'Cookies'
  },
  en: {
    'nav.home': 'Home',
    'nav.briefcase': 'Briefcase',
    'nav.about_us': 'About us',
    'nav.contact_us': 'Contact us',
    'nav.legal': 'Legal Notice',
		'nav.privacidad': 'Privacy',
		'nav.cookies': 'Cookies'
  }
} as const;

export const routes = {
  es: {
    briefcase: 'portafolio',
    about_us: 'acerca-de-nosotros',
    contact_us: 'contactanos'
  },
  br: {
    briefcase: 'portfólio',
    about_us: 'sobre-nós',
    contact_us: 'contate-nos'
  },
  en: {
    briefcase: 'portfolio',
    about_us: 'about-us',
    contact_us: 'contact-us'
  }
};