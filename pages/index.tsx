import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const index = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/avo');
      const data = await res.json();

      setProductList(data);
    };

    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Hola Platzi</h1>
      {productList.map((product, idx) => (
        <div key={idx}>{product.image}</div>
      ))}
    </div>
  );
};

export default index;
