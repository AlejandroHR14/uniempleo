import { titleFont } from "@/config/fonts";

import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";

import Tailwind from "primereact/passthrough/tailwind";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { config } from "@fortawesome/fontawesome-svg-core";
import { PrimeReactProvider } from "primereact/api";
config.autoAddCss = false;


export const metadata = {
  title: {
    template: '%s | Uni Empleo',
    default: 'Uni Empleo',
  },
  description: 'Formamos agentes de cambio con calidad certificada',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
        <head>
          <link rel="icon" type="image/x-icon" href="/logo.png" />
        </head>
        <body className={titleFont.className}>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
