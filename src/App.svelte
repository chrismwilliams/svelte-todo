<script>
  import Header from "./components/Header.svelte";
  import Login from "./components/Login.svelte";
  import Todos from "./components/Todos.svelte";
  import Footer from "./components/Footer.svelte";

  import { Auth } from "./firebase";
  import { authState } from "rxfire/auth";

  let user = authState(Auth);
</script>

<style>
  main {
    padding: 5%;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css" />
</svelte:head>

<Header {user} />
<main class="content">
  {#if $user}
    <h1 class="title has-text-centered">My Todos</h1>
    <Todos />
  {:else}
    <Login />
  {/if}
</main>
<Footer />
