import { filter, reject } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";
// utils
// import axios from "../../utils/axios";
// import { orders } from '../../utils/mock-data/orders';
// ----------------------------------------------------------------------

const initialState = {
  data: [],
  level: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  refresh: false,
  species: [],
  count: null,
  customers: [],
  error: false,
  monsters: [],
  skip: 0,
  limit: 10,
  //   {
  //     id: "0",
  //     name: "drago",
  //     level: 22,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "1",
  //     name: "drago",
  //     level: 33,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "2",
  //     name: "drago",
  //     level: 55,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "3",
  //     name: "drago",
  //     level: 14,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "4",
  //     name: "Malfoi",
  //     level: 14,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "0",
  //     name: "drago",
  //     level: 22,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "1",
  //     name: "drago",
  //     level: 33,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "2",
  //     name: "drago",
  //     level: 55,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "3",
  //     name: "drago",
  //     level: 14,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "4",
  //     name: "Malfoi",
  //     level: 14,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "5",
  //     name: "drago",
  //     level: 22,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "6",
  //     name: "drago",
  //     level: 33,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "7",
  //     name: "drago",
  //     level: 55,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "8",
  //     name: "drago",
  //     level: 14,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  //   {
  //     id: "9",
  //     name: "Malfoi",
  //     level: 14,
  //     create: new Date("2017-01-03"),
  //     type: {
  //       species: "kafshe",
  //       subSpecies: "subKafshe",
  //     },
  //   },
  // ],
  monster: {},
  items: [],
  invoices: [],
  singleInvoice: [],
  countries: [
    { name: "Afghanistan", code: "AF" },
    { name: "land Islands", code: "AX" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "AndorrA", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Aruba", code: "AW" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bermuda", code: "BM" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Bouvet Island", code: "BV" },
    { name: "Brazil", code: "BR" },
    { name: "British Indian Ocean Territory", code: "IO" },
    { name: "Brunei Darussalam", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Cape Verde", code: "CV" },
    { name: "Cayman Islands", code: "KY" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Christmas Island", code: "CX" },
    { name: "Cocos (Keeling) Islands", code: "CC" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" },
    { name: "Congo, The Democratic Republic of the", code: "CD" },
    { name: "Cook Islands", code: "CK" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Ethiopia", code: "ET" },
    { name: "Falkland Islands (Malvinas)", code: "FK" },
    { name: "Faroe Islands", code: "FO" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "French Guiana", code: "GF" },
    { name: "French Polynesia", code: "PF" },
    { name: "French Southern Territories", code: "TF" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Gibraltar", code: "GI" },
    { name: "Greece", code: "GR" },
    { name: "Greenland", code: "GL" },
    { name: "Grenada", code: "GD" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Guam", code: "GU" },
    { name: "Guatemala", code: "GT" },
    { name: "Guernsey", code: "GG" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Heard Island and Mcdonald Islands", code: "HM" },
    { name: "Holy See (Vatican City State)", code: "VA" },
    { name: "Honduras", code: "HN" },
    { name: "Hong Kong", code: "HK" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran, Islamic Republic Of", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Isle of Man", code: "IM" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jersey", code: "JE" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Korea, Republic of", code: "KR" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libyan Arab Jamahiriya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Macao", code: "MO" },
    { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Martinique", code: "MQ" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mayotte", code: "YT" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia, Federated States of", code: "FM" },
    { name: "Moldova, Republic of", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Montserrat", code: "MS" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "Netherlands Antilles", code: "AN" },
    { name: "New Caledonia", code: "NC" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "Niue", code: "NU" },
    { name: "Norfolk Island", code: "NF" },
    { name: "Northern Mariana Islands", code: "MP" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestinian Territory, Occupied", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Pitcairn", code: "PN" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Puerto Rico", code: "PR" },
    { name: "Qatar", code: "QA" },
    { name: "Reunion", code: "RE" },
    { name: "Romania", code: "RO" },
    { name: "Russian Federation", code: "RU" },
    { name: "RWANDA", code: "RW" },
    { name: "Saint Helena", code: "SH" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Pierre and Miquelon", code: "PM" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Georgia and the South Sandwich Islands", code: "GS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Svalbard and Jan Mayen", code: "SJ" },
    { name: "Swaziland", code: "SZ" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syrian Arab Republic", code: "SY" },
    { name: "Taiwan, Province of China", code: "TW" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania, United Republic of", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tokelau", code: "TK" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Turks and Caicos Islands", code: "TC" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "United States Minor Outlying Islands", code: "UM" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Viet Nam", code: "VN" },
    { name: "Virgin Islands, British", code: "VG" },
    { name: "Virgin Islands, U.S.", code: "VI" },
    { name: "Wallis and Futuna", code: "WF" },
    { name: "Western Sahara", code: "EH" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" },
  ],
  selectedInvoice: [],
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getSpeciesSuccess(state, action) {
      state.species = { ...action.payload };
    },
    getMonstersSuccess(state, action) {
      state.monsters = action.payload.monsters;
      state.count = action.payload.count;
    },
    changeRefresh(state, action) {
      state.refresh = !state.refresh;
    },
    addata(state, action) {
      const product = action.payload;
      state.data = [...state.data, product];
    },
    setSkip(state, action) {
      state.skip = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
    createData(state, action) {
      const product = action.payload;
      state.data.push(product);
      window.localStorage.setItem("data", JSON.stringify(state.data));
    },
    getData(state) {
      const data = window.localStorage.getItem("data");
      const flex = JSON.parse(data);
      if (flex !== null) state.data = flex;
    },
    createInoices(state, action) {
      const product = action.payload;
      state.invoices = [...state.invoices, product];
      window.localStorage.setItem("invoices", JSON.stringify(state.invoices));
    },
    addData(state, action) {
      const product = action.payload;
      state.singleInvoice = [...state.singleInvoice, product];
    },
    getInvoicesFromStorage(state) {
      const data = window.localStorage.getItem("invoices");
      const flex = JSON.parse(data);
      if (flex !== null) state.invoices = flex;
    },
    deleteInvoiceByID(state, action) {
      const product = action.payload;
      state.invoices = reject(state.invoices, { id: product });
      window.localStorage.setItem("invoices", JSON.stringify(state.invoices));
    },
    clearSingleinvoice(state, action) {
      state.singleInvoice = [];
    },
    editInvoice(state, action) {
      const { id, newStatus } = action.payload;
      const newArr = state.invoices.map((obj) => {
        if (obj.id === id) {
          return { ...obj, status: newStatus };
        }

        return obj;
      });
      state.invoices = newArr;

      window.localStorage.setItem("invoices", JSON.stringify(state.invoices));
    },
    deleteInvoiceItemsByID(state, action) {
      const product = action.payload;
      state.singleInvoice = reject(state.singleInvoice, { id: product });
    },
    addCustomers(state, action) {
      const product = action.payload;
      state.customers = [...state.customers, product];
      window.localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    clearCustomers(state, action) {
      state.customers = [];
      window.localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    deleteCustomersByID(state, action) {
      const product = action.payload;
      state.customers = reject(state.customers, { id: product });
      window.localStorage.setItem("customers", JSON.stringify(state.customers));
    },

    addFakeItems(state) {
      state.items = [
        { id: 0, number: "546454a", title: "glasses", price: 150 },
        { id: 1, number: "32423423", title: "shoes", price: 300 },
        { id: 2, number: "4234524", title: "phone", price: 100 },
        { id: 3, number: "4245224", title: "book", price: 80 },
        {
          id: 4,
          number: "42547524",
          title: "tshirt",
          price: 200,
        },
        { id: 5, number: "4353566", title: "jeans", price: 40 },
        {
          id: 6,
          number: "45234245",
          title: "pants",
          price: 130,
        },
        { id: 7, number: "7586732", title: "sun glasses", price: 270 },
        {
          id: 8,
          number: "43736532",
          title: "tv",
          price: 400,
        },
      ];
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    clearItems(state, action) {
      state.items = [];
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    deleteItemsByID(state, action) {
      const product = action.payload;
      state.items = reject(state.items, { id: product });
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    addItems(state, action) {
      const product = action.payload;
      state.items = [...state.items, product];
      window.localStorage.setItem("items", JSON.stringify(state.items));
    },
    addFakeCustomers(state) {
      state.customers = [
        { id: 0, number: "546454a", name: "Jon Adams", country: "Albania" },
        {
          id: 1,
          number: "4342423432",
          name: "Cersei Loss",
          country: "Albania",
        },
        { id: 2, number: "4234524", name: "Jaime Derulo", country: "Albania" },
        { id: 3, number: "4245224", name: "Arya Grande", country: "Albania" },
        {
          id: 4,
          number: "42547524",
          name: "Daenerys Conte",
          country: "Albania",
        },
        { id: 5, number: "324323", name: "Alexia Ferara", country: "Albania" },
        {
          id: 6,
          number: "45234245",
          name: "Ferrara Donis",
          country: "Albania",
        },
        { id: 7, number: "7586732", name: "Marco Rossini", country: "Albania" },
        {
          id: 8,
          number: "43736532",
          name: "Harvey hedley",
          country: "Albania",
        },
      ];
      window.localStorage.setItem("customers", JSON.stringify(state.customers));
    },
    getdataFromStorage(state) {
      const data = window.localStorage.getItem("customers");
      const flex = JSON.parse(data);
      if (flex !== null) state.customers = flex;
    },

    getItemsFromStorage(state) {
      const data = window.localStorage.getItem("items");
      const flex = JSON.parse(data);
      if (flex !== null) state.items = flex;
    },

    clearData(state) {
      state.data = [];
      state.customers = [];
      state.invoices = [];
      state.singleInvoice = [];
      state.items = [];

      localStorage.clear();
    },
    hasError(state, action) {
      state.error = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  getSpeciesSuccess,
  getMonstersSuccess,
  changeRefresh,
  setLimit,
  setSkip,
  adddata,
  deleteNote,
  editNote,
  getCategory,
  getdataFromStorage,
  clearData,
  fakedata,
  addCustomers,
  addFakeCustomers,
  addFakeItems,
  clearCustomers,
  deleteCustomersByID,
  clearItems,
  addItems,
  deleteItemsByID,
  getItemsFromStorage,
  addData,
  deleteInvoiceItemsByID,
  createInoices,
  getInvoicesFromStorage,
  deleteInvoiceByID,
  editInvoice,
  clearSingleinvoice,
  createData,
  getData,
  hasError,
} = slice.actions;

// ----------------------------------------------------------------------

export async function createMonster(values) {
  console.log("sssssss", values);
  const response = await axiosInstance.post("/api/monsters", values);
}
export function getSpecies() {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("/api/species");
      dispatch(slice.actions.getSpeciesSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
export async function createRandom(values) {
  const response = await axiosInstance.post("/api/monsters/random", values);
}
export function getMonsters(skip, limit) {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `/api/monsters/?skip=${skip}&limit=${limit}`
      );
      dispatch(slice.actions.getMonstersSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// export async function deleteMonsterById(id) {
//   return axiosInstance.delete(`/api/monsters/${id}`);
// }
// export function deleteMonsterById(id) {
//   return async (dispatch) => {
//     try {
//       await axiosInstance.delete(`/api/monsters/${id}`);
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }
export async function deleteMonsterById(id) {
  const response = await axiosInstance.delete(`/api/monsters/${id}`);
}
