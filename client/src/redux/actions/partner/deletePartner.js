import axios from '../../../lib/axios.js'
import { fetchPartners } from './fetchPartners.js'

export const deletePartner = payload => async dispatch => {
  try {
    dispatch({ type: 'LOADING/SET_ISLOADING', data: true })
    await axios({
      url: `/partners/${payload._id}`,
      method: 'DELETE',
      headers: { access_token: localStorage.getItem('access_token') }
    })
    dispatch(fetchPartners({
      page: payload.page
    }))
  } catch (err) {
    console.log(err)
  }
}