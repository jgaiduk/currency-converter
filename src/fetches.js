import axios from "axios";
const API_URL = 'https://api-qjoa5a5qtq-uc.a.run.app/quotes';

export const requestAmountSource = async (from, to, amount) => {
    return axios.post(API_URL, {
        "source_currency": from,
        "target_currency": to,
        "source_amount": amount.toString()
      });
}

export const requestAmountTarget = async (from, to, amount) => {
    return axios.post(API_URL, {
        "source_currency": from,
        "target_currency": to,
        "target_amount": amount.toString()
      });
}