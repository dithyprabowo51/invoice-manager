import React from 'react'

// Redux
import { useSelector } from 'react-redux'

const Pagination = (props) => {
  const partners = useSelector(state => state.partner.partners)
  const handlePreviousPage = () => {
    if (props.page !== 1) {
      props.setPage(props.page - 1)
    }
  }
  const handleNextPage = () => {
    if (partners.length > 4) {
      props.setPage(props.page + 1)
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <ul className="pagination">
        <li
          className={props.page === 1 ? 'page-item disabled' : 'page-item'}
        >
          <button
            className="page-link"
            type="button"
            onClick={handlePreviousPage}
          >
            Previous
          </button>
        </li>
        <li
          className="page-item"
        >
          <span
            className="page-link"
          >
            {props.page}
          </span>
        </li>
        <li
          className={partners.length > 4 ? 'page-item' : 'page-item disabled'}
        >
          <button
            className="page-link"
            type="button"
            onClick={handleNextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination