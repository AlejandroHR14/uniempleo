import CompanyDetails from "@/components/empresas/EmpresaDetail";

// export const runtime = "edge";

interface Props {
  params: { id: number };
}

export default function EmpresaIdPage({ params }: Props) {
  return (
    <CompanyDetails companyId={params.id} />
  );
}
