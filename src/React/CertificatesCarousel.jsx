import './certificates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certificates = [
    {
        title: "Certificado React",
        img: "../../public/proyectos/mcDonalds.png",
        link: "https://translate.google.com/?sl=en&tl=es&text=degrees&op=translate",
        description: "Prueba",
    },
    {
        title: "Certificado Astro",
        img: "../../public/proyectos/mcDonalds.png",
        link: "https://translate.google.com/?sl=en&tl=es&text=degrees&op=translate",
        description: "Prueba",
    },
    {
        title: "Certificado Tailwind",
        img: "../../public/proyectos/mcDonalds.png",
        link: "https://translate.google.com/?sl=en&tl=es&text=degrees&op=translate",
        description: "Prueba",
    },
    {
        title: "Certificado Node.js",
        img: "../../public/proyectos/mcDonalds.png",
        link: "https://translate.google.com/?sl=en&tl=es&text=degrees&op=translate",
        description: "Prueba",
    },
    {
        title: "Certificado Docker",
        img: "../../public/proyectos/mcDonalds.png",
        link: "https://translate.google.com/?sl=en&tl=es&text=degrees&op=translate",
        description: "Prueba",
    },
];

export default function CertificatesCarousel() {
  return (
    <div className="w-full">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
            768: { slidesPerView: 2, },
            1024: { slidesPerView: 3,},
            }}
            className="custom-swiper"
        >
            {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
                <div class="group">
                    <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block"
                    >
                    <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                        <img
                        src={cert.img}
                        alt={cert.title}
                        class="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="flex items-center px-3">
                        <div class="flex-grow">
                            <h4 class="text-2xl font-semibold text-[var(--white)]">
                                {cert.title}
                            </h4>
                            <span class="py-1 text-sm text-[var(--white-icon)]">
                                {cert.description}
                            </span>
                        </div>
                    </div>
                    </a>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}
