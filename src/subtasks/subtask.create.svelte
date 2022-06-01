<script>
    import { createEventDispatcher } from 'svelte'
    import { TasksStore, TaskStore, SubtaskStore, SubtasksStore} from '../stores'

    import SubtasksService from '../$services/subtasks.service'


    import Form from '../$componentes/form.svelte'
    import Input from '../$componentes/input.svelte'


    const dispatch = createEventDispatcher()

    let data = {
        taskId: $TaskStore._id
    }
    let loading = false
    let error = null

    async function createSubtask() {

        loading = true
        const resp = await SubtasksService.createSubtask(data)
        loading = false

        if(resp.error)
            return error = resp.error.message

            SubtasksStore.append(resp.data)

        dispatch('created', resp.data)
        
    }

    let query = {}


</script>

{#if $TaskStore}    
<div class="subtitle">Nombre de la nueva subtarea de { $TaskStore.name }</div>
{/if}

<Form on:submit={ createSubtask } { loading } >

<!-- Nombre de la tarea -->
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.name }  placeholder="Ingrese el nombre de la nueva subtarea" icon="book" />
        </div>
    </div>

    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>