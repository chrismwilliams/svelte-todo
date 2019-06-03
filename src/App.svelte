<script>
  import Header from "./Header.svelte";
  import Login from "./Login.svelte";
  import Todo from "./Todo.svelte";

  import { onMount, setContext } from "svelte";

  setContext("user", {
    getUser: () => user,
    setUser: newUser => {
      user = newUser;
      if (newUser) {
        getTodos();
      }
    }
  });

  let user = null;
  let todos = [];

  import { Auth } from "./firebase";
  import { Firestore } from "./firebase";

  onMount(async () => {
    user = await Auth.currentUser;
    if (user) {
      getTodos();
    }
  });

  function getTodos() {
    const ref = Firestore.collection("todos");

    ref.onSnapshot(snapshot => {
      console.log(snapshot);
      todos = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(todos);
    });
  }
</script>

<style>
  main {
    padding: 5%;
  }
</style>

<Header {user} />
<main class="content">
  {#if user}
    <h1>My Todos</h1>
    <img src="./assets/svelte.png" alt="" />
    {#each todos as todo}
      <Todo {...todo} />
      <hr />
    {/each}
  {:else}
    <Login />
  {/if}
</main>
