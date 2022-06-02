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
        justify-content: center;
    }
    button {
    font-size: 45px;
    border: none;
    background: transparent;
    cursor: pointer;
    position: fixed;
            right: 0px; 
            padding: 2px;
    }
    button:hover {
    transform: scale(1.2);
    }
    .title{
        position: fixed;
            left: 0px; 
            padding: 12px;

    }
</style>

<div class="nav">
    <div class="title">{ $UserStore.name }</div>
    <div class="tabs is-large">
        <ul>
            {#each $SummaryStore as summary, index}
            <li>{#if summary._id}
                <!-- svelte-ignore a11y-missing-attribute -->
                <li><a>Completadas  { summary.total }</a></li>
                {:else}
                <!-- svelte-ignore a11y-missing-attribute -->
                <li><a>Incompletas  { summary.total }</a></li>
                {/if}
            </li>
            {/each}
        </ul>
    </div>
   
    <button on:click={ logout }>🚪</button>
   
</div>

