<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

<svelte:head>
  <link rel="icon" type="image/svg" href="favicon-32x32.png" />
  <title>Kenneth Chiem</title>
</svelte:head>

<slot />

<style>
  :global(body) {
    background-color: rgb(28, 28, 28);
    color: aliceblue;
  }
</style>
