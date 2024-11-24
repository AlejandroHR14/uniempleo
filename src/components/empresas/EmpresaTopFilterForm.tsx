"use client";

import { useEmpresasContext } from "@/app/(main)/empresas/layout";

import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";


export const EmpresaTopFilterForm = () => {
  const { cities, filterBody, setFilterBody } = useEmpresasContext();

  const handleInputChange = (name: string, value: any) => {
    if (name === "city") {
      value = value ? value : null;
    }
    setFilterBody({ ...filterBody, [name]: value });
  };

  if (filterBody === null) {
    return null;
  }

  return (
    <form className="flex flex-col gap-2 md:flex-row items-center md:gap-3">
      <div className="form-element">
        <Dropdown
          value={filterBody.city}
          onChange={(e) => handleInputChange("city", e.value)}
          options={cities}
          optionLabel="name"
          optionValue="name"
          placeholder="Selecionar Ciudad"
          showClear
          filter
          className="!w-full !border !border-[#d1d5db]"
        />
      </div>
      <div className="form-element">
        <InputText
          id="title"
          value={filterBody.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="Buscar..."
          className="w-full"
        />
      </div>
    </form>
  );
};
