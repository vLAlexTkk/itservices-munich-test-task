"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CategoryContextType {
  selectedCategory: number | null;
  setSelectedCategory: (category: number | null) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>{children}</CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory can't be used");
  }
  return context;
};
