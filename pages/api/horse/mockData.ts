const productList: TProduct[] = [];
productList.length = 10;

for (let i = 0; i < productList.length; i++) {
  productList[i] = {
    id: String(i),
    name: `name${i}`,
    attributes: {
      description: "Description 1",
      shape: "Round",
      hardiness: "Hard",
      taste: "Sweet",
    },
    price: i * 100,
    image: `https://picsum.photos/id/${i}/200/200`,
    sku: "1234" + i,
  };
}
export default productList;
