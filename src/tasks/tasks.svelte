<script>

    import { TasksStore, TaskStore } from '../stores'

    import TasksService from '../$services/tasks.service'

    import Button from '../$componentes/button.svelte'
    import Input from '../$componentes/input.svelte'
    import Icon from '../$componentes/icon.svelte'

    let query = {}
    let loading = false

    getTasks()

    async function getTasks() {

        loading = true
        const resp = await TasksService.getTasks(query)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.set(resp.data.tasks)
    }

</script>

<div class="columns">
    <div class="column">
        <Input on:enter={ getTasks } bind:value={ query.find } placeholder="Buscar" icon="search" />
    </div>
    <div class="column is-narrow">
        <Button on:click={() => TaskStore.modalCreate()} text="Agregar" color="info" />
    </div>
</div>

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Horas</th>
            <th>Lenguajes</th>
            <th>Fecha</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {#each $TasksStore as task, index}
            <tr>
                <td>{ index + 1 }</td>
                <td>{ task.name }</td>
                <td>{ task.hours }</td>
                <td>{ task.language }</td>
                <td>{ task.created }</td>
                <td>
                    <Icon on:click={() => TaskStore.modalDelete(task)} icon="ban" />
                    <Icon on:click={() => TaskStore.modalRead(task)} icon="eye" />
                    <Icon on:click={() => TaskStore.modalUpdate(task)} icon="edit" />
                </td>
            </tr>
        {/each}
    </tbody>
</table>