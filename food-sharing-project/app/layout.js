
import "./globals.css";

export const metadata = {
  title: "NextJS Food sharing app",
  description: "First NextJS app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
