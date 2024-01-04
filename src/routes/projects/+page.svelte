<script>
  import Projects from "$lib/components/Projects.svelte";
  import { projects } from "$lib/data/projects";
</script>

<div class="title">
  <h1>Featured Projects</h1>
</div>

<div class="projects">
  {#each projects as project}
    <Projects {...project} />
  {/each}
</div>

<div class="personal-web">
  <p>This website was made using SvelteKit</p>
</div>

<style>
  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-left: 5rem; */
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
  }

  .projects {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    margin-bottom: 5rem;
  }

  .personal-web {
    font-family: "Raleway", sans-serif;
  }
</style>
