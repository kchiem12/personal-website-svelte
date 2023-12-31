<script lang="ts">
  import type { Image } from "$lib/Image";
  import { slide } from "svelte/transition";

  export let name: string;
  export let description: string;
  export let stack: Image[];
  export let year: number;
  export let github: string;
  export let images: Image[];
  export let open: boolean = false;

  const handleClick = () => {
    open = !open;
  };

  const stopPropagation = (event: Event) => {
    event.stopPropagation();
  };
</script>

<button class="projects-container" on:click={handleClick}>
  <div class="header">
    <div class="left-header">
      <h3>{name}</h3>
      <!-- <p class="year">{year}</p> -->
    </div>
    <div class="right-header">
      <p class="description">
        {description}
      </p>
      <div class="tech-stack">
        {#each stack as tech}
          <img class="tech-stack-img" src={tech.src} alt={tech.alt} />
        {/each}
      </div>
    </div>
  </div>

  {#if open}
    <div class="bottom-header" transition:slide>
      <div class="img-container">
        {#each images as image}
          <img
            class={image.vertical ? "vertical" : "img-example"}
            src={image.src}
            alt={image.alt}
          />
        {/each}
      </div>
      <a class="github" href={github} on:click={stopPropagation}>
        Source
        <img class="tech-stack-img" src="github.png" alt="github-icon" /></a
      >
    </div>
  {/if}
</button>

<style>
  .projects-container {
    font-family: "Raleway", sans-serif;
    width: 60%;
    border: 1px solid rgb(180, 180, 180);
    padding: 1rem;
    border-radius: 10px;
    padding-top: 0.25rem;
    cursor: pointer;
    background-color: transparent;
    color: aliceblue;
    border-right: none;
    border-left: none;
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 2rem;
    width: 100%;
  }

  .img-example,
  .vertical {
    /* width: 100%; */
    height: 400px;
    border-radius: 10px;

    /* crop the img in case it is wider than the parent container */
    object-fit: cover;

    /* avoid blurry img */
    image-rendering: -webkit-optimize-contrast;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    /* gap: 5rem; */
  }

  .left-header h3 {
    margin-top: 1rem;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .left-header p {
    margin-top: 0;
    margin-bottom: 0;
    text-align: left;
    font-size: 1rem;
  }

  .right-header {
    width: 60%;
  }

  .github {
    display: inline-block;
    /* justify-content: center; */
    /* align-items: end; */
    background-color: transparent;
    border: none;
    text-decoration: none;
    color: aliceblue;
    font-family: "Raleway", sans-serif;
    padding-left: 0;
    font-size: 1rem;
    margin-top: 0;
    /* text-align: center; */
    gap: 0.5rem;
    /* width: auto; */
    cursor: pointer;
  }

  .description {
    margin-top: 1.3rem;
    margin-bottom: 0.5rem;
    text-align: right;
    font-size: 1rem;
    /* margin-left: 5rem; */
  }

  .bottom-header {
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    text-align: center;
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

  @media (max-width: 768px) {
    .projects-container {
      width: 100%;
    }

    .header {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .left-header h3 {
      font-size: 2rem;
    }

    .right-header {
      width: 100%;
    }

    .description {
      text-align: center;
    }

    .tech-stack {
      justify-content: center;
    }

    .tech-stack-img {
      width: 20px;
      height: 20px;
    }

    .bottom-header {
      margin-bottom: 0;
    }

    .img-container {
      flex-direction: column;
      gap: 1rem;
    }

    .img-example {
      width: 100%;
      height: auto;
      /* object-fit: cover; */
    }

    .vertical {
      height: 500px;
    }
  }
</style>
