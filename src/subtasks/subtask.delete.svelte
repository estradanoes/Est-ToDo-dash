<script>

    import { createEventDispatcher } from 'svelte'
    import { SubtaskStore, SubtasksStore } from '../stores'
    import SubtasksService from '../$services/subtasks.service'

    import Form from '../$componentes/form.svelte'

    const dispatch = createEventDispatcher()

    let loading = false
    let error = null

    async function deleteSubtask() {

        loading = true
        const resp = await SubtasksService.deleteSubtask($SubtaskStore._id)
        loading = false

        if(resp.error)
            return error = resp.error.message

            SubtasksStore.remove($SubtaskStore._id)

        dispatch('deleted')
    }

</script>

{#if $SubtaskStore}
    <Form on:submit={deleteSubtask} {loading} >
        <div class="title">¿Seguro que deseas eleminar la tarea?</div>
        <div class="subtitle">{ $SubtaskStore.name }</div>
    </Form>
{/if}
