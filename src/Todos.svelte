<script>
  import TodoItem from "./TodoItem.svelte";

  import { onMount } from "svelte";
  import { Firestore } from "./firebase";

  let todos = [];

  onMount(() => {
    const ref = Firestore.collection("todos");

    ref.onSnapshot(snapshot => {
      console.log(snapshot);
      todos = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(todos);
    });
  });
</script>

<style>

</style>

{#each todos as todo}
  <TodoItem {...todo} />
  <hr />
{/each}
