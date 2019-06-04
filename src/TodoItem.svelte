<script>
  export let id;
  export let name;
  export let description;
  export let complete;

  import { Firestore } from "./firebase";

  function toggleHandler() {
    const ref = Firestore.doc(`todos/${id}`);
    ref.update({ complete: !complete });
  }

  function deleteHandler() {
    const ref = Firestore.doc(`todos/${id}`);
    ref.delete();
  }
</script>

<style>
  .complete {
    text-decoration: line-through;
    color: crimson;
  }
</style>

<h3 class:complete>{name}</h3>
<p>{description}</p>

<button on:click={toggleHandler} class="button">
  Mark {complete ? 'Incomplete' : 'Complete'}
</button>

<button on:click={deleteHandler} class="button">Delete</button>
