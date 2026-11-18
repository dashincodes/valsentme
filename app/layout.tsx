import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const LOGO =
  "https://pub-51a650956d4a4b3b8163ee0fdb58a367.r2.dev/images/logo.webp";

const description =
  "Hey, I am Valeria! My family travels, homeschools, and eats our way through every destination. On @valsentme I share real, family-tested reviews of restaurants, attractions, and experiences.";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAL sent ME | Valeria Zatarain",
  description,
  openGraph: {
    title: "VAL sent ME | Valeria Zatarain",
    description,
    siteName: "VAL sent ME",
    type: "website",
    images: [
      {
        url: LOGO,
        width: 1000,
        height: 1000,
        alt: "VAL sent ME logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "VAL sent ME | Valeria Zatarain",
    description,
    images: [LOGO],
  },
  icons: {
    icon: [{ url: LOGO, type: "image/webp" }],
    apple: [{ url: LOGO }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ee2d6e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full scroll-pt-36 antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
