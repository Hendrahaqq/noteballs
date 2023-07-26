<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            bgColor="link"
            label="Edit Note"
        >
            <template #buttons>
                <button @click="$router.back()" class="button is-link is-light mr-2">Cancel</button>
                <button @click="editNote" :disabled="!noteContent" class="button is-link has-background-link">Save note</button>
            </template>
            

        </AddEditNote>
    </div>
</template>
<script setup>

    import AddEditNote from '../components/Notes/AddEditNote.vue';
    import {ref} from 'vue'
    import { useNoteStore } from '@/stores/NoteStore'
    import {useRoute,useRouter} from "vue-router";

    const route = useRoute();
    const router = useRouter()
    const id = route.params.id;
    const storeNotes = useNoteStore()
    const noteContent = ref(storeNotes.getNote(id).content)

    const editNote = () => {
        storeNotes.editNote(id, noteContent);
        router.back()
    }






</script>