import { CategoryItem } from "@/interfaces"
import { Title } from "./Title"
import { CarreraGridItem } from "./CarreraGridItem";

export const CarrerasGrid = async () => {

  const carreras = [
    {
      id: 1,
      name: "Ingenieria de Sistemas",
      logo: "/images/logosistemas.jpg"
    },
    {
      id: 2,
      name: "Ingenieria Comercial"
    },
    {
      id: 3,
      name: "Administracion de Empresas"
    },
    {
      id: 4,
      name: "Marketing"
    }
  ];

  const options: CategoryItem[] = [
    {
      id: 1,
      image: "/images/logosistemas.jpg",
      icon: '/images/icons/system.png',
      title: 'Sistemas',
      width: 1024,
      height: 680,
      widthIcon: 2400,
      heightIcon: 1105,
    },
    {
      id: 2,
      image: "/images/ingcomercial.jpeg",
      icon: '/images/icons/comercia.png',
      title: 'Comercial',
      width: 1024,
      height: 680,
      widthIcon: 2400,
      heightIcon: 1105,
    },
    {
      id: 3,
      image: "/images/logomarketing.webp",
      icon: '/images/icons/marketing.png',
      title: 'Marketing',
      width: 1024,
      height: 680,
      widthIcon: 2400,
      heightIcon: 1105,
    },
    {
      id: 4,
      image: "/images/logoadmempresas.jpg",
      icon: '/images/icons/Departamento.webp',
      title: 'Administracion de Empresas',
      width: 750,
      height: 500,
      widthIcon: 100,
      heightIcon: 100,
    },
  ];

  return (
    <div className="w-[80%] m-auto pt-16 pb-28">
      <Title title="Búsqueda por carreras" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {
          options.map(value => (
            <CarreraGridItem key={value.id} {...value} />
          ))
        }
      </div>
    </div>
  )
}
