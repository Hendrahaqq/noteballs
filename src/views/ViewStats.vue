<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ notesStore.totalNoteCounts }}</td>
                </tr>
                <tr>
                    <td>Number of Characters (off all notes)</td>
                    <td>{{ notesStore.totalCharacterCounts }}</td>
                </tr>

            </tbody>
        </table>
    </div>
</template>
<script setup>
import {ref} from 'vue'
 import { useNoteStore } from '@/stores/NoteStore'

 const notesStore = useNoteStore()

</script>