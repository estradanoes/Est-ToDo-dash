<script>

    import { navigateTo } from 'svelte-router-spa'
    import { UserStore } from '../stores'

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
        justify-content: space-between;
        align-items: center;
    }
    button {
    font-size: 45px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
    button:hover {
    transform: scale(1.2);
  }

</style>

<div class="nav">
    <div class="title">{ $UserStore.name  }</div>
    <button on:click={ logout }>🚪</button>
</div>