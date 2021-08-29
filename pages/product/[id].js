import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { id }
  } = useRouter();

  return <div>Esta es la página del producto: {id}</div>;
};

export default ProductItem;
