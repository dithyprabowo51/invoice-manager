import React from 'react'
import './FormAddPartner.css'

const FormAddPartner = (props) => {
  const handleCancel = () => {
    props.setIsShowAddPartnerForm(false)
  }
  return (
    <div className="form-add-partner">
      <h4 className="text-center">Create New Partner</h4>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name <sup className="text-danger">*</sup></label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Type <sup className="text-danger">*</sup></label>
          <select className="form-select" aria-label="Default select example">
            <option value="">=== Select Partner Type ===</option>
            <option value="supplier">Supplier</option>
            <option value="client">Client</option>
            <option value="both">Both</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input type="text" className="form-control" />
        </div>
        <div className="text-center mt-4">
          <button onClick={handleCancel} className="btn btn-danger mx-1" type="button">Cancel</button>
          <button className="btn btn-primary mx-1" type="submit">Save Partner</button>
        </div>
      </form>
    </div>
  )
}

export default FormAddPartner