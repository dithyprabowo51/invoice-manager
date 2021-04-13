import React from 'react'

const ProductSku = (props) => {
  const handleFilterProducts = event => {
    event.preventDefault()
    props.handleFilterProducts()
    props.setPage(1)
  }
  return (
    <div>
      <div>Product SKU</div>
      <div>
        <form onSubmit={handleFilterProducts}>
          <input
            type="text"
            onChange={event => props.setId(event.target.value)}
            value={props._id}
          />
        </form>
      </div>
    </div>
  )
}

export default ProductSku