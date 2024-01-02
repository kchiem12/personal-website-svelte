<script lang="ts">
  export let name: string = "Kenneth Chiem";
  export let summary: string =
    "Interested in machine learning and full-stack/mobile development";
  export let stack = "CS student at Cornell University";
  export let year: int = "Philly native";
  export let open: boolean = false;
  import { slide } from "svelte/transition";

  const handleClick = () => {
    open = !open;
  };
</script>

<div class="projects-container" on:click={handleClick}>
  <div class="header">
    <div class="left-header">
      <h3>Sidequest</h3>
      <p class="year">2023</p>
    </div>
    <div class="right-header">
      <p class="description">
        mobile app to allow students to find/post jobs. <br />by the students,
        for the students.
      </p>
      <div class="tech-stack">
        <img class="tech-stack-img" src="swift.png" alt="swift" />
      </div>
    </div>
  </div>

  {#if open}
    <div class="bottom-header" transition:slide>
      <div class="img-container">
        <img
          src="sidequest_profile_screen-min.png"
          alt="sidequest-profile-screen"
        />
      </div>
      <button class="github"
        >Source <img
          class="tech-stack-img"
          src="github.png"
          alt="github-icon"
        /></button
      >
    </div>
  {/if}
</div>

<style>
  .projects-container {
    font-family: "Raleway", sans-serif;
    width: 60%;
    border: 1px solid rgb(180, 180, 180);
    padding: 1rem;
    border-radius: 10px;
    padding-top: 0.25rem;
    cursor: pointer;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .img-container img {
    /* width: 100%; */
    height: 400px;
    border-radius: 10px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 5rem;
  }

  .left-header h3 {
    margin-top: 1rem;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .left-header p {
    margin-top: 0;
    margin-bottom: 0;
  }

  .github {
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: transparent;
    border: none;
    color: aliceblue;
    font-family: "Raleway", sans-serif;
    padding-left: 0;
    font-size: 1rem;
    margin-top: 0;
    gap: 0.5rem;
    cursor: pointer;
    z-index: 1;
  }

  .description {
    margin-top: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .bottom-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .tech-stack-img {
    width: 25px;
    height: 25px;
  }

  .tech-stack {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
  }
</style>
