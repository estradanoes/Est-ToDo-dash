<script>
    import { TasksStore, TaskStore } from '../stores'

    import TasksService from '../$services/tasks.service'

    import Button from '../$componentes/button.svelte'
    import Input from '../$componentes/input.svelte'

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
        <Button on:click={() => TaskStore.modalCreate()} text="+ Agregar" color="info" />
    </div>
</div>

<style> 
    input[type="checkbox"] {
        size: 120px;
    }
   	.checked {
        /* text-decoration: line-through; */
        opacity: 0.4;
    }
    button {
    border: none;
    background: transparent;
    font-size: 25px;
    cursor: pointer;
  }
  button:hover {
    transform: scale(1.5);
  }
</style> 

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <td></td>
            <th>Nombre</th>
            <th>Fecha de término</th>
            <th>Descripción</th>
            <th>Categoria</th>
        </tr>
    </thead>
    <tbody>
        {#each $TasksStore as task, index}
            <tr>
                <td><input type="checkbox" bind:checked={task.status}/></td>
                <td class:checked={task.status}>{ task.name }</td>
                <td class:checked={task.status}>{ task.duedate}</td>
                <td class:checked={task.status}>{ task.description }</td>
                <td class:checked={task.status}>{ task.category }</td>
                    
                <td><button on:click={() => TaskStore.modalRead(task)}>👀</button></td>
                <td><button on:click={() => TaskStore.modalUpdate(task)}>✏️</button></td>
                <td><button on:click={() => TaskStore.modalDelete(task)}>❌</button></td>

            </tr>
        {/each}
    </tbody>
</table>