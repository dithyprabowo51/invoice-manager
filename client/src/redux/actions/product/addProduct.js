import axios from '../../../lib/axios'
import { fetchProducts } from './fetchProducts.js'

export const addProduct = payload => async dispatch => {
  try {
    await axios({
      url: '/products',
      method: 'POST',
      headers: { access_token: localStorage.getItem('access_token') },
      data: {
        product_name: payload.product_name,
        unit: payload.unit,
      }
    })
    dispatch(fetchProducts())
  } catch (err) {
    console.log(err)
  }
}