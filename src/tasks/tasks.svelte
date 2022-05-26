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
   	.checked {
        /* text-decoration: line-through; */
        opacity: 0.4;
    }
    button {
    float: right;
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    color: #dc4f21;
    font-size: 18px;
    cursor: pointer;
  }
  button:hover {
    transform: scale(3);
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
                <td><input type="checkbox" bind:checked={task.checked}/></td>
                <td class:checked={task.checked}>{ task.name }</td>
                <td class:checked={task.checked}>{ task.duedate}</td>
                <td class:checked={task.checked}>{ task.description }</td>
                <td class:checked={task.checked}>{ task.category }</td>
                    
                <td><button on:click={() => TaskStore.modalDelete(task)}>❌</button></td>
                <td><button on:click={() => TaskStore.modalRead(task)}>👀</button></td>
                <td><button on:click={() => TaskStore.modalUpdate(task)}>✏️</button></td>
            </tr>
        {/each}
    </tbody>
</table>