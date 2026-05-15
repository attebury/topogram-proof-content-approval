<script lang="ts">
  const items = [
  {
    "id": "sample-active",
    "title": "Review Queue sample",
    "message": "Review Queue sample",
    "description": "Generated from Topogram UI contract metadata.",
    "category": "sample"
  },
  {
    "id": "sample-completed",
    "title": "Review Queue completed sample",
    "message": "Review Queue completed sample",
    "description": "Second generated row for rendering checks.",
    "category": "sample"
  }
];
</script>

<main>
  <div class="stack">
    <section class="card">
      <p class="muted">list</p>
      <h1>Review Queue</h1>
      <p>This SvelteKit page was generated from <code>submission_queue</code>.</p>
    </section>

        <section class="card">
      <h2>Sample rows</h2>
      <ul class="resource-list">
        {#each items as item}
          <li>
            <div class="resource-meta">
              <strong>{item.title}</strong>
              <span class="muted">{item.description}</span>
            </div>
            <span class="badge">{Object.keys(item).length} fields</span>
          </li>
        {/each}
      </ul>
    </section>
  </div>
</main>

<style>
  main { max-width: 72rem; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
  .stack { display: grid; gap: 1rem; }
  .card { background: white; border-radius: 16px; padding: 1.25rem; box-shadow: 0 12px 30px rgba(24, 32, 38, 0.08); }
  .muted { color: #607284; }
</style>
