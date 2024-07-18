import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  // const {title} = useParams();
  const [product, setProduct] = useState([]);


  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
    // console.log(response.data);
    setProduct([response.data])
  }
 

  return (
    <div>
     <h1>Product Detail</h1>
           
             <table border={1}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>image</th>
                    <th>title</th>
                    
                    <th>price</th>
                    <th>category</th>
                </tr>
            </thead>

            <tbody>
                {product.map((product,index)=>{
                    return <tr key={index}>
                            <td>{product.id}</td>
                            <td><img src={product.image} width={50} height={50}/></td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.category} {product.rating.rate}</td>
                            {/* <td><button onClick={()=> navigate(`/product/${product.id}`)}>View</button></td> */}
                    </tr>
                })}
            </tbody>
      </table>

    </div>
  )
}