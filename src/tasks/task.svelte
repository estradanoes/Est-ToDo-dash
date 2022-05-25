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
            <div class="title is-4">Horas</div>
            <div class="subtitle is-5">{ $TaskStore.duedate }</div>
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
            <div class="title is-4">Fecha de creación</div>
            <div class="subtitle is-5">{ $TaskStore.created }</div>
        </div>
    </div>

{/if}