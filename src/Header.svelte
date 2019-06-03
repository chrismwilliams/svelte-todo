<script>
  export let user;

  import { getContext } from "svelte";
  import { Auth } from "./firebase";

  const { setUser } = getContext("user");

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

<header>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p class="navbar-item has-text-weight-semibold">Svelte To-Do App</p>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start" />
      <div class="nav-bar-end">
        {#if user}
          <div class="navbar-item">
            <button on:click={logout} class="button">Log out</button>
          </div>
        {/if}
      </div>
    </div>
  </nav>
</header>
