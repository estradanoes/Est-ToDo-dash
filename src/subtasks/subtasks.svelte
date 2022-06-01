<script>
    import { TaskStore, SubtaskStore, SubtasksStore} from '../stores'
    import SubtaskService from '../$services/subtasks.service'

    import Button from '../$componentes/button.svelte'
    import Input from '../$componentes/input.svelte'

    let query = {
        taskId: $TaskStore._id
    }
    let loading = false


    getSubtasks()

    async function getSubtasks() {

        loading = true
        const resp = await SubtaskService.getSubtasks(query)
        loading = false

        if(resp.error)
            return error = resp.error.message

            SubtasksStore.set(resp.data.subtasks)
    }  

</script>

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


{#if $TaskStore}    
<div class="title">Subtareas de { $TaskStore.name }</div>
{/if}

<table class="table is-striped is-fullwidth">
    <thead>
        <tr>
            <th></th>
            <th>Nombre</th>
            <th>Borrar</th>
        </tr>
    </thead>
    <tbody>
        {#each $SubtasksStore as subtask, index}
            <tr>
                <td><input type="checkbox" bind:checked={subtask.status}/></td>
                <td class:checked={subtask.status}>{ subtask.name }</td>
                <td><button on:click={() => SubtaskStore.modalDelete(subtask)}>❌</button></td>

            </tr>
        {/each}
    </tbody>
</table>

<Button on:click={() => SubtaskStore.modalCreate()} text="Añadir nueva subtarea" color="info"/> 

