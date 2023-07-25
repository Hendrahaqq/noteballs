<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{note.content}}
                <div class="has-text-right mt-2 has-text-grey-light">
                    <small>{{ charactersLength }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink :to="`/edit/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
            <a href="#" @click.prevent="storeNotes.deleteNote(note.id)" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>

<script setup>
    import {
        computed
    } from 'vue'
    import { useNoteStore } from '@/stores/NoteStore';

    const storeNotes = useNoteStore()

    const props = defineProps({
        note: {
            type: Object,
            required: true
        }
    })
    const emit = defineEmits(['deleteClicked'])
    const charactersLength = computed(() => {
        let length = props.note.content.length
        let description = length > 1 ? "characters" : "character"
        return length + " " + description
    })
    // const handleDeleteClicked = () => {
    //     emit('deleteClicked', props.note.id)
    // }
</script>