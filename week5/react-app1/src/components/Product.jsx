function Product(props){
  const { productObj } = props;

  return(
    <div className="p-4 rounded-xl shadow-amber-400 shadow-2xl transition duration-300 bg-white">
        <h2 className="text-lg font-semibold">{productObj.title}</h2>
        <p className="text-gray-500 text-sm mt-2">{productObj.description}</p>

        <p className="text-xl font-bold mt-2">₹ {productObj.price}</p>
    </div>
  )
}

export default Product;