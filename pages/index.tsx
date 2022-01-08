import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/Header/Header";
import ProductList from "@components/ProductList/ProductList";
import styles from "../styles/Home.module.css";
import "semantic-ui-css/semantic.min.css";

const Home: NextPage = () => {
  const productList: TProduct[] = [];

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
