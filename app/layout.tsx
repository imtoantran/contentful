import "./globals.css";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata = {
  title: ``,
  description: ``,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">

         
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
