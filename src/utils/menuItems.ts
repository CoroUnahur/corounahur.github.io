import Home from '@/icons/Home.astro';
import { type MenuItem } from './types';
import Gallery from '@/icons/Gallery.astro';
import News from '@/icons/news.astro';
import About from '@/icons/about.astro';
import Pen from '@/icons/pen.astro';

export const menuItems: MenuItem[] = [
    { href: '#menu', name: 'Menú', icon: Home },
    { href: '#about', name: 'Sobre Nosotros', icon: About },
    { href: '#conciertos', name: 'Conciertos', icon: News},
    { href: '#galeria', name: 'Galeria', icon: Gallery },
    { href: '#inscripcion', name: 'Inscripción', icon: Pen }
];
