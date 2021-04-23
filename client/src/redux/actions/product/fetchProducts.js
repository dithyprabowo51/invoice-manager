import axios from '../../../lib/axios.js'

export const fetchProducts = payload => async dispatch => {
  try {
    dispatch({ type: 'LOADING/SET_ISLOADING', data: true })
    const { data } = await axios({
      url: '/products',
      method: 'GET',
      headers: { access_token: localStorage.getItem('access_token') },
      params: {
        product_name: payload?.product_name,
        _id: payload?._id,
        page: payload?.page
      }
    })
    dispatch({ type: 'PRODUCT/SET_PRODUCTS', data: data.data })
    dispatch({ type: 'LOADING/SET_ISLOADING', data: false })
  } catch (err) {
    console.log(err)
  }
}