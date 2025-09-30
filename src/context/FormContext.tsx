"use client";
import React, { createContext, useState, ReactNode } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    location: string;
    title: string;
    company: string;
    email: string;
    phone: string;
    template: string;
}

interface FormContextType {
    data: FormData;
    setData: (data: FormData) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<FormData>({
        firstName: "",
        lastName: "",
        location: "",
        title: "",
        company: "",
        email: "",
        phone: "",
        template: "",
    });

    return (
        <FormContext.Provider value={{ data, setData }}>
            {children}
        </FormContext.Provider>
    );
};
