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
   
    let cates = [
        { name: "Casa" },
        { name: "Trabajo" },
        { name :"Universidad" }
    ];
    let etis = [
        { name: "Despensa"},
        { name: "Jardin"},
        { name: "Garage"},
        { name: "Pendientes"},
        { name: "Oficina"},
        { name: "Recursos Humanos"},
        { name: "Tarea"},
        { name: "Proyecto"},
        { name: "Examen"}
    ];
   
  $: data.label = etis;
  $: data.category = cates;
</script>

<Form on:submit={ createTask } { loading } >

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.name } label="Nombre de la tarea" placeholder="Ingrese el nombre de la tarea" icon="book" />
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <label style="font-weight: bold;"> 
                Fecha de término
                <input type=date bind:value={ data.duedate}/>
            </label> 
        </div>
    </div>

    <div class="columns">
        <div class="column">
            <label for="c" style="font-weight: bold;">Categoria</label>
            <br>
            <label><input type=radio bind:group={cates} value={"Casa"}>Casa</label>
            <br>
            <label><input type=radio bind:group={cates} value={"Trabajo"}>Trabajo</label>
            <br>
            <label><input type=radio bind:group={cates} value={"Universidad"}>Universidad</label>
            <l on:click={() => cates = cates.name}></l>
        </div>
   

        <div class="column">
            <label for="c" style="font-weight: bold;">Etiqueta</label>
            <br>

            {#if cates === "Casa"}
            <label><input type=radio bind:group={etis} value={"Despensa"}>Despensa</label>
            <br>
            <label><input type=radio bind:group={etis} value={"Jardin"}>Jardin</label>
            <br>
            <label><input type=radio bind:group={etis} value={"Garage"}>Garage</label>
            <l on:click={() => etis = etis.name}></l>
    
            {:else if cates === "Trabajo"}
            <label><input type=radio bind:group={etis} value={"Pendientes"}>Pendientes</label>
            <br>
            <label><input type=radio bind:group={etis} value={"Oficina"}>Oficina</label>
            <br>
            <label><input type=radio bind:group={etis} value={"Recursos Humanos"}>Recursos Humanos</label>
            <l on:click={() => etis = etis.name}></l>

            {:else if cates === "Universidad"}
            <label><input type=radio bind:group={etis} value={"Tarea"}>Tarea</label>
            <br>
            <label><input type=radio bind:group={etis} value={"Proyecto"}>Proyecto</label>
            <br>
            <label><input type=radio bind:group={etis} value={"Examen"}>Examen</label>
            <l on:click={() => etis = etis.name}></l>
            
            {:else}
                <p>Elija una categoria para visualizar etiquetas</p>
            {/if}
        </div>

    </div>

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.description } label="Descripción de la tarea" placeholder="Ingrese la descripción de la tarea" icon="info-circle" />
        </div>
    </div>
    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>