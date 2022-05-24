<script>

    import { navigateTo } from 'svelte-router-spa'
    import TeachersService from '../$services/teachers.service'

    import InputPassword from '../$componentes/input.password.svelte'
    import Input from '../$componentes/input.svelte'
    import Form from '../$componentes/form.svelte'

    let data = {}
    let loading = false
    let error = null

    async function teacherLogin() {
        
        loading = true
        const resp = await TeachersService.teacherLogin(data)
        loading = false

        if(resp.error)
            return error = resp.error.message

        const token = resp.data.session.token
        localStorage.setItem('token', token)
        localStorage.setItem('teacher',  JSON.stringify(resp.data.teacher) )

        navigateTo('tasks')
    }

</script>

<Form on:submit={ teacherLogin } loading={ loading } >
    <div class="columns">
        <div class="column">
            <Input bind:value={ data.email } label="Correo" placeholder="Ingrese correo" />
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <InputPassword bind:value={ data.password } />
        </div>
    </div>
    {#if error}
        <div class="notification">{ error }</div>
    {/if}
</Form>