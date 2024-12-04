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

export interface Image {
    description: string;
    src: string;
    srcPreview?: string;
    width?: number;
    height?: number;
}

export const images: Image[] = [
    {
        description: 'A calm ocean with clear blue water.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg',
        width: 2500,
        height: 1667
    },
    {
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
        width: 752,
        height: 940
    },
    {
        description: 'A calm ocean with clear blue water.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
        width: 752,
        height: 900
    },
    {
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/6/img-200.jpg',
        width: 752,
        height: 940
    },
    {
        description: 'A calm ocean with clear blue water.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/7/img-200.jpg',
        width: 752,
        height: 900
    },
    {
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/8/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/8/img-200.jpg',
        width: 752,
        height: 940
    },
    {
        description: 'A calm ocean with clear blue water.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/10/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/10/img-200.jpg',
        width: 752,
        height: 900
    },
    {
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/11/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/11/img-200.jpg',
        width: 752,
        height: 940
    },
    {
        description: 'A calm ocean with clear blue water.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
        srcPreview: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
        width: 752,
        height: 900
    },
    
];


export async function fetchInstagramImages(): Promise<Image[]> {
	const {data} = await fetch('https://www.instagram.com/graphql/query/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			__user: "0",
			variables: {
				data:{
					count:2,
					include_relationship_info:false,
					latest_besties_reel_media:false,
					latest_reel_media:false
				},
					username:"corounahur",
					__relay_internal__pv__PolarisIsLoggedInrelayprovider:false,
					__relay_internal__pv__PolarisFeedShareMenurelayprovider:false
				},
			server_timestamps: false,
			doc_id: "8759034877476257"
		  }),
	}).then((response) => response.json());


	const instagramImages: Image[] = []
    

	data.xdt_api__v1__feed__user_timeline_graphql_connection.edges.forEach(({node}: any) => {
		if(node.carousel_media_count){
            const description = node.caption ? node.caption.text : '';
            
        instagramImages.push(...node.carousel_media.map((media: any) => ({
            description: description,
            src: media.image_versions2.candidates[0].url,
            width: media.image_versions2.candidates[0].width,
            height: media.image_versions2.candidates[0].height,
        })));
		}
		else{
			instagramImages.push({
				description: node.caption.text || '',
				src: node.image_versions2.candidates[0].url,
				width: node.image_versions2.candidates[0].width,
				height: node.image_versions2.candidates[0].height,
			})
		}


	});

	return instagramImages;
}