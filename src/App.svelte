<script>
  import Tabs from "./shared/Tabs.svelte";
  import Footer from "./component/Footer.svelte";
  import Header from "./component/Header.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <p>this is current polls</p>
  {:else if activeItem === "Add New Poll"}
    <p>Do you want to add new poll?</p>
  {/if}
</main>

<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
