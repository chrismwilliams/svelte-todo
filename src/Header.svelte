<script>
  export let user;

  import { getContext } from "svelte";
  import { Auth } from "./firebase";

  async function logout() {
    Auth.signOut();
  }
</script>

<style>
  button {
    margin-bottom: 0;
    border: 0;
  }
</style>

<header class="hero is-primary is-bold">
  <div class="hero-body level">
    <h1 class="title is-2">Svelte To-Do App</h1>
    {#if $user}
      <button on:click={logout} class="button">Log out</button>
    {/if}
  </div>
</header>
