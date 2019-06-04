<script>
  import TodoItem from "./TodoItem.svelte";
  import AddTodo from "./AddTodo.svelte";

  import { Firestore } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  const query = Firestore.collection("todos");
  const todos = collectionData(query, "id").pipe(startWith([]));

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
  {#each $todos as todo}
    <TodoItem {...todo} on:delete={deleteTodo} on:toggle={toggleTodo} />
  {/each}
</ul>
<hr />
<AddTodo on:add={addTodo} />
