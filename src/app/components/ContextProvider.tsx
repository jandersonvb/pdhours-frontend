"use client";

import { createContext, useState } from "react";

interface MyContextType {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState("Hello");

  return <MyContext.Provider value={{ state, setState }}>{children}</MyContext.Provider>;
}