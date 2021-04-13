import axios from '../../../lib/axios.js'

export const fetchProducts = payload => async dispatch => {
  try {
    dispatch({ type: 'LOADING/ISLOADING', data: true })
    const { data } = await axios({
      url: '/products',
      method: 'GET',
      headers: { access_token: localStorage.getItem('access_token') },
      params: {
        product_name: payload?.product_name,
        _id: payload?._id,
      }
    })
    dispatch({ type: 'PRODUCT/SET_PRODUCTS', data: data.data })
    dispatch({ type: 'LOADING/ISLOADING', data: false })
  } catch (err) {
    console.log(err)
  }
}