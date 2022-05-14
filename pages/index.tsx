import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/Header/Header";
import ProductList from "@components/ProductList/ProductList";
import "../styles/Home.module.css";

const Home: NextPage = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch("/api/horse/all")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={products} />
    </Layout>
  );
};

export default Home;
