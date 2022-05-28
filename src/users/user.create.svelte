<script>
    import { navigateTo } from 'svelte-router-spa'

    import { createEventDispatcher } from 'svelte'
    import { UsersStore } from '../stores'

    import UsersServices from '../$services/users.service'

    import Form from '../$componentes/form.svelte'
    import Input from '../$componentes/input.svelte'
    import InputPassword from '../$componentes/input.password.svelte'


    const dispatch = createEventDispatcher()

    let data = {}
    let loading = false
    let error = null

    async function userCreate() {

        loading = true
        const resp = await UsersServices.userCreate(data)
        loading = false

        if(resp.error)
            return error = resp.error.message

            UsersStore.append(resp.data)

        dispatch('created', resp.data)

        navigateTo('login')
        location.reload();

    }

</script>

<Form on:submit={ userCreate } { loading } >

    <div class="columns">
        <div class="column">
            <Input bind:value={ data.firstName } label="Nombre" placeholder="Ingrese su nombre" icon="book" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.lastName } label="Apellidos" placeholder="Ingrese sus apellidos" icon="book" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.phone } label="Telefono" placeholder="Ingrese su telefono" icon="book" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.email } label="Correo" placeholder="Ingrese su correo electronico" icon="book" />
        </div>
    </div>
    
    <div class="columns">
        <div class="column">
            <InputPassword bind:value={ data.password } label="Contraseña" placeholder="*************" icon="book" />
        </div>
    </div>


    
    {#if error}
        <div class="notification">{ error }</div>
    {/if}

</Form>