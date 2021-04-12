import axios from '../../../lib/axios.js'

export const fetchPartners = payload => async dispatch => {
  try {
    dispatch({ type: 'LOADING/SET_ISLOADING', data: true })
    const { data } = await axios({
      url: '/partners',
      method: 'GET',
      headers: { access_token: localStorage.getItem('access_token') },
      params: {
        page: payload?.page,
        name: payload?.name,
        type: payload?.type,
        _id: payload?._id,
        phone: payload?.phone,
        city: payload?.city,
        email: payload?.email,
      }
    })
    dispatch({ type: 'PARTNER/SET_PARTNERS', data: data.data })
    dispatch({ type: 'LOADING/SET_ISLOADING', data: false })
  } catch (err) {
    console.log(err)
  }
}