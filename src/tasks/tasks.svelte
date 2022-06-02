<script>
    import { UserStore,TasksStore, TaskStore, SummaryStore} from '../stores'

    import TasksService from '../$services/tasks.service'
    import SummaryService from '../$services/summary.service'


    import Button from '../$componentes/button.svelte'
    import Input from '../$componentes/input.svelte'

    let query = {}
    let loading = false
    let casa = {}
    let trabajo = {}
    let universidad = {}
    let sinCat = {}
       

// Summary
    getSummary()

    async function getSummary() {

        loading = true
        const resp = await SummaryService.getSummary($UserStore._id)
        loading = false

        if(resp.error)
            return error = resp.error.message

        SummaryStore.set(resp.data.suma)

    }

//Actualizar status

    $: $TaskStore 
    let data = {}
    let error = null
    let valStatus = false;
    
    async function updateTask(task) {

        const status= !task.status

            loading = true
            const resp = await TasksService.updateTask(task._id, {status})
            loading = false

            if(resp.error)
                return error = resp.error.message

            TasksStore.replace(resp.data)
    
    }
// Obtener tareas
    getTasks()

    async function getTasks() {

        loading = true
        const resp = await TasksService.getTasks(query)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.set(resp.data.tasks)
    }

    async function getCasa() {
        casa.find = "Casa"
        loading = true
        const resp = await TasksService.getTasks(casa)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.set(resp.data.tasks)
    }

    async function getTrabajo() {
        trabajo.find = "Trabajo"
        loading = true
        const resp = await TasksService.getTasks(trabajo)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.set(resp.data.tasks)
    }

    async function getUniversidad() {
        universidad.find = "Universidad"
        loading = true
        const resp = await TasksService.getTasks(universidad)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.set(resp.data.tasks)
    }

    async function getSinCat() {
        sinCat.find = "Sin categoria"
        loading = true
        const resp = await TasksService.getTasks(sinCat)
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.set(resp.data.tasks)
    }

    async function getAllTasks() {
        loading = true
        const resp = await TasksService.getTasks()
        loading = false

        if(resp.error)
            return error = resp.error.message

        TasksStore.set(resp.data.tasks)
    }


</script>
<!-- Botonera -->
<div class="columns">
    <div class="column is-6">
        <Input on:enter={ getTasks } bind:value={ query.find } placeholder="Buscar" icon="search" />
    </div>
    <div class="column">
        <Button on:click={getAllTasks} text="Mostrar todos" color="info" />
    </div>

    <div class="column">
        <Button on:click={ getCasa } text="Casa" color="primary" />
    </div>
    <div class="column">
        <Button on:click={ getTrabajo } text="Trabajo" color="primary" />
    </div>
    <div class="column">
        <Button on:click={ getUniversidad }  text="Universidad" color="primary" />
    </div>
    <div class="column">
        <Button on:click={ getSinCat }  text="Sin categoria" color="primary" />
    </div>
   
    <div class="column">
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
  emoji-inactivo {
    font-size: 25px;
    opacity: 0.1;
    padding-left: 30px;
  }
  emoji-activo {
    font-size: 25px;
    padding-left: 30px;
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
            <th>Etiqueta</th>
            <th>Recordatorio</th>
            <th>Subtarea</th>
            <th>Visualizar</th>
            <th>Editar</th>
            <th>Borrar</th>
        </tr>
    </thead>
    <tbody>
        {#each $TasksStore as task, index}

            <tr>
                <td><input type="checkbox" bind:checked={task.status} on:click={() => updateTask(task)}/></td>
                <td class:checked={task.status}>{ task.name }</td>
                <td class:checked={task.status}>{ task.duedate}</td>
                <td class:checked={task.status}>{ task.description }</td>
                <td class:checked={task.status}>{ task.category }</td>
                <td class:checked={task.status}>{ task.label }</td>
                <td class:checked={task.status}>{#if task.reminder}
                                                    <emoji-activo>⏰</emoji-activo>
                                                {:else}
                                                <emoji-inactivo>⏰</emoji-inactivo>
                                                {/if} </td>

                <td><button on:click={() => TaskStore.modalSubs(task)}>📝</button></td>
                <td><button on:click={() => TaskStore.modalRead(task)}>👀</button></td>
                <td><button on:click={() => TaskStore.modalUpdate(task)}>✏️</button></td>
                <td><button on:click={() => TaskStore.modalDelete(task)}>❌</button></td>

            </tr>
        {/each}
    </tbody>
</table>