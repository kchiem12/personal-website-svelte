<script>
  import Projects from "$lib/components/Projects.svelte";
  import { projects } from "$lib/data/projects";
</script>

<div>
  <h1>Featured Projects</h1>
</div>

<div class="projects">
  {#each projects as project}
    <Projects {...project} />
  {/each}
</div>

<style>
  .projects {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
  }
</style>
