<script>
  import Polllist from "./component/Polllist.svelte";
  import CreatePollForm from "./component/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import Footer from "./component/Footer.svelte";
  import Header from "./component/Header.svelte";

  //tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  //polls
  let polls = [
    {
      id: 1,
      question: "python or javascript",
      answerA: "python",
      answerB: "javascript",
      votesA: "9",
      votesB: "15",
    },
  ];
  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    activeItem = "Current Polls";
    console.log(polls);
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <Polllist {polls} />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
