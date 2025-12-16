import "./globals.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />

        <main className="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

