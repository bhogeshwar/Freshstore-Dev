export interface ProductModelServer {
  id: Number;
  name: String;
  category: String;
  description: String;
  image: String;
  price: Number;
  quantity: Number;
  images: Blob;
}


export interface serverResponse {
  count: number;
  products: ProductModelServer[]
};
