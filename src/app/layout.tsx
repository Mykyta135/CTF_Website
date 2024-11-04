import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEST CTF 2024",
  description:
    "BEST Capture The Flag – це перший офлайн CTF у Львові, організований для розвитку навичок у сфері кібербезпеки серед молоді. Учасники змагатимуться у вирішенні різноманітних завдань з різних аспектів кібербезпеки, що покращить їхні навички у сфері. student, best lviv, lviv, cybersecurity, comepetition",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
      <meta name="google-site-verification" content="CwxHkhVlgnRTxERlt9yD5zll8ZidqOcLfmkFB2PGynk" />
      </head>
      <body className="bg-[#141414]">{children}</body>
    </html>
  );
}
