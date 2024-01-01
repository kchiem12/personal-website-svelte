<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<slot />

<style>
  :global(body) {
    background-color: rgb(28, 28, 28);
    color: aliceblue;
  }
</style>
