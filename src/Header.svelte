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

</style>

<header>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p class="navbar-item">Svelte todo app</p>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start" />
      <div class="nav-bar-end">
        {#if user}
          <button on:click={logout} class="button navbar-item">Log out</button>
        {/if}
      </div>
    </div>
  </nav>
</header>
