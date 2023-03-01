export interface Bread {
  id: number;
  productName: string;
  price: number;
  image: string;
  isAvailable: boolean;
}

export type Breads = Bread[];
