
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('storeNotes', {
  state: () => {
    return {
          notes: [
            {
              id: 1,
              content: 'content'
            }
           ],
          
        }
  },
  actions: {
    addNote(newNote)  {

      let note = {
          id: Math.floor(Math.random() * 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
          content: newNote.value
      }

      this.notes.unshift(note)
      
    },
    deleteNote(idToDelete){
      this.notes = this.notes.filter(note => note.id!== idToDelete)
  } 
  }
})
