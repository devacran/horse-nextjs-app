export default async function handler(req, res) {
  const productList: TProduct[] = [];
  productList.length = 10;
  productList.fill({
    id: "loco",
    name: "Product 1",
    price: 10,
    image: "https://picsum.photos/200/300",
    sku: "12345",
    attributes: {
      description: "Description 1",
      shape: "Round",
      hardiness: "Hard",
      taste: "Sweet",
    },
  });
  res.status(200).json({ products: productList });
}
