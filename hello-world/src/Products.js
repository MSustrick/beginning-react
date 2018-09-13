import React, {Component} from 'react'
import Product from './Product';

class Products extends Component{

  products;

  constructor(props){
  super(props);
  this.products = this.getProducts();
}
  getProducts(){
    return []
    return[
      {
      imageUrl:"http://loremflickr.com/150/150?random=1",
      productName:"Product 1",
      releasedDate:"May 31, 2016",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque " +
              " ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,",
      rating: 4,
      numOfReviews:2
      },
      {
      imageUrl:"http://loremflickr.com/150/150?random=2",
      productName:"Product 1",
      releasedDate:"May 31, 2016",
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque " +
              " ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,",
      rating: 4,
      numOfReviews:2
      },
      {
        imageUrl:"http://loremflickr.com/150/150?random=3",
        productName:"Product 2",
        releasedDate:"May 15, 2016",
        description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque " +
                " ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,",
        rating: 5,
        numOfReviews:12
        },
        {
          imageUrl:"http://loremflickr.com/150/150?random=3",
          productName:"Product 3",
          releasedDate:"Jun 20, 2016",
          description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque " +
                  " ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,",
          rating: 2,
          numOfReviews:31
          }
    ]
  }
  render() {

     const listProducts = this.products.map((product)=>
      <Product key={product.productName} data={product} />
    );

    return (

      <div>
  {listProducts.length > 0 &&
  <ul>{listProducts}</ul>}

  {listProducts.length == 0 &&
    <ul>No Products to display</ul>
  }
    </div>
    );
  }
}

export default Products