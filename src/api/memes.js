import { MEME_URL } from "../global/contants";
import   Axios  from 'axios'

export const getMeme = async ()=>{
  try {
    const result = await Axios.get(`${MEME_URL}`)
    return result
  } catch (error) {
    return null
  }
}