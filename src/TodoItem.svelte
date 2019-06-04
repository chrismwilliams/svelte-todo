<script>
  export let id;
  export let name;
  export let complete;

  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  function toggle() {
    dispatch("toggle", {
      id,
      complete: !complete
    });
  }

  function remove() {
    dispatch("delete", { id });
  }
</script>

<style>
  .complete {
    text-decoration: line-through;
    color: crimson;
  }
</style>

<h3 class:complete>{name}</h3>

<button on:click={toggle} class="button">
  Mark {complete ? 'Incomplete' : 'Complete'}
</button>

<button on:click={remove} class="button">Delete</button>
