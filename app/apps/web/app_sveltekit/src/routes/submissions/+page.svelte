<script lang="ts">
  const items = [
    {
      id: "sample-active",
      title: "Review Queue sample",
      status: "submitted",
      review_priority: "standard",
      author_name: "Avery Author"
    },
    {
      id: "sample-priority",
      title: "Priority Review sample",
      status: "submitted",
      review_priority: "high",
      author_name: "Morgan Editor"
    }
  ];

  let selectedIds: string[] = [];

  $: selectedCount = selectedIds.length;

  function toggleSelection(id: string) {
    selectedIds = selectedIds.includes(id)
      ? selectedIds.filter((value) => value !== id)
      : [...selectedIds, id];
  }
</script>

<main>
  <div class="stack">
    <section class="card">
      <p class="muted">maintained list</p>
      <h1>Review Queue</h1>
      <p>This maintained page uses Topogram widget packets as guidance without regenerating app source.</p>
    </section>

    <section class="widget-card widget-generic" data-topogram-widget="widget_submission_summary">
      <p class="widget-eyebrow">hero widget</p>
      <h2>Submission Summary</h2>
      <div class="summary-row">
        <strong>{items.length}</strong>
        <span>submissions ready for review</span>
      </div>
    </section>

    <section class="widget-card widget-generic" data-topogram-widget="widget_submission_queue">
      <div class="toolbar">
        <div>
          <p class="widget-eyebrow">results widget</p>
          <h2>Submission Queue</h2>
        </div>
        <button type="button" disabled={selectedCount === 0}>
          Approve selected ({selectedCount})
        </button>
      </div>

      <ul class="queue-list">
        {#each items as item}
          <li>
            <label>
              <input
                type="checkbox"
                checked={selectedIds.includes(item.id)}
                on:change={() => toggleSelection(item.id)}
              />
              <span>
                <strong>{item.title}</strong>
                <small>{item.review_priority} priority · {item.author_name}</small>
              </span>
            </label>
          </li>
        {/each}
      </ul>
    </section>
  </div>
</main>

<style>
  main { max-width: 72rem; margin: 0 auto; padding: 2rem 1.25rem 4rem; }
  .stack { display: grid; gap: 1rem; }
  .card, .widget-card { background: white; border-radius: 16px; padding: 1.25rem; box-shadow: 0 12px 30px rgba(24, 32, 38, 0.08); }
  .muted, small { color: #607284; }
  .widget-eyebrow { color: #607284; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.75rem; }
  .summary-row { display: flex; gap: 0.5rem; align-items: baseline; }
  .summary-row strong { font-size: 2rem; }
  .toolbar { display: flex; justify-content: space-between; gap: 1rem; align-items: center; }
  button { border: 0; border-radius: 10px; background: #1f6feb; color: white; padding: 0.7rem 1rem; font-weight: 700; }
  button:disabled { background: #b8c4d0; cursor: not-allowed; }
  .queue-list { list-style: none; margin: 1rem 0 0; padding: 0; display: grid; gap: 0.75rem; }
  .queue-list label { display: flex; gap: 0.75rem; align-items: flex-start; padding: 0.85rem; border: 1px solid #d8e0e8; border-radius: 12px; }
  .queue-list span { display: grid; gap: 0.2rem; }
</style>
