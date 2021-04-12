import axios from '../../../lib/axios.js'
import { fetchPartners } from './fetchPartners.js'

export const editPartner = payload => async dispatch => {
  try {
    dispatch({ type: 'LOADING/SET_ISLOADING', data: true })
    await axios({
      url: `/partners/${payload._id}`,
      method: 'PUT',
      headers: { access_token: localStorage.getItem('access_token') },
      data: {
        name: payload.name,
        type: payload.type,
        emailPartner: payload.email,
        city: payload.city,
        phone: payload.phone,
      }
    })
    dispatch(fetchPartners({
      page: payload.page
    }))
  } catch (err) {
    console.log(err)
  }
}