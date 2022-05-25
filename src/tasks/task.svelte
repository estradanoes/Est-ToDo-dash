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
            <div class="title is-4">Fecha de creación</div>
            <div class="subtitle is-5">{ $TaskStore.created }</div>
        </div>
    </div>

{/if}