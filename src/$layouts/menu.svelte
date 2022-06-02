<script>

    import { navigateTo } from 'svelte-router-spa'
       import { UserStore,SummaryStore } from '../stores'

    import Button from '../$componentes/button.svelte'

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigateTo('login')
    }

</script>



<style>
    .nav {
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
        display: flex;
    }
    button {
    font-size: 45px;
    border: none;
    background: transparent;
    cursor: pointer;
    position: fixed;
            right: 0px; 
            padding: 5px;
    }
    button:hover {
    transform: scale(1.2);
    }
    .title{
            left: 0px; 
            padding-top: 15px;
            padding-left: 25px;

    }
</style>

<div class="nav">
    <div class="title">{ $UserStore.name }</div>

   
    <button on:click={ logout }>🚪</button>
   
</div>

