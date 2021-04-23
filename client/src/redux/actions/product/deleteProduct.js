import axios from '../../../lib/axios.js'
import { fetchProducts } from './fetchProducts.js'

export const deleteProduct = payload => async dispatch => {
  try {
    await axios({
      url: `/products/${payload._id}`,
      method: 'DELETE',
      headers: { access_token: localStorage.getItem('access_token') }
    })
    dispatch(fetchProducts({
      page: payload.page
    }))
  } catch (err) {
    console.log(err)
  }
}