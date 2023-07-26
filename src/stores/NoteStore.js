
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
           note: {}
          
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
    editNote(id, newNote) {
      this.notes.map(obj => {
        if (obj.id == id) {
          console.log(obj.id == id)
         obj.content = newNote.value;
        }
       })
    },
   
    deleteNote(idToDelete){
      this.notes = this.notes.filter(note => note.id!== idToDelete)
  } 
  },
  getters: {
    getNote(id) {
      return this.note = this.notes.find(note => note.id == id)
    },
    totalNoteCounts: (state) => {
      return state.notes.length
    },
    totalCharacterCounts: (state) => {
      let total = 0;
      for(let i = 0; i < state.notes.length; i++){
        total += state.notes[i].content.length
      }
      return total
    }
  }
})
