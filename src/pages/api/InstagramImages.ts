import type { APIRoute } from "astro";
import type { Image } from "@/utils/data";

 async function fetchInstagramImages(): Promise<Image[]> {
	const {data} = await fetch('https://www.instagram.com/graphql/query/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			__user: "0",
			variables: {
				data:{
					count:33,
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
			instagramImages.push(node.carousel_media.map((media: any) => {
				return {
					description: node.caption.text || '',
					src: media.image_versions2.candidates[0].url,
					width: media.image_versions2.candidates[0].width,
					height: media.image_versions2.candidates[0].height,
				}
			}))
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

export const GET: APIRoute = async () => {
	const images = await fetchInstagramImages();
	return new Response(JSON.stringify({images}), {
		status: 200,
		headers: {
		"Content-Type": "application/json"
		}
	});
}
