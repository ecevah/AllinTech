import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import Header from "@/components/components/header/header";
import Copyright from "@/components/components/copyright/copyright";
import AosInitializer from "@/service/aos-initializer";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AllinTech Solutions - AI ve Yazılım Geliştirme",
  description:
    "AllinTech Solutions, sosyal medya yazılımı, yapay zeka çözümleri sunan ve AllinLobby ile Psynexa gibi yenilikçi uygulamalar geliştiren önde gelen bir yazılım şirketidir.",
  keywords: [
    "AllinTech Solutions",
    "AI çözümleri",
    "Yazılım geliştirme",
    "Sosyal medya yazılımı",
    "AllinLobby",
    "Psynexa",
    "Otel süreç takip sistemi",
    "Mental sağlığı normalize eden uygulama",
    "Yapay zeka yazılım şirketi",
    "İnovatif yazılım çözümleri",
  ],
  authors: [
    {
      name: "AllinTech Solutions",
      url: "https://www.allintechsolutions.com",
    },
  ],
  openGraph: {
    title: "AllinTech Solutions - AI ve Yazılım Geliştirme",
    description:
      "Sosyal medya yazılımı, yapay zeka çözümleri ve AllinLobby ile Psynexa gibi yenilikçi uygulamalar sunan lider bir yazılım şirketiyiz.",
    url: "https://www.allintechsolutions.com",
    siteName: "AllinTech Solutions",
    images: [
      {
        url: "/images/svg/AiT-logo.svg",
        width: 800,
        height: 600,
        alt: "AllinTech Solutions Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AllinTech Solutions - AI ve Yazılım Geliştirme",
    description:
      "Sosyal medya yazılımı, yapay zeka çözümleri ve AllinLobby ile Psynexa gibi yenilikçi uygulamalar sunan lider bir yazılım şirketiyiz.",
    images: ["/images/svg/AiT-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/svg/AiT-logo.svg",
  },
};

export default async function RootLayout({ children }) {
  const messages = await getMessages();
  return (
    <html>
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS}`}
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments);}
            gtag('js', new Date()); gtag('config', '${process.env.ANALYTICS}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <AosInitializer />
            <Header />
            {children}
            <Copyright />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
