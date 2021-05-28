function ProductData(props){
    return <p className = "product">
        Tittle :  {props.title}
        <br/>
        Description : {props.des}
        <br/>
        Price : {props.price} 
    </p>
  }
  export default ProductData