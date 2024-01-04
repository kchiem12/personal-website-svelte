<div class="navbar-container">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Portfolio</a></li>
  </ul>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display&family=Quicksand&family=Raleway&display=swap");

  .navbar-container {
    font-family: "Raleway", sans-serif;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 2rem;
    padding-top: 2rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  li {
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
    color: var(--color-text);
  }

  @media (max-width: 768px) {
    .navbar-container {
      padding-right: 0;
    }

    ul {
      gap: 1rem;
    }

    li {
      font-size: 1rem;
    }
  }
</style>
