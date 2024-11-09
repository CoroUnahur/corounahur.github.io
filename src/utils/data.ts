import { Facebook, Youtube, Instagram } from "../icons/index.astro";

interface MenuItem {
    href: string;
    name: string;
}


interface SocialMedia {
    icon: any;
    url: string;
}

export const menuItems: MenuItem[] = [
    { href: '/menu', name: 'Menú' },
    { href: '/conciertos', name: 'Conciertos' },
    { href: '/galeria', name: 'Galeria' },
    { href: '/inscripcion', name: 'Inscripción' }
];


export const socialMediaLinks: SocialMedia[] = [
    { icon: Youtube, url: 'https://www.instagram.com' },
    { icon: Facebook, url: 'https://www.facebook.com' },
    { icon: Instagram, url: 'https://www.youtube.com' }
];