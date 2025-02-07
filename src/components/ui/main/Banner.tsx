import { BannerMobileFilterForm } from "./BannerMobileFilterForm";
import { BannerFormFilter } from "./BannerFormFilter";
export const Banner = async () => {
  return (
    <>
      <div className="h-[calc(100vh-74px)] lg:h-[calc(100vh-78px)] w-full bg-white bg-static-banner bg-no-repeat bg-bottom bg-cover brightness-[65%]"></div>

      <div className="absolute w-full h-[calc(100vh-74px)] lg:h-[calc(100vh-78px)] top-0 grid place-items-center">
        <div className="flex items-center justify-around lg:w-[80%] m-auto lg:h-full lg:gap-10 xl:gap-16">
          <div className="xl:w-full">
            <h1 className="m-0 text-white font-bold text-center text-[32px] min-[1150px]:text-5xl min-[1530px]:text-[72px] mb-4">
              {"FORMAMOS AGENTES DE CAMBIO"}
            </h1>

            <div className="flex items-center gap-5">
              <span className="hidden lg:block h-[2px] w-full bg-[#fff]"></span>
              <div className="flex gap-2 w-[90%] m-auto">
                <span className="w-full m-auto rounded-full text-center px-3 py-2 bg-[#1e3a58] text-white lg:hidden cursor-pointer">
                  ¿Estás búscando una pasantia?
                </span>
                <span className="w-full m-auto rounded-full text-center px-3 py-2 bg-[#1e3a58] text-white hidden lg:block lg:w-[250px] cursor-pointer">
                  ¿Estás búscando una pasantia?
                </span>
                <BannerMobileFilterForm />
              </div>
              <span className="hidden lg:block h-[2px] w-full bg-[#fff]"></span>
            </div>
          </div>
          <div className="hidden lg:block m-auto py-4 px-4 bg-[#ffffff59] rounded-xl sm:border border-[#ffffff2e] shadow-md backdrop-blur-[6.5px]">
            <BannerFormFilter />
          </div>
        </div>
      </div>
    </>
  );
};
