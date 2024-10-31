import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Офіційна сторінка BEST CTF 2024",
  description: "BEST CTF - це командні змагання з кібербезпеки,  в яких учасники виконують завдання з різних категорій. Команди повинні знайти 'прапорці' і заробити за них бали.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[#141414]">{children}</body>
    </html>
  );
}
