import React, { useEffect, useState } from 'react'
import './ListPartner.css'

// Components
import PartnerId from './columnTitle/PartnerId.js'
import PartnerName from './columnTitle/PartnerName.js'
import PartnerType from './columnTitle/PartnerType.js'
import PartnerEmail from './columnTitle/PartnerEmail.js'
import PartnerPhone from './columnTitle/PartnerPhone.js'
import PartnerCountry from './columnTitle/PartnerCountry.js'
import Pagination from './pagination/Pagination.js'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchPartners } from '../../../redux/actions/partner/fetchPartners.js'

const ListPartner = (props) => {
  const dispatch = useDispatch()
  const partners = useSelector(state => state.partner.partners)
  const isLoading = useSelector(state => state.loading.isLoading)

  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [_id, setId] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setPage(1)
    dispatch(fetchPartners({
      page, name, type, _id, phone, city, email
    }))
    // eslint-disable-next-line
  }, [type])

  useEffect(() => {
    dispatch(fetchPartners({
      page, name, type, _id, phone, city, email
    }))
    // eslint-disable-next-line
  }, [page])

  const handleFilterPartners = () => {
    setPage(1)
    dispatch(fetchPartners({
      name, type, _id, phone, city, email
    }))
  }

  return (
    <div>
      {
        isLoading ?
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          :
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <PartnerId
                      id={_id}
                      setId={setId}
                      handleFilterPartners={handleFilterPartners}
                    />
                  </th>
                  <th scope="col">
                    <PartnerName
                      name={name}
                      setName={setName}
                      handleFilterPartners={handleFilterPartners}
                    />
                  </th>
                  <th scope="col">
                    <PartnerType
                      type={type}
                      setType={setType}
                    />
                  </th>
                  <th scope="col">
                    <PartnerEmail
                      email={email}
                      setEmail={setEmail}
                      handleFilterPartners={handleFilterPartners}
                    />
                  </th>
                  <th scope="col">
                    <PartnerPhone
                      phone={phone}
                      setPhone={setPhone}
                      handleFilterPartners={handleFilterPartners}
                    />
                  </th>
                  <th scope="col">
                    <PartnerCountry
                      city={city}
                      setCity={setCity}
                      handleFilterPartners={handleFilterPartners}
                    />
                  </th>
                  <th>
                    <div>Action</div>
                    <div style={{ width: '5px', height: '30px' }}></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  partners.map(partner => {
                    return (
                      <tr key={partner._id}>
                        <td>{partner._id}</td>
                        <td>{partner.name}</td>
                        <td>{partner.type}</td>
                        <td>{partner.emailPartner}</td>
                        <td>{partner.phone}</td>
                        <td>{partner.city}</td>
                        <td>
                          <div className="dropdown">
                            <button className="btn btn-sm btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Action</button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                              <li><button onClick={() => props.setIsShowEditPartnerForm(true)} className="dropdown-item">Edit</button></li>
                              <li><button className="dropdown-item">Delete</button></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <Pagination
              page={page}
              setPage={setPage}
            />
          </div>
      }
    </div>
  )
}

export default ListPartner