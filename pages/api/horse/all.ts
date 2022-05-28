import productList from "./mockData";

export default async function handler(req, res) {
  res.status(200).json({ products: productList });
}
