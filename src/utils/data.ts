import { Facebook, Youtube, Instagram } from "@/icons/index.astro";

interface MenuItem {
    href: string;
    name: string;
}


interface SocialMedia {
    icon: any;
    url: string;
}

export const menuItems: MenuItem[] = [
    { href: '#menu', name: 'Menú' },
    { href: '#conciertos', name: 'Conciertos' },
    { href: '#galeria', name: 'Galeria' },
    { href: '#inscripcion', name: 'Inscripción' }
];


export const socialMediaLinks: SocialMedia[] = [
    { icon: Youtube, url: 'https://www.instagram.com' },
    { icon: Facebook, url: 'https://www.facebook.com' },
    { icon: Instagram, url: 'https://www.youtube.com' }
];

export interface Reel {
    src: string;
    srcPreview?: string;
    width?: number;
    height?: number;
}


export const reels: Reel[] = [

    {
        src: 'https://instagram.faep7-1.fna.fbcdn.net/o1/v/t16/f2/m86/AQOlRDba8c41FwQ0XdS03xOR-ihfSJFayP6efxg4aDoyO3g7D7If5iHAObEN-L681nxiplClxqT3I0Y7Vyj0ZNIhVtcxCMidS0Lh_B8.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=104&vs=1063259025278905_2409760064&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81NzQ0NDc1MjAwMzM0MzE0QUM3MEQyQzNCMUI0RDQ5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dQbWQzeHVPcmhHNGZONEZBQVdxYnVhblBMTnhicV9FQUFBRhUCAsgBACgAGAAbABUAACbIgNnkv%2BCEQBUCKAJDMywXQEyAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AYDhW6Fxwy_uro-ZLrdXZ3H-EhR1oj593I3cWzM6lY9EsQ&oe=675E7124&_nc_sid=7a9f4b',
        srcPreview: 'reel1.jpg'
    },
    {
        src: 'https://instagram.faep7-1.fna.fbcdn.net/o1/v/t16/f2/m86/AQNLlGVFD1mTlcB51Ya_a1z0xDRwaSVS4aDHRkI8DtoRSRWJKl9Iv7bWK4IiwqmbE0Iu9BF27Nx5V6eq9i9YguRqX8R98KAbLgCdh1E.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=102&vs=1665025584042625_3226749991&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xMjQwMEM4RDYyMDU4NDE1Nzc5RDBCQTdGNUQ4OEQ5Nl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dCaFgweHRfTUlITXJVQUJBR0FQYXlfaXkwRnlicV9FQUFBRhUCAsgBACgAGAAbABUAACb%2BtvHM0NSDQBUCKAJDMywXQDa7peNT988YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AYDdS2MuNfALnnAe4G8VyqyDDDxPevMHElgm8gE-NMMXog&oe=675E83B5&_nc_sid=7a9f4b',
        srcPreview: 'reel2.jpg'
    },
    {
        src: 'https://instagram.faep7-1.fna.fbcdn.net/o1/v/t16/f2/m86/AQOYMB845oXadain_JVIY5MZDCqSAFXtqncvaseUdwz1NGxVMnU-q_m5GRDaRS1TDxHOkt7hp2OTiLrJHwSwZaJ2T6MASYf-hQbAEy8.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=103&vs=835610345420295_470158594&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DMzQyRjk3NkZDRERENDVBQzNENzlBOTkyMzQwRDJCQV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dNd1BjQnZnanZ2UWRfNEJBTkttQzFuSjNZZzdicV9FQUFBRhUCAsgBACgAGAAbABUAACb0tqLBlvP8PxUCKAJDMywXQGeTMzMzMzMYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AYDx_yslLJvIICOwRtBbcJ6hnugQO3mPI9zvmUfyWORiRw&oe=675E84B0&_nc_sid=7a9f4b',
        srcPreview: 'reel3.jpg'
    },
    {
        src: 'https://instagram.faep7-1.fna.fbcdn.net/o1/v/t16/f2/m86/AQMCP8GIHlpHpQrvV1hpHMt1SmfM_9Rv898INKUEYCNQ44zMcbJyX6vpFDidzxajSwivOABQ4Gf51cx58UoCaTK321XVPc4yvenruE4.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=101&vs=1699250113970274_3259543158&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC81NjQzMzQ5RjMwMzBCRkFCMTJDMEQ5RTUwQzMzMUFCNl92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dMYXc4QnRtamNnWWNPNENBSzlXbHctVjdhWXpicV9FQUFBRhUCAsgBACgAGAAbABUAACa2yNjehbD4PxUCKAJDMywXQEJMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AYA8pBcxXifb5gRWxPkLoI7BDlYx1Uyn-oLY-BO3z9rtmQ&oe=675E9ED9&_nc_sid=7a9f4b',
        srcPreview: 'reel4.jpg'
    },
    {
        src: 'https://instagram.faep7-1.fna.fbcdn.net/o1/v/t16/f2/m86/AQOYMB845oXadain_JVIY5MZDCqSAFXtqncvaseUdwz1NGxVMnU-q_m5GRDaRS1TDxHOkt7hp2OTiLrJHwSwZaJ2T6MASYf-hQbAEy8.mp4?stp=dst-mp4&efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_cat=103&vs=835610345420295_470158594&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DMzQyRjk3NkZDRERENDVBQzNENzlBOTkyMzQwRDJCQV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dNd1BjQnZnanZ2UWRfNEJBTkttQzFuSjNZZzdicV9FQUFBRhUCAsgBACgAGAAbABUAACb0tqLBlvP8PxUCKAJDMywXQGeTMzMzMzMYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&ccb=9-4&oh=00_AYDx_yslLJvIICOwRtBbcJ6hnugQO3mPI9zvmUfyWORiRw&oe=675E84B0&_nc_sid=7a9f4b',
        srcPreview: 'reel3.jpg'
    },
];


const generateRandomImageUrl = (): string[] => {
    const id = Math.floor(Math.random() * 300);
    const width = Math.floor(Math.random() * 200) + 1000;
    const height = Math.floor(Math.random() * 200) + 1000;
    const prevWidth = Math.floor(Math.random() * 200) + 100;
    const prevHeight = Math.floor(Math.random() * 200) + 100;
    return [`https://picsum.photos/id/${id}/${width}/${height}.webp`,`https://picsum.photos/id/${id}/${prevWidth}/${prevHeight}.webp`];
};

export interface Image {
    id: number;
    url: string;
    srcPreview?: string;
}

export const images: Image[] = Array.from({ length: 30 }, (_, index) => {
    const image = generateRandomImageUrl();
    return {
    id: index,
    url: image[0],
    srcPreview: image[1]
    
}});


export const fetchImages = async (): Promise<Image[]> => {
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const images: Image[] = await response.json();
    return images;
}

