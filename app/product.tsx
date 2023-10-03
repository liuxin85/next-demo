"use client";
import React, { useEffect } from "react";
import z from "zod";

type Product = {
  name: string;
  price: number;
};

const productSchema = z.object({
  name: z.string(),
  price: z.number(),
});

function Product() {
  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((product: Product) => {
        // use Zod to validate the product
        const validatedProduct = productSchema.safeParse(product);
        if(!validatedProduct.success){
            console.error(validatedProduct.error);
            return;
        }
        console.log(validatedProduct.data);

      });
  });
  return <div>Product</div>;
}

export default Product;
