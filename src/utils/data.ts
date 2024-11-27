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
    width?: number;
    height?: number;
}

// export const images: Image[] = [
//     {
//         description: 'Se viene un nuevo concierto en La Ciudad de La Plata, en MUMART el Sábado 14 de septiembre. Estan todas y todos cordialmente invitados/as.\n' +
//           'Tesperamos!!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/457878366_479540481569543_1491785333392008190_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=r_9CRPA84ygQ7kNvgHhc8vd&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ1MTQ2ODY5NzkxNTgxODI0OQ%3D%3D.3-ccb7-5&oh=00_AYCXyvRhO9miU-iTTqYLEEpceTNBKszDCUGciZPnxAaTuw&oe=673617AE&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Esta imagen resume la maravillosa presentación que dimos ante un auditorio a sala llena el pasado sábado 24 de agosto.\n' +
//           'Un honor que nos hayan convocado para dar el primer concierto musical gracias a todos! \n' +
//           '@lucianacisonna @m.e.caraballo @unahurlingham @gabyamadeovidela',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/457211052_1523257031913786_4308406090879762660_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjU0eDcxOS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=hCCPubIEOJYQ7kNvgEl8T6M&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MzQzODI4NjQ1NTI4NzIwNQ%3D%3D.3-ccb7-5&oh=00_AYARz0uA6oJ_UlBG4g_-bZuzqFHdMS9vd-8e6dqcvgZJgQ&oe=6736121B&_nc_sid=7a9f4b',
//         width: 1254,
//         height: 719
//       },
//       {
//         description: 'Algunas imagenes de nuestra presentación en Santa Ethnea ayer 23 de agosto.\n' +
//           'Foto y edicion @argenfreak_art',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/456872253_1056651315812401_3930945414598269208_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=L7vfzQq6KBsQ7kNvgEFSLT4&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTgwNDEzNzEzMDY0NjIwMw%3D%3D.3-ccb7-5&oh=00_AYAe-T74EEqDvIrQLzHBK1kqePSjsW5cKpSIHTzcDsqgww&oe=67360445&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Algunas imagenes de nuestra presentación en Santa Ethnea ayer 23 de agosto.\n' +
//           'Foto y edicion @argenfreak_art',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/456596047_811262127853251_1956491114017049247_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=YCVyRYum58MQ7kNvgGd-yH-&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTgwNDEzNzE5Nzc4NTU0MQ%3D%3D.3-ccb7-5&oh=00_AYD324bOYC81rWoVc7lkiOh-VwuPSSPxXQ1TZf_BotmMMA&oe=6735F5B1&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Algunas imagenes de nuestra presentación en Santa Ethnea ayer 23 de agosto.\n' +
//           'Foto y edicion @argenfreak_art',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/456706941_1213754559820131_2817670841068898663_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=WGpYm1scXgYQ7kNvgG5TRVO&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTgwNDEzNzEyMjMwNjc5NQ%3D%3D.3-ccb7-5&oh=00_AYCuVrI2pOjA5Ik9E-OADfj_tPdXV3TeQ4ciwvmWYt2lyg&oe=67361F4E&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Algunas imagenes de nuestra presentación en Santa Ethnea ayer 23 de agosto.\n' +
//           'Foto y edicion @argenfreak_art',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/457052541_851017700465880_3781351401446965049_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=rT-5mBfCPHsQ7kNvgF2Le-7&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTgwNDEzNzEzMDcyMzgyNA%3D%3D.3-ccb7-5&oh=00_AYBaEeNTxEu4SOiC-3RB5o8cWMExqdCHJE4SHm6TADk5bQ&oe=6735FFA3&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Algunas imagenes de nuestra presentación en Santa Ethnea ayer 23 de agosto.\n' +
//           'Foto y edicion @argenfreak_art',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/456460659_8037528743006174_2919986284560749667_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=yxvm3feT6mcQ7kNvgEyJb__&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTgwNDEzNzEzMDc1MDM1NA%3D%3D.3-ccb7-5&oh=00_AYBYV4hiL_Gsf5aOnrLHztSG0EqyHE6J0qbKlHHK26sEug&oe=67361674&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Algunas imagenes de nuestra presentación en Santa Ethnea ayer 23 de agosto.\n' +
//           'Foto y edicion @argenfreak_art',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/456380045_1661796711266198_6756671913258061665_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=l2sKVR1WAagQ7kNvgHsK0x9&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTgwNDEzNzE3MjY2OTcwMQ%3D%3D.3-ccb7-5&oh=00_AYBSwkozjKM37_2CBLUjeo39NW-HKPyYWVcqqNP-oxl95g&oe=67361BF7&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Algunas imagenes de nuestra presentación en Santa Ethnea ayer 23 de agosto.\n' +
//           'Foto y edicion @argenfreak_art',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/456447866_1014434926833948_2117862967106865716_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=431BkLqkEy0Q7kNvgEPOgW6&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTgwNDEzNzEzMDcyOTg0NQ%3D%3D.3-ccb7-5&oh=00_AYAVUUp5P8cUhsf7Lib3AYMuR63PWRHChAQr0r8Iak8pmg&oe=6735FACA&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Ayer en el encuentro coral en Santa Ethnea nuestro Director @mattsemart  junto a los directores. Gracias!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/456880792_544104248045944_3670223356967325316_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzMyeDE1NDcuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Rl9rqw9Xd5sQ7kNvgHKwNNZ&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTczNzc4MTk0MTI3ODQ2NA%3D%3D.3-ccb7-5&oh=00_AYAJ8O1AZ_vVDrYP4o6UgJ8Pb2CzxnN5RdvdmL0bSdoCKA&oe=67362183&_nc_sid=7a9f4b',
//         width: 1332,
//         height: 1547
//       },
//       {
//         description: 'Desde el edificio La Patria, sabado 24 de agosto a las 18 hs en el Nuevo Auditorio (La Patria y Los Toldos).\n' +
          
//           'La mística unión de voces va interpretar un repertorio que incluirá obras de: J. Mäntyjärvi, Ernani Aguiar, Rhonda Sandberg; entre otros.\n' +
//           'Todo bajo la dirección de Matías Martínez🎩',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/456607676_1699472107533402_8888422797772064319_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=opXOnzSaNhcQ7kNvgHLqXWy&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTE0NDEyNDE2Mjc3MzMwOA%3D%3D.3-ccb7-5&oh=00_AYDbG4jzVHypLX2xAIiIzI7EnyBvmsZUan1-Rc3KSXBJrg&oe=67361AA1&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Desde el edificio La Patria, sabado 24 de agosto a las 18 hs en el Nuevo Auditorio (La Patria y Los Toldos).\n' +
          
//           'La mística unión de voces va interpretar un repertorio que incluirá obras de: J. Mäntyjärvi, Ernani Aguiar, Rhonda Sandberg; entre otros.\n' +
//           'Todo bajo la dirección de Matías Martínez🎩',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/456866299_808939317894918_431016094259496654_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3DSukjU9shYQ7kNvgG7fHkb&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTE0NDEyNDE3OTc0MDkxNQ%3D%3D.3-ccb7-5&oh=00_AYDTWERRUTEZq16o6864dk8l-mh6YJXUHZmMQ_y6-8ya-w&oe=6735F4A3&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Desde el edificio La Patria, sabado 24 de agosto a las 18 hs en el Nuevo Auditorio (La Patria y Los Toldos).\n' +
//           '\n' +
//           'La mística unión de voces va interpretar un repertorio que incluirá obras de: J. Mäntyjärvi, Ernani Aguiar, Rhonda Sandberg; entre otros.\n' +
//           'Todo bajo la dirección de Matías Martínez🎩',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/456706940_1042495597023891_7858510720061895353_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=RUeFGE52TgUQ7kNvgG2ZRtJ&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTE0NDEyNDExMjQ5OTIxMg%3D%3D.3-ccb7-5&oh=00_AYAjh1in_XyrFEqNkc0vNphedbWp0syyqIG0an9_PBGlqA&oe=6735F6F9&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Desde el edificio La Patria, sabado 24 de agosto a las 18 hs en el Nuevo Auditorio (La Patria y Los Toldos).\n' +
//           '\n' +
//           'La mística unión de voces va interpretar un repertorio que incluirá obras de: J. Mäntyjärvi, Ernani Aguiar, Rhonda Sandberg; entre otros.\n' +
//           'Todo bajo la dirección de Matías Martínez🎩',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/456611726_1162977111429442_5327198636730159730_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=5a0RvDiB9hgQ7kNvgEElGN7&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MTE0NDEyNDEyMDc2NDQyNA%3D%3D.3-ccb7-5&oh=00_AYDZReQISX6_lR8wi6P2MsZQ_iNb7jTO778LmiwqcOL9Kw&oe=67360E53&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'El Viernes 23 participaremos en este encuentro coral junto a estas hermosas agrupaciones, todos invitados!!! Tesperamos!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/455275818_1022716216012468_2840207949124461772_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41ODZ4NTg2LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Gxk8Ff9K4nQQ7kNvgGcLxWP&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQzMzMzMzI5Mjc1NDUwMDQ3NQ%3D%3D.3-ccb7-5&oh=00_AYA_fAEyGeLHP_H21XhOeVKLWu3UgUTrKJ21MJp3_dYzdQ&oe=673625B1&_nc_sid=7a9f4b',
//         width: 586,
//         height: 586
//       },
//       {
//         description: 'Hoy en nuestro concierto compartido con la @orquestaunahur un placer haber recibido tan grato publico. Una jornada mas que hermosa!! Gracias!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/449362370_298624900012171_6036486537210821111_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTc3eDcxOS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=MU0Y_ItZBFIQ7kNvgEokUAY&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQwMTQxNjAxNTIwNTQ3Mjk2NQ%3D%3D.3-ccb7-5&oh=00_AYDB9QbR_1YVlLsIyEuJ8Lyk2oYdcGAzBQH-nq09SHbpqw&oe=67362487&_nc_sid=7a9f4b',
//         width: 1177,
//         height: 719
//       },
//       {
//         description: 'Hoy en nuestro concierto compartido con la @orquestaunahur un placer haber recibido tan grato publico. Una jornada mas que hermosa!! Gracias!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/449481501_353268647576968_3908757777742354026_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MzkwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=8ckNkxcxL9wQ7kNvgEY1zl9&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQwMTQxNTYxOTg1MDQ2NTQ5MQ%3D%3D.3-ccb7-5&oh=00_AYCiN9kJFqPM2w2hGgDo6NTa8JmqImXvTvgANdT8Rd7U6g&oe=67360923&_nc_sid=7a9f4b',
//         width: 640,
//         height: 390
//       },
//       {
//         description: 'Hoy en nuestro concierto compartido con la @orquestaunahur un placer haber recibido tan grato publico. Una jornada mas que hermosa!! Gracias!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/449482151_830816512565368_5978571380323619215_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NDQwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_CVFORu9ggYQ7kNvgElnEVA&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQwMTQxNTc3NjM1NjcxNzg2Nw%3D%3D.3-ccb7-5&oh=00_AYD0ywQW9o2Ta__NBPjZPLz3I3opXtZgOtZ84BzHle5YLg&oe=67360279&_nc_sid=7a9f4b',
//         width: 720,
//         height: 440
//       },
//       {
//         description: 'Hoy en nuestro concierto compartido con la @orquestaunahur un placer haber recibido tan grato publico. Una jornada mas que hermosa!! Gracias!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/449314984_1110563353339987_8484961729385513112_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43OTZ4NDg3LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=xESLLwlxfVcQ7kNvgHzm07t&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQwMTQxNjAxNTI4OTMyMTYwNQ%3D%3D.3-ccb7-5&oh=00_AYCKiKyUXiULasYxwyILYZKsAIOCxTB8D3n-LIrcD8BxYg&oe=673622AE&_nc_sid=7a9f4b',
//         width: 796,
//         height: 487
//       },
//       {
//         description: 'Hoy en nuestro concierto compartido con la @orquestaunahur un placer haber recibido tan grato publico. Una jornada mas que hermosa!! Gracias!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/449510464_443388545240567_2426179179983116464_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NDQwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=1GGuXGuSXrsQ7kNvgE4dZiR&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQwMTQxNTg2NjQ4Mzc5MTEwMw%3D%3D.3-ccb7-5&oh=00_AYCf_rMOD2RjW_wKK_-v3zHd2M6LDsVDh6TpctquFlm3EQ&oe=6736206D&_nc_sid=7a9f4b',
//         width: 720,
//         height: 440
//       },
//       {
//         description: 'Hoy en nuestro concierto compartido con la @orquestaunahur un placer haber recibido tan grato publico. Una jornada mas que hermosa!! Gracias!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/449490712_1592103398039749_5641722854506774100_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NDQwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=kPr7QSfKJvEQ7kNvgH5yxdl&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQwMTQxNTk1MzM5ODI3Nzg1Mg%3D%3D.3-ccb7-5&oh=00_AYBm12w3n9vMhCC9BZsj9u0-s9zgoPwDhWKG8R8-Ky_irw&oe=6735F92E&_nc_sid=7a9f4b',
//         width: 720,
//         height: 440
//       },
//       {
//         description: 'Hoy en nuestro concierto compartido con la @orquestaunahur un placer haber recibido tan grato publico. Una jornada mas que hermosa!! Gracias!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/449477608_504244541931519_6015400470230567157_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDg4MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1722Z3Prvi4Q7kNvgGnv00H&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQwMTQxNjAxNTI2NDA5ODM5Mg%3D%3D.3-ccb7-5&oh=00_AYCOxKKl1DdYL_M4SROBEUAW6JdNFSaw8eqPxXLAc1wlyA&oe=6735FFFB&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 880
//       },
//       {
//         description: 'Sos cantante, te gusta cantar en coro? Te estamos esperando. Escribinos y sumate a este hermoso coro!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/449211475_283871218081432_2469400466463063991_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=1BMwFYkObGsQ7kNvgGT-Tpw&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5ODYxNjE2MDE0MjM5OTE0Mw%3D%3D.3-ccb7-5&oh=00_AYAxgE7Je_Kr6kC_puCmMpmKrbmNg7ppLazxJKa5kHPkGg&oe=67361DF6&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/448581116_1412273393501768_3039597981394697334_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDEuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=eYYqhTjVasoQ7kNvgGQbzVK&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDYxNjg3Mzk1OTQ1Nw%3D%3D.3-ccb7-5&oh=00_AYABvrwhW9CVGrhXbipRpTkIhJjRUL4_MRhFM5XJv8KfnA&oe=67362749&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1801
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/448557361_1431771637701598_2400037194725774596_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Yr-ntJHbbqMQ7kNvgEDxei5&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDYxNjUyMTc5NzIxMg%3D%3D.3-ccb7-5&oh=00_AYBkuLVLkbViB_Wv4QGXgNsGiMYGYjQ_A6da0z0n3_UT1w&oe=6735FBAE&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1800
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448584145_1044366130443498_5794132637370605249_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=k-BKi_rJyNsQ7kNvgG-bCKY&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDYxNjYwNTQ2MjEyMQ%3D%3D.3-ccb7-5&oh=00_AYAyRm786RJHN7tEzKEnte7jDAeo7Ij_8Gt_grjhj763rA&oe=673611BD&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1800
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/448378679_994995935078492_4284924520549919382_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=8uaGZTklF-MQ7kNvgG6qqYX&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDYxNjUyMTY5NTcwNg%3D%3D.3-ccb7-5&oh=00_AYADWplqzksKZElxe1xu2NfUELZGNSsFgZ9aDm5Q-SFf3g&oe=673600C5&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1800
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448544555_1015516326572118_2458663572733339414_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NDA2LnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=yPmE-JTQZbYQ7kNvgFC98qW&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDM2NjY4MzgwMjU5NQ%3D%3D.3-ccb7-5&oh=00_AYAVHVPQ1VTB9Vj_4ZcgKlesSN-I7xpe1CzlveCjQYRm1A&oe=67361AFB&_nc_sid=7a9f4b',
//         width: 720,
//         height: 406
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448510298_474227958312748_2035321323339591431_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NDA2LnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Tnv0HTCk3F8Q7kNvgH_ZB_r&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDQ1OTg4MTI5MzY4Mw%3D%3D.3-ccb7-5&oh=00_AYDIyAsT2_lKH_xb0H84bCCohooM3mydeLteQiAkYYdx7Q&oe=6736071B&_nc_sid=7a9f4b',
//         width: 720,
//         height: 406
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448541488_1596909524431871_8537063945616777285_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=XXiIUbw9NJgQ7kNvgFB7TYS&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDYxNjU1NTEzNDIwMA%3D%3D.3-ccb7-5&oh=00_AYBFbYutikP3Fylc5WftQBpuP9VkyEwqXA9TffcRSjSgZw&oe=6736040F&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1800
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448552549_772759941609936_2308291988791040775_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=9eUw8YBa7tYQ7kNvgE1SNcE&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDYxNjU5NzIzMDIzNw%3D%3D.3-ccb7-5&oh=00_AYCywDM8lscoLINv3FHclgNhdyJ6LdujkMqi-oD94ef7Jw&oe=6735F2D9&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1800
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448417752_1181205843062214_5945014906645236688_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=lA2E-CrRX28Q7kNvgEC50HG&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDYxNjYxMzkwNTQ0NQ%3D%3D.3-ccb7-5&oh=00_AYCYJFoVylldtRNhgBqIeYtHkqgYfjnEEkRZsgtkuR_oCA&oe=67360939&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1800
//       },
//       {
//         description: 'Imágenes de ayer 15 de junio, en el ciclo coral Resplandor que se llevo a cabo en el centro cultural marechal. Gracias al maestro @diegoalfredo_perez  por invitarnos. Un bellísimo encuentro. Gracias al publico que nos acompaña siempre!\n' +
//           '@culturahurlingham',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/448337382_1193503961662377_6558814130612494568_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ySBtMvRyw_kQ7kNvgHv9cLS&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM5MTgzNDYxNjU1NTM0MjczMg%3D%3D.3-ccb7-5&oh=00_AYA2Ui2PtzV3eAlb6OlWg39wYiD7uaY3iZfIXDOhsLLTWg&oe=673625E6&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1800
//       },
//       {
//         description: 'El próximo sábado 15 de junio 18h estaremos en este ciclo, en el centro cultural Leopoldo Marechal. Tesei. Toda la info en el flyer!!\n' +
//           'Te esperemos!!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448158684_308589695654523_6434461924002803607_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=vrc9gvRHO78Q7kNvgEmxGAR&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4NzUyOTE0MDE2MjI1NDQ4Ng%3D%3D.3-ccb7-5&oh=00_AYDxVZ-AngD7jHxX3uNFUlXIhSPVpTdBgFK6KdKZ-Jdq0g&oe=6736206E&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 1080
//       },
//       {
//         description: 'Foto final del concierto. Encuentro coral organizado por @indecorus1',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448172254_477440418151863_1741988344814388283_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4NjQwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Z9RzOk4B9tAQ7kNvgFwIQfe&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4NzQzOTUyNTk5NjcxOTMyNg%3D%3D.3-ccb7-5&oh=00_AYAeE3quVEaz7XnyPsqy6IxCqy0n8WwjpERIGpmmVPpsHA&oe=67361415&_nc_sid=7a9f4b',
//         width: 640,
//         height: 640
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/448174126_481122577706839_5153025790468146239_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=f6Jho3dCDdUQ7kNvgEL5bEK&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzI0ODM4NzIyOQ%3D%3D.3-ccb7-5&oh=00_AYDhWfIZFQZETIafBoAj-qu9IeV67i3yBm1grcioWgjt1w&oe=67362947&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1080
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/448176802_2630876777090395_3537923099149466424_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=WCOB2vcEJpEQ7kNvgGnwewd&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzI0MDA0NDczMg%3D%3D.3-ccb7-5&oh=00_AYAjMdz8UxteQ0IPTzC6aitTLJMT8v6zbuclHO0x9cAVJQ&oe=67362291&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1080
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448098333_1118726419361715_2809807212622253107_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Z9tbVi_lwPQQ7kNvgFl-mRO&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzIzMTY3NDIxNQ%3D%3D.3-ccb7-5&oh=00_AYDTWJ_DS2I9JbIG4hBspPh1XSjAs--FNNeQeRKfM1X-WA&oe=6736190F&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1080
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/447975733_1385946778756056_8349039948866363779_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTk3eDg5OS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=-Yq2WEs6_74Q7kNvgFrMBrg&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzI3MzY2Nzk5Nw%3D%3D.3-ccb7-5&oh=00_AYABHDuppZp7Qc2pYUnZRkAsWrmIvhLyLVZGcab6tnpLig&oe=67362409&_nc_sid=7a9f4b',
//         width: 1197,
//         height: 899
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448144523_1671909833546922_3201443650295051056_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTk5eDg5OS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=-lNbF0hXpbIQ7kNvgFSjCCI&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzIyMzA5NjQ4NQ%3D%3D.3-ccb7-5&oh=00_AYBpEVFJuxJ96tccXuOwhD5tsvDmAobK8gdzgCzALWbDTg&oe=673615F9&_nc_sid=7a9f4b',
//         width: 1199,
//         height: 899
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448051059_386518994403183_4933487563717971483_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=3jvYNNuayUEQ7kNvgFuDiFG&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzIzMTU4ODIwMA%3D%3D.3-ccb7-5&oh=00_AYBKaj2yZxZr5elV1Wog8O6RmTkuhhyKLLf_2ZqsXG8VZw&oe=6735FCB4&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1080
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448052866_1442503429754464_5058265273326417326_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTk5eDg5OS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=R-1ww1Znau4Q7kNvgGXECSv&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzIyMzI1ODE0NA%3D%3D.3-ccb7-5&oh=00_AYCm1qqAS_Wjy_NntuwI7s_oPZoukrPI4SEFXu-STkP1rQ&oe=67360FAA&_nc_sid=7a9f4b',
//         width: 1199,
//         height: 899
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448159452_1499834720887045_6731284722349199025_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi40ODB4MzYwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=utc0I0kht4sQ7kNvgExSKvw&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzYxNzIxMjU5NzQwOA%3D%3D.3-ccb7-5&oh=00_AYC7u072DzM-29WwWvnfBRWIwOmM2zybDclLqGwm6QoxwQ&oe=67360E0F&_nc_sid=7a9f4b',
//         width: 480,
//         height: 360
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/448177772_388058084242012_2934699904538074692_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=QS0wy1wBGVoQ7kNvgHaT2IG&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzI4MjA1NjI4Ng%3D%3D.3-ccb7-5&oh=00_AYBYk8o-IkDldleqLM585k0LecojQ0T3EfxYwuIMAlUAFQ&oe=67361ACA&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1080
//       },
//       {
//         description: 'Algunas imágenes del encuentro con @indecorus y @ccvoxluminis \n' +
//           'Hermosa música coral se vivio!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/448092516_1189202052081091_3957914271907222582_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTk5eDg5OS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=tz6BsnSJ-6YQ7kNvgEy2zQv&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4Njk3NzY3MzIzOTk3MTM0MQ%3D%3D.3-ccb7-5&oh=00_AYD_Q82HOrAgjJ4dvEDNB434X_CSHqeSMuh9MG8jTVX2MA&oe=67360665&_nc_sid=7a9f4b',
//         width: 1199,
//         height: 899
//       },
//       {
//         description: 'El próximo Domingo estamos en este hermoso encuentro coral en morón, junto a @indecorus1 y @ccvoxluminis toda la info en el flyer! Tesperamos!!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/447796791_1133356034592233_5435413289123074265_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=eEeEgcH5WrIQ7kNvgH7B11Y&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM4NDEwOTI0MDI2NTU5MDIxOQ%3D%3D.3-ccb7-5&oh=00_AYAIKPijdVqK3o-IrI4zuWo6cqc0YRfZLpJ9rNDp-a9-XA&oe=67362411&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1800
//       },
//       {
//         description: '',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/441674665_312534538543192_3137175190937076872_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45ODR4MTIzMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=lh0XIlqpOWYQ7kNvgFV5VCa&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTUwMDk3MTI4NjE2NTk0MA%3D%3D.3-ccb7-5&oh=00_AYDcTtuES0rhFzX7yhvMAj_7dEaSMXk4mHFFbPNLtnDHew&oe=6735FB68&_nc_sid=7a9f4b',
//         width: 984,
//         height: 1230
//       },
//       {
//         description: '',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/441514878_738464201832426_4909864070243557082_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45OTN4MTI0MS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=734jDgK9hl0Q7kNvgFLFZSi&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTUwMDk3MTI2OTQ3Nzk1OA%3D%3D.3-ccb7-5&oh=00_AYD2SNzMGFWDihPOlGAZ-n_cU7yyx2hT_MfwJ6xtulZ2JA&oe=6735FE2C&_nc_sid=7a9f4b',
//         width: 993,
//         height: 1241
//       },
//       {
//         description: '',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/441781428_797021328687994_7505364448259377040_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45OTd4MTI0Ni5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=k3xPy3iiufYQ7kNvgEu0bva&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTUwMDk3MTI4NjMwOTA2Nw%3D%3D.3-ccb7-5&oh=00_AYB0QNhYLhZbX5QI4QFgUYQyt498dHFj8FwvdU2oJfuk3Q&oe=67361FD5&_nc_sid=7a9f4b',
//         width: 997,
//         height: 1246
//       },
//       {
//         description: '',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/441371365_429649246339837_6983490573504319351_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=jfdNi_-KGBYQ7kNvgEuGHFl&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTUwMDgyOTI4Mzk3NzczNg%3D%3D.3-ccb7-5&oh=00_AYB_Zhmq_eWDldXSB0xYmxp-AomnwCERfYrmarirsYjQAQ&oe=673603CA&_nc_sid=7a9f4b',
//         width: 720,
//         height: 900
//       },
//       {
//         description: '',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/441538348_420727954076683_579432204175716287_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45MDB4MTEyNS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=sI3A7innjNYQ7kNvgHMLG0Z&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTUwMDk3MTI2OTM3NTA2Nw%3D%3D.3-ccb7-5&oh=00_AYAI2zwJJiTTo8LOU2YkPOpsTBjqm-8POSm4tWoqbOovkg&oe=6736255D&_nc_sid=7a9f4b',
//         width: 900,
//         height: 1125
//       },
//       {
//         description: '',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/441606247_1511931836204722_7043750635897372284_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=t0YdzpZrbSwQ7kNvgHNg559&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTUwMDg3Nzg4NzQzMTYwMA%3D%3D.3-ccb7-5&oh=00_AYBjenjo7DIzpPXM5WD3DK5UE1REhopXk1g2CUOr-v1dww&oe=67360E24&_nc_sid=7a9f4b',
//         width: 720,
//         height: 900
//       },
//       {
//         description: '',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/441605188_987905796383605_2174202829263023982_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi40ODB4NjAwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=BOWRjMQmDHgQ7kNvgHHmavm&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTUwMDkyMjMwNTIxOTgxNw%3D%3D.3-ccb7-5&oh=00_AYAqS7MAwybjhxJ35rXudpqYE7Mk1BWwB6yjzmr8M0XjkA&oe=6736071B&_nc_sid=7a9f4b',
//         width: 480,
//         height: 600
//       },
//       {
//         description: '',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/441505512_441950095083583_5272811450904924247_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=3t_0jPX-EvoQ7kNvgElmPn2&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM2MTUwMDk3MTI4NjM3MDMwMg%3D%3D.3-ccb7-5&oh=00_AYAAr79xxMsgmYZVN1nwl5TRLfZT9Fj38CokR5r9uBvj7g&oe=67361311&_nc_sid=7a9f4b',
//         width: 720,
//         height: 900
//       },
//       {
//         description: 'El sábado 4 de mayo brindaremos un concierto compartido en la primera iglesia metodista. Estan todos invitados. Te esperamos!\n' +
//           'Info en el flyer.\n' +
//           '@unahurlingham',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/440756736_3686703888285758_3077400508083390321_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDExeDEwMTEuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=n-Iu282HAOEQ7kNvgE9RE2O&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzM1Njk4NDAxMDIwMTA2MTU0NA%3D%3D.3-ccb7-5&oh=00_AYASdLi4PCaLhMioF6ueVCdBHQLLtNyJEObjvJLiICtjAQ&oe=67361516&_nc_sid=7a9f4b',
//         width: 1011,
//         height: 1011
//       },
//       {
//         description: 'Hoy fue el primer dia de encuentro para lxs inscriptxs al coro. Impresionante la asistencia de inscriptos  y participación. Seguimos sumando en la proxima semana a quienes se inscribieron al coro. Si deseas sumarte escribinos por privado!!!\n' +
//           'PH. @lalydobler',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/433239340_441461838319639_2348972121373576440_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41NjZ4NDUyLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=asNfI2kR73gQ7kNvgFwk4jf&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzMyNTMxMDE5MjA4Mzg0NjU0MQ%3D%3D.3-ccb7-5&oh=00_AYARJy0v8Up5UzDuo8G86nzrQjhhCbYh2eE4zHu8Q9g9FA&oe=673617FB&_nc_sid=7a9f4b',
//         width: 566,
//         height: 452
//       },
//       {
//         description: 'Hoy fue el primer dia de encuentro para lxs inscriptxs al coro. Impresionante la asistencia de inscriptos  y participación. Seguimos sumando en la proxima semana a quienes se inscribieron al coro. Si deseas sumarte escribinos por privado!!!\n' +
//           'PH. @lalydobler',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/433411895_727369979543146_9187495266431208147_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi41Njd4NDUyLnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=2p_FZ6s32aEQ7kNvgEBhGGa&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzMyNTMxMDE5MjA4NDAxMTgxNg%3D%3D.3-ccb7-5&oh=00_AYAKcoW1GnyEtMI9omdQd_nv5UN2VDM6uz3wyVjPOTrSgw&oe=6735F965&_nc_sid=7a9f4b',
//         width: 567,
//         height: 452
//       },
//       {
//         description: 'Queremos agradecerles a todas y todos, por habernos acompañado durante este 2023, a todas las personas que integran el coro unahur, gracias!!. Desearles unas felices fiestas y un gran 2024 muy luminoso!!\n' +
//           'Nos vemos pronto!!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/412302986_749378287082254_4050993614959672458_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=uGlTajrbGUEQ7kNvgGA11zA&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI2MzU1Njk0OTU2NzM1NDQ2MA%3D%3D.3-ccb7-5&oh=00_AYDxt3UL384Imy492v3nJNBM3YLK0aIGErCoOtiurEYbLw&oe=67360086&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1440
//       },
//       {
//         description: 'Ayer fue nuestro cierre del año, y lo celebramos increiblemente bien. Gracias a todos y todas las que integran este maravilloso coro, tuvimos un gran año musical, vamos por un mejor 2024.\n' +
//           'Aca una  imagen con una parte del coro, y el video de la obra Reyes Magos de Ariel Ramirez \n' +
//           'Gracias!!! Felicidades!!!\n' +
//           'Ph @josephs_1',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/412043187_1303078790354488_2329304741143541237_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDkxOC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=1wPbLZb4tz0Q7kNvgGjJ9L3&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI1OTkzNDU5NzUyNzg0NDUzOQ%3D%3D.3-ccb7-5&oh=00_AYD_O5wGFt3-QrXRlRAH6rgCNrLV-aJeprNH559Z1mCPgA&oe=67361DB0&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 918
//       },
//       {
//         description: 'Ayer fue nuestro cierre del año, y lo celebramos increiblemente bien. Gracias a todos y todas las que integran este maravilloso coro, tuvimos un gran año musical, vamos por un mejor 2024.\n' +
//           'Aca una  imagen con una parte del coro, y el video de la obra Reyes Magos de Ariel Ramirez \n' +
//           'Gracias!!! Felicidades!!!\n' +
//           'Ph @josephs_1',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/411478794_713072337197583_2510215856346143469_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NDYwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=k9VcCOwNcM4Q7kNvgEiK_qt&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI1OTkzNDM3NTY1NzM3ODU1NQ%3D%3D.3-ccb7-5&oh=00_AYCaMIzqjjprtVfjvHRbPEQdUUXcsNGOVeA88pfWAaC8Hw&oe=67360AD6&_nc_sid=7a9f4b',
//         width: 720,
//         height: 460
//       },
//       {
//         description: '24 de noviembre en @catedraldemoron \nSignore delle cime',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/409699405_1167334484102970_8314997573171419819_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi40MTB4MjMxLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=A_Sksv60g9MQ7kNvgGO1GEI&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI1NjE3MjMzODc1OTE1NzU0NQ%3D%3D.3-ccb7-5&oh=00_AYAU-rlyxo_mgXhaXzCwytH5vKE-S36lyvSnEsRmol30iA&oe=6735F686&_nc_sid=7a9f4b',
//         width: 410,
//         height: 231
//       },
//       {
//         description: 'Episodio 1 concierto en @catedraldemoron 24 de Noviembre',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/407742529_227323343717025_4077732904303441234_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi40MTB4MjMxLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Jn3HlXsMGx4Q7kNvgFnxVV9&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI1MTM5MDk3NzIzNzU2MzM2NQ%3D%3D.3-ccb7-5&oh=00_AYDuAZj07CLKREnusL-k9uUVJl_rhZKg_TOre51awN66MA&oe=6735FC5B&_nc_sid=7a9f4b',
//         width: 410,
//         height: 231
//       },
//       {
//         description: 'Imagen de ayer 1 de diciembre en el festival de graduados y graduadas.',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/404584978_334012562582271_4894923350170922997_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMjgweDEyODAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Mqo2uLygP-8Q7kNvgHBKAdl&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0OTI2NzY0MTU5OTIxNDEzMg%3D%3D.3-ccb7-5&oh=00_AYAdRSf6O-j8BuD90q8xuaVUJ8TQPwdHXDh7-t9rU0J9hg&oe=67360D8C&_nc_sid=7a9f4b',
//         width: 1280,
//         height: 1280
//       },
//       {
//         description: 'Foto con el @corodemujeresdemoron  el pasado 25N en el último encuentro coral del año. Gracias!!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/405520816_763446672277423_2515368594539833827_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDg2Ny5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=C_j2xVkmwAgQ7kNvgG7UAFI&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0NzYyNDA5OTkxMDIwMzcyMw%3D%3D.3-ccb7-5&oh=00_AYDzTvNIZRP24IateZdQj_K0jilqqeR9uu9Ww5HnnBrDiw&oe=6735F5D0&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 867
//       },
//       {
//         description: 'Imagenes del concierto 24N organizado por nuestro Director @mattsemart en @catedraldemoron. Una noche maravillosa llena de magia. Queremos agradecer a el profe @leandrojavierparma  por enseñarnos y dirigirnos en la percusión, a @claudiaczihak por su performance en el arpa, a @hernan.coniglio por su aporte musical en Guitarra y a @josephs_1 por su registro del evento.\n' +
//           'Agradecer a Facundo Domínguez por el registro que esta preparando del evento. Gracias @lalydobler por la locucion y coordinar. Gracias a.la gente de la Catedral de Morón y a todo el público! Gracias!!!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/404273095_359150899975280_2405019742929431601_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44NzB4NDU2LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=n3b-IOTTpAkQ7kNvgGP3fzA&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0NjExNDkzMDY4Njk4NjMxOQ%3D%3D.3-ccb7-5&oh=00_AYAWKgLnsuNb64Id1YFYbvkyzUXWgxJYnB-ph-a-2xfjuw&oe=6736080C&_nc_sid=7a9f4b',
//         width: 870,
//         height: 456
//       },
//       {
//         description: 'Imagenes del concierto 24N organizado por nuestro Director @mattsemart en @catedraldemoron. Una noche maravillosa llena de magia. Queremos agradecer a el profe @leandrojavierparma  por enseñarnos y dirigirnos en la percusión, a @claudiaczihak por su performance en el arpa, a @hernan.coniglio por su aporte musical en Guitarra y a @josephs_1 por su registro del evento.\n' +
//           'Agradecer a Facundo Domínguez por el registro que esta preparando del evento. Gracias @lalydobler por la locucion y coordinar. Gracias a.la gente de la Catedral de Morón y a todo el público! Gracias!!!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/404295504_1248731339853469_8469095537786121422_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDU5MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=4LBDn_c60IcQ7kNvgFCtLOB&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0NjExNDkzMDY3MDMyNjYxOA%3D%3D.3-ccb7-5&oh=00_AYC2f45LViIVEporoe-ksJLx6_NYpGKgAwyjyR4gME40bg&oe=67360B27&_nc_sid=7a9f4b',
//         width: 1080,
//         height: 590
//       },
//       {
//         description: 'Imagenes del concierto 24N organizado por nuestro Director @mattsemart en @catedraldemoron. Una noche maravillosa llena de magia. Queremos agradecer a el profe @leandrojavierparma  por enseñarnos y dirigirnos en la percusión, a @claudiaczihak por su performance en el arpa, a @hernan.coniglio por su aporte musical en Guitarra y a @josephs_1 por su registro del evento.\n' +
//           'Agradecer a Facundo Domínguez por el registro que esta preparando del evento. Gracias @lalydobler por la locucion y coordinar. Gracias a.la gente de la Catedral de Morón y a todo el público! Gracias!!!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/404594461_1013444653106858_8080891645217323953_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45Mjh4NDg2LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=3sdpUpefn5QQ7kNvgH6E_if&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0NjExNDkzMDY4NzA1NjMzMw%3D%3D.3-ccb7-5&oh=00_AYB_IDswqeLqA3jhA4dvXY8gisZtfvDB5W9VmhWDZiGo3w&oe=67361272&_nc_sid=7a9f4b',
//         width: 928,
//         height: 486
//       },
//       {
//         description: 'Imagenes del concierto 24N organizado por nuestro Director @mattsemart en @catedraldemoron. Una noche maravillosa llena de magia. Queremos agradecer a el profe @leandrojavierparma  por enseñarnos y dirigirnos en la percusión, a @claudiaczihak por su performance en el arpa, a @hernan.coniglio por su aporte musical en Guitarra y a @josephs_1 por su registro del evento.\n' +
//           'Agradecer a Facundo Domínguez por el registro que esta preparando del evento. Gracias @lalydobler por la locucion y coordinar. Gracias a.la gente de la Catedral de Morón y a todo el público! Gracias!!!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/404601502_337533305639519_2128591593372547760_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45MTR4NDc5LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=x6m_X2GP_a8Q7kNvgHhAT13&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0NjExNDkzMDg4ODM4NDA3Mg%3D%3D.3-ccb7-5&oh=00_AYB14mUES9mNzy_l_cSNr-uW2sw6MWNhJJSQrHN3DSVfAQ&oe=67362997&_nc_sid=7a9f4b',
//         width: 914,
//         height: 479
//       },
//       {
//         description: 'Imagenes del concierto 24N organizado por nuestro Director @mattsemart en @catedraldemoron. Una noche maravillosa llena de magia. Queremos agradecer a el profe @leandrojavierparma  por enseñarnos y dirigirnos en la percusión, a @claudiaczihak por su performance en el arpa, a @hernan.coniglio por su aporte musical en Guitarra y a @josephs_1 por su registro del evento.\n' +
//           'Agradecer a Facundo Domínguez por el registro que esta preparando del evento. Gracias @lalydobler por la locucion y coordinar. Gracias a.la gente de la Catedral de Morón y a todo el público! Gracias!!!!',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/404571907_1007049327260127_7050959047737454076_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTAyeDU3Ni5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1Ag3f-yIrIYQ7kNvgHZp2Ki&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0NjExNDkzMDY3ODgwNDYyNA%3D%3D.3-ccb7-5&oh=00_AYBtPK7uwFsvQDt-omlS80RT1MZ2eobubZhHNPSQi73U6Q&oe=6735FC9C&_nc_sid=7a9f4b',
//         width: 1102,
//         height: 576
//       },
//       {
//         description: 'Imagenes del concierto 24N organizado por nuestro Director @mattsemart en @catedraldemoron. Una noche maravillosa llena de magia. Queremos agradecer a el profe @leandrojavierparma  por enseñarnos y dirigirnos en la percusión, a @claudiaczihak por su performance en el arpa, a @hernan.coniglio por su aporte musical en Guitarra y a @josephs_1 por su registro del evento.\n' +
//           'Agradecer a Facundo Domínguez por el registro que esta preparando del evento. Gracias @lalydobler por la locucion y coordinar. Gracias a.la gente de la Catedral de Morón y a todo el público! Gracias!!!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/404949882_1576715696406032_3337481653199145686_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDc1NS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=oqUBAqWm4tMQ7kNvgFDmky-&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0NjExNDkzMDY4NzE1MDExNQ%3D%3D.3-ccb7-5&oh=00_AYB2ouEn0O__sGygo6irCvvrgQ6y0cY6habpseadPpqOfQ&oe=67361E2F&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 755
//       },
//       {
//         description: 'Imagenes del concierto 24N organizado por nuestro Director @mattsemart en @catedraldemoron. Una noche maravillosa llena de magia. Queremos agradecer a el profe @leandrojavierparma  por enseñarnos y dirigirnos en la percusión, a @claudiaczihak por su performance en el arpa, a @hernan.coniglio por su aporte musical en Guitarra y a @josephs_1 por su registro del evento.\n' +
//           'Agradecer a Facundo Domínguez por el registro que esta preparando del evento. Gracias @lalydobler por la locucion y coordinar. Gracias a.la gente de la Catedral de Morón y a todo el público! Gracias!!!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/404579304_717072403818362_114473635453329755_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDk5eDU3Ni5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=yf9GvYI2UeUQ7kNvgFhYaQU&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0NjExNDkzMDY4NzA0NjM2Mg%3D%3D.3-ccb7-5&oh=00_AYBD83i4HvaUWh1rIoyXc2nAUjlLtFENKtSaX-1Z0d7USg&oe=6735F488&_nc_sid=7a9f4b',
//         width: 1099,
//         height: 576
//       },
//       {
//         description: 'El sabado 25 tendremos un bellisimo encuentro coral junto al @corodemujeresdemoron  los y las esperamos!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/403887125_849068457220953_4118168673771196237_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDEwMjQuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=lf7FOTNakpkQ7kNvgFX_RI2&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzI0MjUxMTIzNzg5MDQ1Nzk3Mg%3D%3D.3-ccb7-5&oh=00_AYDAeskBnzC8MOGEGjdrRE_IUKdHmXW2bA3c27gWM9RpXQ&oe=6735F663&_nc_sid=7a9f4b',
//         width: 1024,
//         height: 1024
//       },
//       {
//         description: 'El 24/11 20h estaremos en La Catedral de Morón compartiendo concierto con los coros que dirige nuestro maestro @mattsemart \n' +
//           'Los/aesperamos!!!',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/402271074_346670024544823_2283012261041266366_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDE0eDE3Njguc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=hjnlMjamIysQ7kNvgGZ1v6d&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIzNjc1MDY4MTI0NTYwODYxMg%3D%3D.3-ccb7-5&oh=00_AYC1Na5kcRCPFCzKH8F2M9LhIIVVJsq5Di7OUQQyK0PNpg&oe=6735F337&_nc_sid=7a9f4b',
//         width: 1414,
//         height: 1768
//       },
//       {
//         description: 'Ensayos con seres del bien. Los ama su director @mattsemart',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/398602212_713552647327190_3519235345815880278_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDgxMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=f6gq985s_-IQ7kNvgF4tbHC&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIyODk2MDg3OTU3NDE0ODA2Mg%3D%3D.3-ccb7-5&oh=00_AYDhLVVWCmfbhj6muNFNF69W8ZTdBah-7E7wra42rNTvdA&oe=673609AE&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 810
//       },
//       {
//         description: 'Ensayos con seres del bien. Los ama su director @mattsemart',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/398938675_1392526578281660_3522299651698812565_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDgxMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=r9JgwJv69x8Q7kNvgErCvAi&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIyODk2MDg3OTQ5ODYzNTMwMw%3D%3D.3-ccb7-5&oh=00_AYAyu_XqOTP_WVx3uDNXJsS2crsWXgGVeaE-zhsp3Z3_IQ&oe=673600B4&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 810
//       },
//       {
//         description: 'Ensayos con seres del bien. Los ama su director @mattsemart',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/398765700_1414601155826559_6895455307122298284_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODEuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=MQ69o3wBKNgQ7kNvgFAUm5z&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIyODk2MDg3OTUzMjI3MTU4Ng%3D%3D.3-ccb7-5&oh=00_AYA1lesPsaOblNw8ZEmyii2q-Zwr3qg2QYE8rUqhW26XUg&oe=6735F4B8&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 1081
//       },
//       {
//         description: 'Ensayos con seres del bien. Los ama su director @mattsemart',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/398551955_800685451830501_4960701745274599083_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDgxMC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=c_0k6veSbuIQ7kNvgEop5zF&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIyODk2MDg3OTUxNTMyMTk3Nw%3D%3D.3-ccb7-5&oh=00_AYCno6pgCpIlvK6eGOryFM88GqykIsR1SPzx9-z8NYRNAQ&oe=6735FAAA&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 810
//       },
//       {
//         description: 'Ensayos con seres del bien. Los ama su director @mattsemart',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/398993033_642666664717312_1413099221085483412_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi40ODB4MjcwLnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=IKvLKBgntNMQ7kNvgHiPCuJ&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIyODk2MDgxODAzNTM3NTgzNA%3D%3D.3-ccb7-5&oh=00_AYDSZrGbotKQyUiHRiLntaqVkadZDVcBipVP3WrcB4gJRQ&oe=67361FF7&_nc_sid=7a9f4b',
//         width: 480,
//         height: 270
//       },
//       {
//         description: 'Ensayos con seres del bien. Los ama su director @mattsemart',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/398912247_323800840291535_7755310981186124660_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDgwOS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=W1pKIWy0m-IQ7kNvgHmIiaO&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIyODk2MDg3OTUwNzEzMDYxMA%3D%3D.3-ccb7-5&oh=00_AYBpEEB2PWAinEx--doWX0YvKrsBUSvK83KZzzAjBkvdFQ&oe=673625D4&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 809
//       },
//       {
//         description: 'Ensayos con seres del bien. Los ama su director @mattsemart',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/398762124_225089733924305_6397553279114764373_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDgzMS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=92YrpuiHLkAQ7kNvgEUaB-Z&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIyODk2MDg3OTUzMjA4MzE4Mw%3D%3D.3-ccb7-5&oh=00_AYDNC42tTqWRzhqzGMN_w7xWS9Q7pnnfvEpdIA7CC6CcOg&oe=6736094A&_nc_sid=7a9f4b',
//         width: 1440,
//         height: 831
//       },
//       {
//         description: 'El evento coral del pasado 30 de septiembre en @unahurlingham gracias @josephs_1',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/405203624_313491094882783_8285446959479134627_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi40MTB4MzE3LnNkci5mMjkzNTAuZGVmYXVsdF9jb3Zlcl9mcmFtZSJ9&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=6VLwzdQ3TKkQ7kNvgFDrb0X&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIwNDc5Njc4OTYwNDI1NDc2MA%3D%3D.3-ccb7-5&oh=00_AYBNdgnGYsF7m-XKKwLc36uUsqpbZ-2LH1bIfTcGOGcOGw&oe=67361A76&_nc_sid=7a9f4b',
//         width: 410,
//         height: 317
//       },
//       {
//         description: 'Previa de concierto 30 de septiembre\n#coro',
//         src: 'https://instagram.faep6-2.fna.fbcdn.net/v/t51.29350-15/385838318_1473704873409057_4050338615132509762_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45MDB4MTEyNS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=3wxq5vHIVUYQ7kNvgFwMfn7&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIwNDE3Nzg0MTYyMzQzNjE2Mw%3D%3D.3-ccb7-5&oh=00_AYCkovXks0GIuUwk9ncF_7yHULB9w6d6x5b2sr0JLcJpgw&oe=67361D5D&_nc_sid=7a9f4b',
//         width: 900,
//         height: 1125
//       },
//       {
//         description: 'Previa de concierto 30 de septiembre\n#coro',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/385574104_701948685127153_7554301618155596351_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45MDB4MTEyNS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Q6AbNupl_2MQ7kNvgFE_Mnk&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIwNDE3Nzg0MTY0MDMxMTQ0OQ%3D%3D.3-ccb7-5&oh=00_AYCePCXjHAorWqyU0Zv68agsBi-98E9yjEOK8vqO8wHTyA&oe=67362880&_nc_sid=7a9f4b',
//         width: 900,
//         height: 1125
//       },
//       {
//         description: 'Previa de concierto 30 de septiembre\n#coro',
//         src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/383310160_699363314990207_9030632123516369004_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45MDB4MTEyNS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=OuNExVzFcvsQ7kNvgE1Ewra&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIwNDE3Nzg0MTY1NzA1MTQ4NA%3D%3D.3-ccb7-5&oh=00_AYCJ3sMxuS44urawyOfFopGJGTT6L9M7T7M9Dz7E0Q0oNg&oe=6735FD8C&_nc_sid=7a9f4b',
//         width: 900,
//         height: 1125
//       }
// ];
export const images: Image[] = [
    {
        description: 'A beautiful sunset over the mountains.',
        src: 'https://images.prismic.io/artsphere/Zo1Bmx5LeNNTw8bj_CARL-DINER-ARTSPHERE-BEAUTY-MAKEUP-10.jpg?rect=0%2C0%2C1200%2C1500&w=752&h=940&q=75&dpr=1',
        width: 752,
        height: 940
    },
    {
      description: 'Previa de concierto 30 de septiembre\n#coro',
      src: 'https://instagram.faep6-1.fna.fbcdn.net/v/t51.29350-15/383310160_699363314990207_9030632123516369004_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45MDB4MTEyNS5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep6-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=OuNExVzFcvsQ7kNvgE1Ewra&_nc_gid=171f8acb3083427f96d9473e1387fb23&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzIwNDE3Nzg0MTY1NzA1MTQ4NA%3D%3D.3-ccb7-5&oh=00_AYCJ3sMxuS44urawyOfFopGJGTT6L9M7T7M9Dz7E0Q0oNg&oe=6735FD8C&_nc_sid=7a9f4b',
      width: 900,
      height: 1125
    },
    {
        description: 'A lush green forest with tall trees.',
        src: 'https://images.prismic.io/artsphere/Zo1Bnh5LeNNTw8bn_CARL-DINER-ARTSPHERE-BEAUTY-MAKEUP-13.jpg?rect=0%2C0%2C1200%2C1500&w=752&h=940&q=75&dpr=1',
        width: 752,
        height: 850
    },
    {
        description: 'A calm ocean with clear blue water.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/4/img-200.jpg',
        width: 752,
        height: 900
    },
    {
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
        width: 752,
        height: 940
    },
    {
        description: 'A calm ocean with clear blue water.',
        src: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.webp',
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