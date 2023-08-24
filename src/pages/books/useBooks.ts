import { useState, useEffect } from "react";

export interface IBook {
  id: string;
  title: string;
  description: string;
  image: string;
  author?: string;
  reviewedBy?: string;
}

const useBooks = () => {
  const [categories, setCategories] = useState([]);
  const [categoryMap, setCategoryMap] = useState<{
    [category: string]: IBook[];
  }>({});
  const [selectedBookMap, setSelectedBookMap] = useState<{
    [category: string]: IBook;
  }>({});

  const extendsBook = ({ id, category }: { id: string; category: string }) => {
    // we can use caching here.
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/book/${id}`)
      .then((res) => res.json())
      .then((book: IBook) => {
        const clonedSelectedBookMap = structuredClone(selectedBookMap);
        clonedSelectedBookMap[category] = book;
        setSelectedBookMap(clonedSelectedBookMap);
      });
  };

  const cleanSelectedBook = (category: string) => {
    const clonedSelectedBookMap = structuredClone(selectedBookMap);
    delete clonedSelectedBookMap[category];
    setSelectedBookMap(clonedSelectedBookMap);
  };

  const getBooksByCategory = () => {
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/by_category`)
      .then((res) => res.json())
      .then((data: { [category: string]: { books: IBook[] } }) =>
        setCategoryMap((_prevMap) => {
          const clonedMap = structuredClone(_prevMap);
          Object.entries(data || {}).forEach(([category, { books }]) => {
            clonedMap[category] = books;
          });
          return clonedMap;
        })
      );
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_ENDPOINT}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
    // we can use promise.all
    getBooksByCategory();
  }, []);
  return {
    categories,
    categoryMap,
    selectedBookMap,
    extendsBook,
    cleanSelectedBook,
  };
};

export default useBooks;
