'use client'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { City } from '@/types';
import { Empresa } from '@/types/empresa.type';

export interface empresasDatosContext {
    empresas: Empresa[],
    cities: City[],
    filterBody: any,
    setFilterBody: any,
    setEmpresas: any,
    getSingleEmpresa: any,
}
const empresasContext = createContext({} as empresasDatosContext);

export default function layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <EmpresasProvider>
            <div className="w-[90%] md:w-[80%] m-auto py-4 lg:!mb-10">
                {children}
            </div>
        </EmpresasProvider>
    )
}

export function EmpresasProvider(
    { children }: { children: React.ReactNode }
) {
    const AllEmpresas = [
        {
            "id": 1,
            "city": "Santa Cruz de la Sierra",
            "career": "Ingenieria de Sistemas",
            "companyName": "Tech Solutions",
            "internshipDescription": "Desarrollo de aplicaciones web y mantenimiento de sistemas internos.",
            "availablePositions": 3,
            "requirements": ["Conocimientos en JavaScript y Node.js", "Bases de datos MySQL"],
            "contactEmail": "hr@techsolutionssc.com",
            "stipend": "150 USD/mes",
            "companyLogo": "/images/techsolutions.jpeg",
            "positionsOffered": [
                {
                    "title": "Desarrollador Frontend",
                    "description": "Implementación de interfaces web interactivas utilizando React y TailwindCSS.",
                    "requirements": ["Experiencia con React", "Conocimientos básicos de CSS y diseño responsivo"],
                    "salary": "150 USD/mes",
                    "schedule": "Part-time"
                },
                {
                    "title": "Administrador de Bases de Datos",
                    "description": "Gestión y mantenimiento de bases de datos MySQL para sistemas internos.",
                    "requirements": ["Conocimientos avanzados en MySQL", "Capacidad para optimizar consultas"],
                    "salary": "150 USD/mes",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 2,
            "city": "La Paz",
            "career": "Marketing",
            "companyName": "Creative Minds",
            "internshipDescription": "Apoyo en campañas de marketing digital y redes sociales.",
            "availablePositions": 2,
            "requirements": ["Habilidades en diseño gráfico", "Conocimiento en herramientas como Canva o Photoshop"],
            "contactEmail": "talento@creativemindslp.com",
            "stipend": "120 USD/mes",
            "companyLogo": "/images/creativeminds.jpeg",
            "positionsOffered": [
                {
                    "title": "Community Manager",
                    "description": "Gestión de redes sociales y publicaciones.",
                    "requirements": ["Conocimiento de herramientas de gestión de redes sociales", "Creatividad"],
                    "salary": "120 USD/mes",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 3,
            "city": "Santa Cruz de la Sierra",
            "career": "Administracion de Empresas",
            "companyName": "Business Group",
            "internshipDescription": "Gestión administrativa y apoyo en la planificación estratégica.",
            "availablePositions": 1,
            "requirements": ["Habilidades en Excel", "Buena comunicación"],
            "contactEmail": "internships@businessgroupsc.com",
            "stipend": "No remunerado",
            "companyLogo": "/images/businessgroup.jpg",
            "positionsOffered": [
                {
                    "title": "Asistente Administrativo",
                    "description": "Apoyo en la gestión de documentos y planificación estratégica.",
                    "requirements": ["Manejo avanzado de Excel", "Organización"],
                    "salary": "No remunerado",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 4,
            "city": "La Paz",
            "career": "Ingenieria Comercial",
            "companyName": "Comercial Innovate",
            "internshipDescription": "Análisis de mercado y desarrollo de planes de negocio.",
            "availablePositions": 4,
            "requirements": ["Manejo de herramientas estadísticas", "Capacidad de análisis"],
            "contactEmail": "rrhh@innovatelp.com",
            "stipend": "200 USD/mes",
            "companyLogo": "/images/comercialinnovate.png",
            "positionsOffered": [
                {
                    "title": "Analista de Mercado",
                    "description": "Realización de análisis estadísticos y tendencias.",
                    "requirements": ["Conocimiento en Excel avanzado", "Interpretación de datos"],
                    "salary": "200 USD/mes",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 5,
            "city": "Santa Cruz de la Sierra",
            "career": "Marketing",
            "companyName": "Social Media Boost",
            "internshipDescription": "Gestión de redes sociales y creación de contenido.",
            "availablePositions": 2,
            "requirements": ["Creatividad", "Conocimientos básicos de edición de video"],
            "contactEmail": "careers@smboostsc.com",
            "stipend": "100 USD/mes",
            "companyLogo": "/images/socialmediaboost.jpg",
            "positionsOffered": [
                {
                    "title": "Editor de Contenido",
                    "description": "Creación de contenido visual y edición básica de video.",
                    "requirements": ["Conocimientos en herramientas de edición", "Creatividad"],
                    "salary": "100 USD/mes",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 6,
            "city": "La Paz",
            "career": "Ingenieria de Sistemas",
            "companyName": "Code Factory",
            "internshipDescription": "Desarrollo de software y pruebas de calidad.",
            "availablePositions": 3,
            "requirements": ["Experiencia con lenguajes de programación como Java o Python"],
            "contactEmail": "jobs@codefactorylp.com",
            "stipend": "250 USD/mes",
            "companyLogo": "/images/codefactory.png",
            "positionsOffered": [
                {
                    "title": "QA Tester",
                    "description": "Pruebas de calidad y documentación.",
                    "requirements": ["Conocimientos en herramientas de testing", "Precisión en el trabajo"],
                    "salary": "250 USD/mes",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 7,
            "city": "Santa Cruz de la Sierra",
            "career": "Administracion de Empresas",
            "companyName": "SC Consulting",
            "internshipDescription": "Soporte administrativo en proyectos de consultoría.",
            "availablePositions": 1,
            "requirements": ["Organización y gestión de tiempo", "Habilidades en PowerPoint"],
            "contactEmail": "consulting@sc.com",
            "stipend": "No remunerado",
            "companyLogo": "/images/SCConsulting.png",
            "positionsOffered": [
                {
                    "title": "Asistente de Consultoría",
                    "description": "Elaboración de reportes y soporte administrativo.",
                    "requirements": ["Buen manejo de herramientas de Office", "Organización"],
                    "salary": "No remunerado",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 8,
            "city": "La Paz",
            "career": "Ingenieria Comercial",
            "companyName": "Market Analytics",
            "internshipDescription": "Apoyo en análisis de mercado y desarrollo de informes comerciales.",
            "availablePositions": 2,
            "requirements": ["Habilidad en Excel y Power BI", "Buen manejo de inglés"],
            "contactEmail": "info@marketanalyticslp.com",
            "stipend": "180 USD/mes",
            "companyLogo": "/images/Marketanalytics.png",
            "positionsOffered": [
                {
                    "title": "Analista Junior",
                    "description": "Creación de reportes y análisis de datos comerciales.",
                    "requirements": ["Excel avanzado", "Power BI"],
                    "salary": "180 USD/mes",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 9,
            "city": "Santa Cruz de la Sierra",
            "career": "Marketing",
            "companyName": "Brand Builders",
            "internshipDescription": "Creación de campañas publicitarias y diseño de estrategias de branding.",
            "availablePositions": 3,
            "requirements": ["Capacidad creativa", "Conocimientos en marketing digital"],
            "contactEmail": "jobs@brandbuilderssc.com",
            "stipend": "150 USD/mes",
            "companyLogo": "/images/BrandBuilders.jpeg",
            "positionsOffered": [
                {
                    "title": "Especialista en Branding",
                    "description": "Diseño de estrategias publicitarias.",
                    "requirements": ["Creatividad", "Herramientas de diseño gráfico"],
                    "salary": "150 USD/mes",
                    "schedule": "Part-time"
                }
            ]
        },
        {
            "id": 10,
            "city": "La Paz",
            "career": "Ingenieria de Sistemas",
            "companyName": "Tech Innovators",
            "internshipDescription": "Desarrollo de aplicaciones móviles e integración de APIs.",
            "availablePositions": 2,
            "requirements": ["Experiencia en desarrollo móvil (Android/iOS)", "Conocimientos en REST APIs"],
            "contactEmail": "innovators@techlp.com",
            "stipend": "300 USD/mes",
            "companyLogo": "/images/TechInnovators.jpeg",
            "positionsOffered": [
                {
                    "title": "Desarrollador de Apps Móviles",
                    "description": "Desarrollo y mantenimiento de aplicaciones móviles.",
                    "requirements": ["Experiencia en Android/iOS", "Conocimiento de APIs REST"],
                    "salary": "300 USD/mes",
                    "schedule": "Part-time"
                }
            ]
        }
    ];

    const cities = [
        {
            id: 4,
            name: "La Paz",
            zones: [],
            code: "LP",
            country: {
                id: 1,
                name: "Bolivia",
                code: "BO",
                phone_code: "+591"
            }
        },
        {
            id: 8,
            name: "Santa Cruz de la Sierra",
            zones: [],
            code: "SC",
            country: {
                id: 1,
                name: "Bolivia",
                code: "BO",
                phone_code: "+591"
            }
        }
    ];

    const [empresas, setEmpresas] = useState<Empresa[]>(AllEmpresas);
    const [filterBody, setFilterBody] = useState<any>(null);

    const getEmpresas = async (): Promise<Empresa[]> => {
        if (!filterBody) {
            return AllEmpresas;
        }
        const body = {
            name: filterBody.name,
            city: filterBody.city
        };
        const empresasFiltered = AllEmpresas.filter((empresa) => {
            let isValid = true;
            if (body.name) {
                isValid = isValid && empresa.companyName.toLowerCase().includes(body.name.toLowerCase()) || empresa.career.toLowerCase().includes(body.name.toLowerCase());
            }
            if (body.city) {
                isValid = isValid && empresa.city.toLowerCase().includes(body.city.toLowerCase());
            }
            return isValid;
        });
        return empresasFiltered;
    }

    const getSingleEmpresa = async (id: number): Promise<Empresa> => {
        const empresa = AllEmpresas.find((empresa) => empresa.id === id);
        if (!empresa) {
            throw new Error('Empresa not found');
        }
        return empresa;
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedFilterBody = localStorage.getItem('filtroEmpresas');

            if (savedFilterBody) {
                setFilterBody(JSON.parse(savedFilterBody));
            } else {
                setFilterBody({
                    name: '',
                    city: null
                });
            }
        }
    }, []);

    useEffect(() => {
        getEmpresas().then((empresas) => {
            setEmpresas(empresas);
            setTimeout(() => {
                localStorage.removeItem('filtroEmpresas');
            }, 10);
        });
    }, [filterBody]);

    const datos = {
        empresas: empresas,
        cities: cities,
        filterBody: filterBody,
        setFilterBody: setFilterBody,
        setEmpresas: setEmpresas,
        getEmpresas: getEmpresas,
        getSingleEmpresa: getSingleEmpresa
    } as empresasDatosContext;

    return (
        <empresasContext.Provider value={datos}>
            {children}
        </empresasContext.Provider>
    )
}

export const useEmpresasContext = () => {
    return useContext(empresasContext);
};
