import './certificates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const certificates = [
    {
        title: "Fundamentos Javascript",
        img: "/certificados/fundamentos-javascript.jpg",
        link: "https://platzi.com/p/danimitad/curso/10266-javascript/diploma/detalle/",
        description: "Platzi",
    },
    {
        title: "Bases de Datos SQL",
        img: "/certificados/sql.jpg",
        link: "https://www.udemy.com/certificate/UC-7f4bca64-4cf6-4df9-81c4-261a43c3b40d/",
        description: "Udemy",
    },
    {
        title: "Fundamentos API REST",
        img: "/certificados/api.jpg",
        link: "https://platzi.com/p/danimitad/curso/2985-api/diploma/detalle/",
        description: "Platzi",
    },
    {
        title: "Curso de WordPress",
        img: "/certificados/wordpress.jpg",
        link: "https://platzi.com/p/danimitad/curso/4194-paginas-web/diploma/detalle/",
        description: "Platzi",
    },
    {
        title: "Diseño de Interfaces",
        img: "/certificados/ui-ux.jpg",
        link: "https://platzi.com/p/danimitad/curso/5184-basico-ui/diploma/detalle/",
        description: "Platzi",
    },
    {
        title: "Curso de Git y GitHub",
        img: "/certificados/git.jpg",
        link: "https://platzi.com/p/danimitad/curso/1557-git-github/diploma/detalle/",
        description: "Platzi",
    },
    {
        title: "Frontend Developer",
        img: "/certificados/frontend.jpg",
        link: "https://platzi.com/p/danimitad/curso/2467-frontend-developer/diploma/detalle/",
        description: "Platzi",
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
                <div className="group">
                    <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    >
                    <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                        <img
                        src={cert.img}
                        alt={cert.title}
                        className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex items-center px-3">
                        <div className="flex-grow">
                            <h4 className="text-2xl font-semibold text-[var(--white)]">
                                {cert.title}
                            </h4>
                            <span className="py-1 text-sm text-[var(--white-icon)]">
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
