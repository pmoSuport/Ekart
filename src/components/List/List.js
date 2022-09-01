import React from "react";
import Loading from "../Loading/Loading"
import Product from "../Product/Product";
import "./List.css";
import "../Loading/Loading.css"

function List(){
   let [data, setData] = React.useState(null);

   React.useEffect(()=> {
     fetch('https://demo7242716.mockable.io/products')
     .then(res => res.json())
     .then(data => setData(data.products))
   }, []);
   
    return(
       <div className="each-item-wrapper">
          {data ? (
              data.map((eachItem, index) => {
                  return <Product item={eachItem} key={index} />
              })
          ) : (
              <Loading />
          )
           
          }
       </div>
      
    )
}

export default List;