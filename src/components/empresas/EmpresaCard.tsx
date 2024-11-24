"use client";
import { useEmpresasContext } from "@/app/(main)/empresas/layout";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  empresa: any;
}

export const EmpresaCard = ({ empresa }: Props) => {

  return (
    <div
      id={`internship-${empresa.id}`}
      className="flex flex-col xl:flex-row bg-white border border-gray-200 rounded-lg shadow-lg max-w-[400px] xl:max-w-full xl:w-full m-auto overflow-hidden"
    >
      {/* Información de la empresa */}
      <div className="flex items-center justify-center bg-gray-100 xl:w-[250px] h-[250px] xl:h-auto p-4">
        <Image
          src={empresa.companyLogo || "/images/default-company-logo.png"}
          alt="Logo de la empresa"
          width={200}
          height={200}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between p-6 xl:px-8 w-full">
        {/* Nombre de la empresa */}
        <h5 className="text-2xl font-bold text-gray-900 mb-2">
          {empresa.companyName}
        </h5>

        {/* Información de la pasantía */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <p className="font-semibold text-gray-700 mr-2">Carrera:</p>
            <p>{empresa.career}</p>
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-gray-700 mr-2">Ciudad:</p>
            <p>{empresa.city}</p>
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-gray-700 mr-2">Puestos disponibles:</p>
            <p>{empresa.availablePositions}</p>
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-gray-700 mr-2">Email:</p>
            <p>{empresa.contactEmail}</p>
          </div>
        </div>

        <hr className="my-4 border-gray-200" />

        {/* Botón de acción */}
        <div className="flex justify-end">
          <Link
            href={`/empresas/${empresa.id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#ecc17d] rounded-lg hover:bg-[#e1b878] focus:outline-none focus:ring-2 focus:ring-[#ecc17d] focus:ring-offset-2"
          >
            <span>Ver detalles</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>

  );
};
