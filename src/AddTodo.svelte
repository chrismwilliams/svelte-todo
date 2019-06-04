<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let task = "";

  function addTodo() {
    if (!task || task == "") return;
    dispatch("add", {
      task
    });
    task = "";
  }
</script>

<style>
  .container {
    margin-top: 3rem;
  }
</style>

<div class="container">
  <h2 class="title">Add Todo</h2>
  <form id="task-form" on:submit|preventDefault={addTodo}>
    <div class="field">
      <label class="label" for="todo">New task</label>
      <div class="control">
        <input
          class="input"
          id="todo"
          type="text"
          placeholder="New task"
          bind:value={task}
          required />
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button
          class="button is-primary has-text-weight-semibold"
          type="submit">
          Add Todo
        </button>
      </div>
    </div>
  </form>
</div>
