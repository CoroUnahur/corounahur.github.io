import Youtube from '@/icons/Youtube.astro';
import { type SocialMedia } from './types';
import {Facebook, Instagram} from '@/icons/index.astro';

export const socialMediaLinks: SocialMedia[] = [
    { icon: Youtube, url: 'https://www.instagram.com' },
    { icon: Facebook, url: 'https://www.facebook.com' },
    { icon: Instagram, url: 'https://www.youtube.com' }
];