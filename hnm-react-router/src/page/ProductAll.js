import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../component/ProductCard';
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  let [productList, setProductList] = useState([]);
  let [query, setQuery] = useSearchParams();

  const getProducts= async ()=>{
    let searchQuery = query.get("q") || "";
    
    let url = `http://localhost:5000/products`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data)
  }
  useEffect(()=>{
      getProducts()
   },[query])
  return (
    <div>
        <Container>
          <Row>
          {productList.map((menu)=> (
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
        </Container>
        
    </div>
  )
}

export default ProductAll