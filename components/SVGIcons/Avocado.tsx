import React from "react";
import Horsebrown from "./horse-brown.svg";
import Image from "next/image";
const Horse = () => (
  <Image src={Horsebrown} alt="Horse" width={50} height={50} />
);

export default Horse;
