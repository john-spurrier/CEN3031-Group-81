export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Starter Package',
      price: 9.99,
      description: 'A package for those just beginning their journey.'
    },
    {
      id: 2,
      name: 'Intermediate Package',
      price: 19.99,
      description: 'A package for those who are taking their improvement to the next level.'
    },
    {
      id: 3,
      name: 'Premium Package',
      price: 29.99,
      description: 'A package for those looking those who are looking to be the best possible version of themselves'
    }
  ];