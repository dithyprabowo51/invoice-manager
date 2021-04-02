import React from 'react'

// Router
import { useHistory } from 'react-router-dom'

const ProductAside = () => {
  const history = useHistory()
  const handleChangePage = (value) => {
    history.push(value)
  }
  return (
    <div>
      <div onClick={() => handleChangePage('/invoicer/product')} className="menu">
        <div className="d-flex">
          <div className="icon-menu">
            <i className="fas fa-warehouse"></i>
          </div>
          <div className="ms-2">
            Product
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAside