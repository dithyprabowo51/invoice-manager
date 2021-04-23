import React from 'react'
import './Pagination.css'

const Pagination = props => {
  const handleNextPage = () => {
    if (props.products.length > 4) {
      props.setPage(props.page + 1)
    }
  }
  const handlePreviousPage = () => {
    if (props.page > 1) {
      props.setPage(props.page - 1)
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className={props.page <= 1 ? 'page-item disabled' : 'page-item'}
          >
            <button
              className="page-link"
              onClick={handlePreviousPage}
            >
              Previous
            </button>
          </li>
          <li className="page-item"><span className="page-link">{props.page}</span></li>
          <li
            className={props.products.length < 5 ? 'page-item disabled' : 'page-item'}
          >
            <button
              className="page-link"
              onClick={handleNextPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination