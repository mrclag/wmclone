import { createContext } from "react"

import {brands} from '../data/brands'

interface IStore {
  name: string,
  count: number,
  displayCovidMessage: boolean,
  brands: {},
  inc: () => void,
  exitCovidMessage: () => void,
}


export const createStore = () => {
  return { 
    name: 'Mobx Example',
    count: 0,
    displayCovidMessage: true,
    brands: brands,
    

    inc(){
      this.count += 1
    },

    exitCovidMessage(){
      this.displayCovidMessage = false
    }
  }
}


export const StoreContext = createContext<IStore | null>(null)