import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export const getChefs = async () => {
  return await axios.get(`${BASE_URL}/chefs`)
}

export const getChef = async (id) => {
  return await axios.get(`${BASE_URL}/chef/${id}`)
}

export const getRecipes = async () => {
  return await axios.get(`${BASE_URL}/recipes`)
}

export const getRecipe = async (id) => {
  return await axios.get(`${BASE_URL}/receita/${id}`)
}

export const getRecipesByCategory = async (id) => {
  // this id is of a category
  // will be used in filters
  return await axios.get(`${BASE_URL}/recipes/${id}`)
}

export const getCategories = async () => {
  return await axios.get(`${BASE_URL}/categories`)
}

export const getCategory = async (id) => {
  return await axios.get(`${BASE_URL}/category/${id}`)
}

export const getHighlights = async () => {
  return await axios.get(`${BASE_URL}/highlights`)
}

export const getHighlight = async (id) => {
  return await axios.get(`${BASE_URL}/highlight/${id}`)
}
