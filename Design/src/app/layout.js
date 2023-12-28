import { Inter } from "next/font/google";
import "../assets/styles/globals.css";
import { Providers } from "./redux/provider";
import { ThemeProvider } from "../components/user_components/theme-provider";
import { ThemeSwitcher } from "@/components/user_components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhargav Cars",
  description: "Drive your dream car now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#121212]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>{children}</Providers>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
