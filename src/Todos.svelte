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

  function deleteTodo(event) {
    const { id } = event.detail;
    Firestore.collection("todos")
      .doc(id)
      .delete();
  }

  function toggleTodo(event) {
    const { id, complete } = event.detail;
    Firestore.collection("todos")
      .doc(id)
      .update({ complete });
  }
</script>

<style>

</style>

{#each todos as todo}
  <TodoItem {...todo} on:delete={deleteTodo} on:toggle={toggleTodo} />
  <hr />
{/each}
