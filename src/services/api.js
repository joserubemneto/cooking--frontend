import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export const getChefs = async () => {
  return await axios.get(`${BASE_URL}/chefs`)
}

export const getRecipes = async () => {
  return await axios.get(`${BASE_URL}/recipes`)
}

export const getCategories = async () => {
  return await axios.get(`${BASE_URL}/categories`)
}

export const getTags = async () => {
  return await axios.get(`${BASE_URL}/highlights`)
}
