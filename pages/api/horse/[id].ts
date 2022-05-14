// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
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
}
