"use client";
import { faFacebook, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { TopContactForm } from "../top-menu/TopContactForm";

export const Footer = () => {
  const [contactFormVisible, setContactFormVisible] = useState(false);

  return (
    <>
      <footer className="bg-[#111f2e]">
        <div className="w-[80%] m-auto py-16">
          <div className="grid grid-cols-[auto] gap-4 lg:grid-cols-[auto_auto_auto_auto] text-white">
            <div className="max-w-[350px]">
              <h4 className="text-lg font-medium mb-6">UNIVERSIDAD NUR</h4>

              <p className="text-sm leading-7 text-[#8a99b3]">
                Formamos agentes de cambio con calidad certificada.
              </p>
            </div>

            <div className="lg:pl-2">
              <h4 className="text-lg font-medium mb-6">Enlaces</h4>
              <ul className="text-sm text-[#8a99b3] flex flex-col gap-2">
                <li>
                  <Link href={'/'} className="hover:text-white hover:pl-2 hover:cursor-pointer transition-all duration-200 ease-in-out">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href={'/empresas'} className="hover:text-white hover:pl-2 hover:cursor-pointer transition-all duration-200 ease-in-out">
                    Empresas
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="text-lg font-medium mb-6">Contáctanos</h4>
              <ul className="text-sm text-[#8a99b3] flex flex-col gap-2">
                <li>
                  <a className="hover:text-white hover:pl-2 cursor-pointer transition-all duration-200 ease-in-out"
                    onClick={() => {
                      setContactFormVisible(true);
                    }}>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6">Siguenos en</h4>
              <div className="flex flex-wrap items-center gap-4 text-[#8a99b3]">
                <a
                  href={"https://www.facebook.com/UniversidadNURoficial/?locale=es_LA"}
                  className="hover:text-white transition-all duration-200 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>

                <a
                  href={"https://bo.linkedin.com/school/universidad-nur/"}
                  className="hover:text-white transition-all duration-200 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href={"https://www.tiktok.com/@universidadnur"}
                  className="hover:text-white transition-all duration-200 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>

              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-[#ecc27d] w-[80%] mx-auto mt-8 py-8 text-white">
          <Image
            src={"/images/LogoNUR.png"}
            className="w-44 lg:w-80 lg:h-[150px]"
            loading="lazy"
            width="320"
            height="150"
            alt="logo-firma"
          />
          <p className="font-light">
            <span className="text-[#ecc27d] font-medium">© Universidad NUR. </span>
            2024 todos los derechos reservados.
          </p>
        </div>
      </footer>
      <Dialog
        header="Envianos un Mensaje"
        visible={contactFormVisible}
        style={{ width: "500px" }}
        onHide={() => {
          if (!contactFormVisible) return;
          setContactFormVisible(false);
        }}
      >
        <TopContactForm />
      </Dialog>
    </>
  );
};
