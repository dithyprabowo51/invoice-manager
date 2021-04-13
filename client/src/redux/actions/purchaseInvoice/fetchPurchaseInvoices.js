import axios from '../../../lib/axios.js'

export const fetchPurchaseInvoices = payload => async dispatch => {
  try {
    const invoices = await axios({
      url: '/invoices'
    })
  } catch (err) {
    console.log(err)
  }
}