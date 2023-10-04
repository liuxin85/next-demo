"use client";
import React, { useEffect } from "react";
import z from "zod";

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
});

type Product = z.infer<typeof productSchema>;
const getPriceFromProduct = (product: Product) => {
  return product.price;
};

function Product() {
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((product: unknown) => {
        // use Zod to validate the product
        const validatedProduct = productSchema.safeParse(product);
        if (!validatedProduct.success) {
          console.error(validatedProduct.error);
          return;
        }
        console.log(validatedProduct.data);
      });
  });
  return <div>Product</div>;
}

export default Product;
