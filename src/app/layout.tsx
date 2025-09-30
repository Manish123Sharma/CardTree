// import "./globals.css";
import type { Metadata } from "next";
import { FormProvider } from "../context/FormContext";

export const metadata: Metadata = {
    title: "Cardtree Onboarding",
    description: "Multi-step onboarding with Next.js + TS + Formik",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <FormProvider>{children}</FormProvider>
            </body>
        </html>
    );
}
