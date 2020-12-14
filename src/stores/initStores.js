import NotesStore from './DisplayStore'
import UserStore from './userStore'

export function initStores(){
  const notesStore = new NotesStore()
  const userStore = new UserStore(notesStore)


  return {
    notesStore,
    userStore
  }
}