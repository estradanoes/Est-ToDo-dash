<script>

    import { TaskStore } from '../stores'

</script>

{#if $TaskStore}

    <div class="columns">
        <div class="column">
            <div class="title is-4">Nombre</div>
            <div class="subtitle is-5">{ $TaskStore.name }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Fecha de término</div>
            <div class="subtitle is-5">{ $TaskStore.duedate }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Categoria</div>
            <div class="subtitle is-5">{ $TaskStore.category }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Descripción</div>
            <div class="subtitle is-5">{ $TaskStore.description }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Etiquetas</div>
            <div class="subtitle is-5">{ $TaskStore.label }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Estatus</div>
            <div class="subtitle is-5">
                {#if $TaskStore.status}
                    <p>Tarea completada</p>
                {:else}
                    <p>Tarea por completar</p>
                {/if}
            
            </div>
        </div>
    </div>
{/if}