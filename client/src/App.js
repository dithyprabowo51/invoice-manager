import React from 'react'
import './App.css'

// Components
import Sidebar from './components/sidebar/Sidebar.js'
import Navbar from './components/navbar/Navbar.js'

// Containers
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

// Router
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <nav>
          <Navbar />
        </nav>
        <section className="pb-5">
          <Switch>
            <Route path="/partner">
              <Partner />
            </Route>
            <Route path="/sales-invoice/add">
              <AddSalesInvoice />
            </Route>
            <Route path="/purchase-invoice/add">
              <AddPurchaseInvoice />
            </Route>
            <Route path="/sales-invoice">
              <SalesInvoice />
            </Route>
            <Route path="/purchase-invoice">
              <PurchaseInvoice />
            </Route>
            <Route path="/invoice/:id">
              <DetailInvoice />
            </Route>
            <Route path="/receive-payment/add">
              <AddReceivePayment />
            </Route>
            <Route path="/send-payment/add">
              <AddSendPayment />
            </Route>
            <Route path="/receive-payment">
              <ReceivePayment />
            </Route>
            <Route path="/send-payment">
              <SendPayment />
            </Route>
            <Route path="/payment/:id">
              <DetailPayment />
            </Route>
          </Switch>
        </section>
      </main>
    </div>
  );
}

export default App;
