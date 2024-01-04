<div class="container">
  <h1 class="name">Kenneth Chiem</h1>

  <ul class="info">
    <li>Interested in machine learning and full-stack/mobile development</li>
    <li>CS student at Cornell University</li>
    <li>Prev. @ nSpire.ai</li>
    <li>Philly native</li>
    <li>
      <a href="mailto:kc696@cornell.edu">email</a> and
      <a href="https://www.linkedin.com/in/kenneth-chiem/">linkedin</a>
    </li>
  </ul>
</div>

<svelte:head>
  <meta name="description" content="Ken's personal website" />
</svelte:head>

<style>
  .container {
    font-family: "Raleway", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
  }

  .name {
    font-size: 5rem;
    margin-bottom: 0;
  }

  .info {
    font-size: 1.25rem;
    /* text-align: center; */
    /* margin-top: 2rem; */
    list-style: none;
    /* padding: 0; */
    padding-left: 3rem;
    margin: 0;
    margin-top: 3rem;
  }

  li:not(:last-child) {
    margin-bottom: 2rem;
  }

  a {
    color: #8eff6b;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .name {
      font-size: 2.5rem;
    }

    .info {
      font-size: 1rem;
      /* padding-left: 0; */
    }
  }
</style>
