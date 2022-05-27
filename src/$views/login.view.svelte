<script>
    import UserCreate from '../users/user.create.svelte'
    import UserLogin from '../users/user.login.svelte'

</script>

<img src="https://picsum.photos/1600/300" alt="">

<div class="container">
    <div class="columns">
        
        <div class="column is-4">
            <br>
            <div class="title">Iniciar Sesión</div>
            <br>
            <UserLogin />
         </div>

         <div class="column is-offset-one-quarter">
            <div class="title">Registrate</div>
             <UserCreate />
         </div>
    </div>
</div>
