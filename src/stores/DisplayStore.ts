import { createContext } from "react"


interface IStore {
  name: string,
  count: number,
  displayCovidMessage: boolean,
  inc: () => void,
  exitCovidMessage: () => void,
}


export const createStore = () => {
  return { 
    name: 'Mobx Example',
    count: 0,
    displayCovidMessage: true,

    inc(){
      this.count += 1
    },

    exitCovidMessage(){
      this.displayCovidMessage = false
    }
  }
}


export const StoreContext = createContext<IStore | null>(null)