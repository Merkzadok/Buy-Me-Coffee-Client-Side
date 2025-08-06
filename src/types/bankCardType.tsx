export type BankCardPostDataType = {
  selectCountry: string;
  name: string;
  lastName: string;
  cardNumber: string;
  CVC: string;
  expiryDate: string;
};

export type BankCardInfoWithoutExpiry = {
  selectCountry: string;
  name: string;
  lastName: string;
  cardNumber: string;
  CVC: string;
  year:string;
  month:string
};

// {
//     "id": 5,
//     "country": "China",
//     "firstName": "bankHoyr",
//     "lastName": "bankHOYRRR",
//     "cardNumber": "8766453453485435",
//     "expiryDate": "2029-06-01T00:00:00.000Z",
//     "CVC": 1234,
//     "userId": 15,
//     "createdAt": "2025-08-06T09:04:00.486Z",
//     "updatedAt": "2025-08-06T09:04:00.486Z"
// }

export type BankCardInfoType ={
  id:number;
  country:string;
  firstName:string;
  lastName:string;
  cardNumber:string;
  expiryDate:string;
  CVC:string;
  userId:number;
  createdAt:string;
  updatedAt:string
}