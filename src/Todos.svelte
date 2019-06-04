<script>
  import TodoItem from "./TodoItem.svelte";
  import AddTodo from "./AddTodo.svelte";

  import { onMount } from "svelte";
  import { Firestore } from "./firebase";

  let todos = [];

  onMount(() => {
    const ref = Firestore.collection("todos");

    ref.onSnapshot(snapshot => {
      todos = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
    });
  });

  function addTodo(event) {
    const { task } = event.detail;
    //add to db
    Firestore.collection("todos").add({ name: task, complete: false });
  }

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

<ul class="container">
  {#each todos as todo}
    <TodoItem {...todo} on:delete={deleteTodo} on:toggle={toggleTodo} />
  {/each}
</ul>
<hr />
<AddTodo on:add={addTodo} />
