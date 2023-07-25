<template>
    <div class="notes">
        <!-- <div class="card has-background-success-dark p-4 mb-5">
            <div class="field">
            <div class="control">
                <textarea v-model="newNote" class="textarea" ref="newNoteRef" placeholder="Add a new note"/>
            </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add new note</button>
                </div>
            
            </div>
        </div> -->
        <AddEditNote
            v-model="newNote"
        >
            <template #buttons>
                <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add new note</button>
            </template>
            

        </AddEditNote>

        <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" @deleteClicked="storeNotes.deleteNote" />


        
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import Note from '@/components/Notes/Note.vue'
    import AddEditNote from '@/components/Notes/AddEditNote.vue'
    import { useNoteStore } from '@/stores/NoteStore'
    
    const newNote = ref('')
    // const newNoteRef = ref(null)

    const storeNotes = useNoteStore()
    // const notes = ref([])

    const addNote = () => {

        // let note = {
        //     id: Math.floor(Math.random() * 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
        //     content: newNote.value
        // }

        // notes.value.unshift(note)
        storeNotes.addNote(newNote);
        newNote.value = ''
        // newNoteRef.value.focus()
    }

    // const deleteNote = idToDelete => {
    //         notes.value = notes.value.filter(note => note.id!== idToDelete)
    //     } 
</script>