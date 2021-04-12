import axios from '../../../lib/axios.js'
import { fetchPartners } from './fetchPartners.js'

export const addPartner = payload => async dispatch => {
  try {
    dispatch({ type: 'LOADING/SET_ISLOADING', data: true })
    await axios({
      url: '/partners',
      method: 'POST',
      headers: { access_token: localStorage.getItem('access_token') },
      data: {
        name: payload.name,
        emailPartner: payload.email,
        type: payload.type,
        city: payload.city,
        phone: payload.phone,
      }
    })
    dispatch(fetchPartners())
  } catch (err) {
    console.log(err)
    dispatch({ type: 'LOADING/SET_ISLOADING', data: false })
  }
}