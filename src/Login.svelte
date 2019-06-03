<script>
  import { getContext } from "svelte";
  import { Auth } from "./firebase";

  const { setUser } = getContext("user");

  function handler(e) {
    const username = e.target[0].value;
    const password = e.target[1].value;
    if (!username || username == "" || !password || password == "") {
      return;
    }
    login(username, password);
  }

  async function login(username, password) {
    const credentials = await Auth.signInWithEmailAndPassword(
      username,
      password
    );
    setUser(credentials.user);
  }
</script>

<style>

</style>

<div class="section">
  <div class="column">
    <div class="section-heading">
      <h2 class="title is-2 has-black-text has-text-centered">Login</h2>
    </div>
  </div>
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <form on:submit|preventDefault={handler}>
        <div class="box">
          <div class="field">
            <label class="label" for="username">Username</label>
            <div class="control">
              <input
                id="username"
                class="input"
                type="email"
                name="username"
                required />
            </div>
          </div>
          <div class="field">
            <label class="label" for="password">Password</label>
            <div class="control">
              <input
                id="password"
                class="input"
                type="password"
                name="password"
                required />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-primary is-outlined" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
