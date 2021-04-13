import React from 'react'

const ProductName = (props) => {
  const handleFilterProducts = event => {
    event.preventDefault()
    props.handleFilterProducts()
    props.setPage(1)
  }
  return (
    <div>
      <div>Product Name</div>
      <div>
        <form onSubmit={handleFilterProducts}>
          <input
            type="text"
            value={props.product_name}
            onChange={event => props.setProduct_name(event.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default ProductName