import { generate } from 'short-uuid';

import { BillingInfo } from '../types/billingInfo';
import { CustomerInfo } from '../types/customerInfo';
import { OrderDetails } from '../types/orderDetails';
import { ShippingInfo } from '../types/shippingInfo';
import { Transaction } from '../types/transaction';

interface TransactionData {
  transaction: Partial<Transaction>;
  billing_info: Partial<BillingInfo>;
  shipping_info: Partial<ShippingInfo>;
  customer_info: Partial<CustomerInfo>;
  order_details: Partial<OrderDetails>;
}

export const transactionData: TransactionData = {
  transaction: {
    request_id: generate(),
    notification_url: "https://www.paynamics.com/notify",
    response_url: "https://www.paynamics.com/response",
    cancel_url: "https://www.paynamics.com/cancel",
    pchannel: "",
    collection_method: "single_pay",
    payment_notification_status: "1",
    payment_notification_channel: "1",
    amount: "101.50",
    currency: "PHP",
    trx_type: "sale",
  },
  billing_info: {
    billing_address1: "First Street",
    billing_address2: "H.V. dela Costa Street",
    billing_city: "Makati",
    billing_state: "Metro Manila",
    billing_country: "PH",
    billing_zip: "1227"
  },
  shipping_info: {
    shipping_address1: "First Street",
    shipping_address2: "",
    shipping_city: "Quezon City",
    shipping_state: "Metro Manila Area",
    shipping_country: "PH",
    shipping_zip: "1229"
  },
  customer_info: {
    fname: "Jan",
    lname: "Dae",
    mname: "",
    email: "jandae@gmal.com",
    phone: "09171234567",
    mobile: "09171234567",
    dob: "",
  },
  order_details: {
    orders: [
      {
        itemname: "Test Product",
        quantity: 1,
        unitprice: "101.50",
        totalprice: "101.50"
      }
    ],
    subtotalprice: "101.50",
    shippingprice: "0.00",
    discountamount: "0.00",
    totalorderamount: "101.50"
  }
}