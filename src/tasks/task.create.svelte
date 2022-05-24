<script>

    import { createEventDispatcher } from 'svelte'
    import { TasksStore } from '../stores'

    import TasksService from '../$services/tasks.service'

    import Form from '../$componentes/form.svelte'
    import Input from '../$componentes/input.svelte'

    const dispatch = createEventDispatcher()

    let data = {}
    let loading = false
    let error = null

    async function createTask() {

        loading = true
        const resp = await TasksService.createTask(data)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.append(resp.data)

        dispatch('created', resp.data)
    }

</script>

<Form on:submit={ createTask } { loading } >

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.name } label="Nombre de la tarea" placeholder="Ingrese el nombre de la tarea" icon="book" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.hours } label="Horas de la tarea" placeholder="Ingrese las horas de la tarea" icon="clock" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.description } label="Descripción de la tarea" placeholder="Ingrese la descripción de la tarea" icon="file-signature" />
        </div>
    </div>

    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>