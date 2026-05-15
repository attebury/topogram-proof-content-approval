<script lang="ts">
  import { PUBLIC_TOPOGRAM_DEMO_PRIMARY_ID as DEMO_GREETING_ID } from "$env/static/public";

  const screens = [
  {
    "id": "greeting_list",
    "title": "Greetings",
    "route": "/greetings",
    "navigable": true
  },
  {
    "id": "greeting_detail",
    "title": "Greeting Details",
    "route": "/greetings/:id",
    "navigable": false
  },
  {
    "id": "greeting_create",
    "title": "Create Greeting",
    "route": "/greetings/new",
    "navigable": true
  }
];
</script>

<main>
  <div class="stack">
    <section class="card hero">
      <div>
        <p class="muted">Generated starter</p>
        <h1>Topogram Starter</h1>
        <p>Generated from Topogram via the `sveltekit` profile and wired to a neutral API, web surface, and database.</p>
      </div>
      <div class="button-row">
        <a class="button-link" href="/greetings">View API route</a>
        {#if DEMO_GREETING_ID}
          <span class="badge">Seed: {DEMO_GREETING_ID}</span>
        {/if}
      </div>
    </section>

    <section class="grid two">
      {#each screens as screen}
        <article class="card">
          <h2>{screen.title}</h2>
          <p class="muted">{screen.route || "Contract-only screen"}</p>
        </article>
      {/each}
    </section>
  </div>
</main>
