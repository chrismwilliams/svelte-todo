<script>
  export let id;
  export let name;
  export let created;
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
    color: turquoise;
  }
  .box {
    display: flex;
    align-items: center;
  }
  .toggle {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
  p {
    margin: 0 !important;
    padding: 0 2rem;
  }
  .delete {
    margin-left: auto;
    background-color: lightcoral;
  }
  .delete:hover {
    background-color: crimson;
  }
</style>

<li class="box" in:fly={{ x: 900, duration: 500 }} out:fade>
  <button on:click={toggle} class="toggle"> {complete ? '❌' : '✅'} </button>
  <p class:complete class="is-size-5 has-text-weight-semibold ">{name}</p>

  <button on:click={remove} class="delete">🗑</button>
</li>
