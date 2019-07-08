<script>
  export let user;

  import { Auth } from "../firebase";

  async function logout() {
    Auth.signOut();
  }
</script>

<style>
  .title {
    margin-bottom: 0 !important;
  }
  img {
    margin-right: 1rem;
  }
  button {
    margin-bottom: 0;
    border: 0;
  }
</style>

<header class="hero is-primary is-bold">
  <div class="hero-body level">
    <span />
    <h1 class="title is-2">
      <img src="./images/svelte.png" alt="svelte logo" class="image is-48x48" />
      To-Do App
    </h1>
    {#if $user}
      <button on:click={logout} class="button">Log out</button>
    {:else}
      <span />
    {/if}
  </div>
</header>
