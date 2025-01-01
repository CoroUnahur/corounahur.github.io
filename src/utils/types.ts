export interface MenuItem {
    href: string;
    name: string;
    icon?:any;
}

export interface SocialMedia {
    icon: any;
    url: string;
}

export interface Concierto {
    image: string;
    titulo: string;
    fecha: string;
    hora: string;
    lugar: string;
    calle: string;
}

export interface Reel {
    src: string;
    srcPreview?: string;
}

export interface Image {
    id: number;
    url: string;
    srcPreview?: string;
}