<script>

import { navigateTo } from 'svelte-router-spa'
function login(){
        navigateTo('login')
    }
</script>

<img src="https://picsum.photos/1850/700" alt="">
<main>
	<h1>To-Do List</h1>
	<p>Tu asistente #1 de organización</p>
    <br>
    <button on:click={login}>Iniciar</button>
</main>

<style>

    button{
        background-color: transparent;
        border-color: #ff3e00;
        border-radius: 19px;
        border-width: 1px;
        font-size: 25px;
        padding-bottom: 5px;

    }
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 5em;
		font-weight: 100;
	}
    p {
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 50;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>