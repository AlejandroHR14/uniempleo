"use client";
import { useEmpresasContext } from "@/app/(main)/empresas/layout";
import { Empresa } from "@/types/empresa.type";
import React, { useEffect, useState } from "react";

const CompanyDetails = ({ companyId }: any) => {
    const { empresas } = useEmpresasContext();
    const [empresa, setempresa] = useState<Empresa>();

    useEffect(() => {
        const aux = empresas.find((empresa: Empresa) => empresa.id == companyId);
        setempresa(aux);
    }, []);

    if (!empresa) {
        return <div className="flex items-center justify-center min-h-screen">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>;
    }
    return (
        <div className="grid lg:grid-cols-[1fr_auto] gap-3 lg:!gap-5">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
                    Detalles de la Empresa
                </h5>
                <div className="grid md:grid-cols-1 gap-3">
                    <img
                        src={empresa?.companyLogo}
                        alt={`${empresa?.companyName} Logo`}
                        className="h-[250px] w-[500px] object-contain rounded-lg m-auto mb-4"
                    />
                    <div className="flex flex-col gap-3">
                        <div className="grid md:grid-cols-2">
                            <p>Nombre :</p>
                            <p className="font-semibold">{empresa?.companyName}</p>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <p>Descripción :</p>
                            <p className="font-semibold">{empresa?.internshipDescription}</p>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <p>Ciudad :</p>
                            <p className="font-semibold">{empresa?.city}</p>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <p>Carrera :</p>
                            <p className="font-semibold">{empresa?.career}</p>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <p>Vacantes :</p>
                            <p className="font-semibold">{empresa?.availablePositions}</p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="grid md:grid-cols-2">
                            <p>Email de Contacto :</p>
                            <p className="font-semibold">{empresa?.contactEmail}</p>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <p>Requisitos :</p>
                            <p className="font-semibold">
                                {empresa?.requirements.join(", ")}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2">
                            <p>Stipend :</p>
                            <p className="font-semibold">{empresa?.stipend}</p>
                        </div>
                    </div>
                </div>

                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
                    Puestos Disponibles
                </h5>
                <div className="grid md:grid-cols-2 gap-3">
                    {empresa?.positionsOffered.map((position: any, index: any) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-100 border border-gray-300 rounded-lg"
                        >
                            <h6 className="text-lg font-semibold text-gray-800">
                                {position.title}
                            </h6>
                            <p className="text-sm text-gray-600 mb-2">
                                {position.description}
                            </p>
                            <div className="grid md:grid-cols-2">
                                <p>Requisitos :</p>
                                <p className="font-semibold">
                                    {position.requirements.join(", ")}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <p>Salario :</p>
                                <p className="font-semibold">{position.salary}</p>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <p>Horario :</p>
                                <p className="font-semibold">{position.schedule}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanyDetails;