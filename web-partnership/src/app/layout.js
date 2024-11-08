import localFont from "next/font/local";
import "./globals.css";

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
  title: "Bem-vindo ao PARTNERSHIP",
  description:
    "O PARTNERSHIP é mais do que um programa de recompensas; é uma experiência de fidelização pensada para fortalecer parcerias entre profissionais, consultores e nossas lojas parceiras. Neste sistema, cada participante acumula pontos valiosos que podem ser usados livremente para alcançar benefícios, criando um ciclo de reconhecimento e engajamento genuíno.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
