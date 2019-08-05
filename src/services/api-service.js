import config from '../config'
const ReactApiKey = process.env.REACT_APP_API_KEY;

const ApiService = {
  getPlants() {
    return fetch(`https://glacial-bastion-84896.herokuapp.com/api/plants`, {
      headers: {
        Authorization: `Bearer ${ReactApiKey}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getPlant(plantId) {
    return fetch(`https://glacial-bastion-84896.herokuapp.com/api/plants/${plantId}`, {
      headers: {
        Authorization: `Bearer ${ReactApiKey}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getFoods() {
    return fetch(`https://glacial-bastion-84896.herokuapp.com/api/foods`, {
      headers: {
        Authorization: `Bearer ${ReactApiKey}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getFood(foodId) {
    return fetch(`https://glacial-bastion-84896.herokuapp.com/api/foods/${foodId}`, {
      headers: {
        Authorization: `Bearer ${ReactApiKey}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getMedicines() {
    return fetch(`https://glacial-bastion-84896.herokuapp.com/api/medicine`, {
      headers: {
        Authorization: `Bearer ${ReactApiKey}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getMedicine(medicineId) {
    return fetch(`https://glacial-bastion-84896.herokuapp.com/api/medicine/${medicineId}`, {
      headers: {
        Authorization: `Bearer ${ReactApiKey}`
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default ApiService