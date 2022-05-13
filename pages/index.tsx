import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/Header/Header";
import ProductList from "@components/ProductList/ProductList";
import "../styles/Home.module.css";
import "semantic-ui-css/semantic.min.css";

const Home: NextPage = () => {
  const productList: TProduct[] = [
    {
      id: "1",
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
    },
  ];

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
