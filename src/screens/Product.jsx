import React, { useState, useEffect } from 'react';
import ProductTable from '../Components/Product/ProductTable.jsx'
import SearchBar from '../Components/Product/Search.jsx';
import { fetchProducts } from '../store/Product/ProductApi.js';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockChange={setInStockOnly}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
};

export default Product;
