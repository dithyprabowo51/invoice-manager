import React from 'react'
import './App.css'

// Components
import Sidebar from './components/sidebar/Sidebar.js'
import Navbar from './components/navbar/Navbar.js'

// Containers
import Login from './containers/login/Login.js'
import Partner from './containers/partner/Partner.js'
import SalesInvoice from './containers/salesInvoice/SalesInvoice.js'
import AddSalesInvoice from './containers/salesInvoice/addSalesInvoice/AddSalesInvoice.js'
import DetailInvoice from './containers/detailInvoice/DetailInvoice.js'
import PurchaseInvoice from './containers/purchaseInvoice/PurchaseInvoice.js'
import AddPurchaseInvoice from './containers/purchaseInvoice/addPurchaseInvoice/AddPurchaseInvoice.js'
import ReceivePayment from './containers/payment/receivePayment/ReceivePayment.js'
import AddReceivePayment from './containers/payment/receivePayment/addRecievePayment/AddReceivePayment.js'
import DetailPayment from './containers/detailPayment/DetailPayment.js'
import SendPayment from './containers/payment/sendPayment/SendPayment.js'
import AddSendPayment from './containers/payment/sendPayment/addSendPayment/AddSendPayment.js'
import Product from './containers/product/Product.js'

// Router
import { useLocation } from 'react-router-dom'
import { GuardProvider, GuardedRoute } from 'react-router-guards';

const requireLogin = (to, from, next) => {
  if (to.location.pathname !== '/') {
    if (localStorage.getItem('access_token')) {
      next()
    } else {
      next.redirect('/')
    }
  } else {
    if (localStorage.getItem('access_token')) {
      next.redirect('/invoicer')
    } else {
      next()
    }
  }
};

function App() {
  const location = useLocation()
  return (
    <div>
      <GuardProvider guards={[requireLogin]}>
        <GuardedRoute exact path="/">
          <Login />
        </GuardedRoute>
        {
          location.pathname !== '/' ?
            <aside>
              <Sidebar />
            </aside>
            :
            null
        }
        <main>
          {
            location.pathname !== '/' ?
              <nav>
                <Navbar />
              </nav>
              :
              null
          }
          <section className="pb-5">
            <GuardedRoute path="/invoicer/partner">
              <Partner />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/sales-inv/add">
              <AddSalesInvoice />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/purchase-inv/add">
              <AddPurchaseInvoice />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/sales-invoice">
              <SalesInvoice />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/purchase-invoice">
              <PurchaseInvoice />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/invoice/:id">
              <DetailInvoice />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/receive-pay/add">
              <AddReceivePayment />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/send-pay/add">
              <AddSendPayment />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/receive-payment">
              <ReceivePayment />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/send-payment">
              <SendPayment />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/payment/:id">
              <DetailPayment />
            </GuardedRoute>
            <GuardedRoute path="/invoicer/product">
              <Product />
            </GuardedRoute>
          </section>
        </main>
      </GuardProvider>
    </div>
  );
}

export default App;
