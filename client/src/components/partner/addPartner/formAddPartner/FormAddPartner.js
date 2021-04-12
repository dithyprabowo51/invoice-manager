import React, { useState } from 'react'
import './FormAddPartner.css'

// Redux
import { useDispatch } from 'react-redux'
import { addPartner } from '../../../../redux/actions/partner/addPartner.js'

import { MySwal } from '../../../../lib/sweetAlert.js'

const FormAddPartner = (props) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')

  const handleCancel = () => {
    props.setIsShowAddPartnerForm(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Partner has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    dispatch(addPartner({
      name, type, phone, city, email,
      page: props.page
    }))
    props.setIsShowAddPartnerForm(false)
  }

  return (
    <div className="form-add-partner">
      <h4 className="text-center">Create New Partner</h4>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name <sup className="text-danger">*</sup></label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type <sup className="text-danger">*</sup></label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={type}
            onChange={event => setType(event.target.value)}
          >
            <option value="">=== Select Partner Type ===</option>
            <option value="Supplier">Supplier</option>
            <option value="Client">Client</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="number"
            className="form-control"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
        </div>
        <div className="text-center mt-4">
          <button onClick={handleCancel} className="btn btn-danger mx-1" type="button">Cancel</button>
          <button
            className="btn btn-primary mx-1"
            type="submit"
          >
            Save Partner
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormAddPartner