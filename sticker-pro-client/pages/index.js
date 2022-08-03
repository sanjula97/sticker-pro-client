import { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from "../components/Layout";
import ProductItem from '../components/ProductItem';
import data from '../utils/data';

export default function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5001/api/products', {
        headers: {}
      });
      setProducts(result.data);
      console.log("test data", result.data)
    };
    fetchData();
  }, []);
  return (
      <Layout title={'Home page'}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
      </Layout>
  )
}
