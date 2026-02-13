export const domain = "https://bookstore.eraasoft.pro/api";
import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: Math.max(1, state.count - 1) })), 
}));
export const useCounterStoreForCart = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: Math.max(1, state.count - 1) })), 
}));
export const useCounterStoreForOrderSumary = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: Math.max(1, state.count - 1) })), 
}));

export const books = [
  {
    id: 1,
    name: "Clean Code",
    author: "Robert C. Martin",
    price: 250,
    image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg",
  },
  {
    id: 2,
    name: "Atomic Habits",
    author: "James Clear",
    price: 300,
    image: "https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL.jpg",
  },
  {
    id: 3,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
  },
  {
    id: 4,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jzeY_L_ahnZrII0seTqHIss6Mwg-FbFrmQ&s",
  },
  {
    id: 5,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image:
      "https://www.neelwafurat.com/images/lb/abookstore/covers/normal/239/239695.jpg",
  },
  {
    id: 6,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image:
      "https://foulabook.com/storage/photo/39310.2018-09-14.1536933690.jpg",
  },
  {
    id: 7,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image:
      "https://upload.wikimedia.org/wikipedia/ar/9/98/%D8%A3%D8%B1%D8%B6_%D8%B2%D9%8A%D9%83%D9%88%D9%84%D8%A7.jpg",
  },
  {
    id: 8,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image:
      "https://ibharbooks.com/cdn/shop/products/image_ebf9e5e0-d77d-4a99-91f0-33b70d3f4c9e.jpg?v=1654789806&width=1069",
  },
  {
    id: 9,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1516985982i/37911553.jpg",
  },
  {
    id: 10,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image:
      "https://m.media-amazon.com/images/I/718vzd+cF0L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 11,
    name: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 280,
    image:
      "https://m.media-amazon.com/images/I/81aCMT1zKtL._AC_UF1000,1000_QL80_.jpg",
  },
];
