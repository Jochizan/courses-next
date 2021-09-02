import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

// Página dinámica with getStaticPaths
export const getStaticPaths = async () => {
  const res = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await res.json();

  const paths = productList.map(({ id }) => ({ params: {
    id
  }}))

  return {
    paths,
    // incremental static generation
    // cualquier página que no se especifique botará 404
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const res = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`);
  const product: TProduct = await res.json();

  return {
    props: {
      product
    }
  };
};

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  );
};

export default ProductPage;
