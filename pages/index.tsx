import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import KawaiiHeader from "@components/Header/Header";
import ProductList from "@components/ProductList/ProductList";
import "../styles/Home.module.css";

export async function getServerSideProps() {
  const data = await fetch("http://localhost:3001/api/horse/all")
    .then((res) => res.json())
    .then((data) => data);
  return {
    props: {
      productList: data.products,
    }, // will be passed to the page component as props
  };
}
type IHomeProps = {
  productList: TProduct[];
};

const Home: NextPage<IHomeProps> = ({ productList }: IHomeProps) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  );
};

export default Home;
