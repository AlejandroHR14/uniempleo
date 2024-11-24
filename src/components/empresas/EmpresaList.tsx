"use client";
import { EmpresaTopFilters } from "./EmpresaTopFilters";
import { EmpresaCard } from "./EmpresaCard";
import { useEmpresasContext } from "@/app/(main)/empresas/layout";

export const EmpresaList = () => {
  const { empresas } = useEmpresasContext();

  return (
    <>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Empresas asociadas</h1>
        <EmpresaTopFilters count={empresas.length} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:!gap-5 xl:!gap-10">
        {empresas.map((empresa) => (
          <EmpresaCard key={empresa.id} empresa={empresa} />
        ))}
      </div>

      {/* <BottomListPagination count={10} rows={20} context={useEmpresasContext()}/> */}
    </>
  );
};
