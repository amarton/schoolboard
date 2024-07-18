<script>
  //import the component that shows how many candidates a voter can vote for
  import VoteNumber from "../../../components/VoteNumber.svelte";

  // import the data from js file api call
  export let data; 
  let { county } = data;
  $: ({ county } = data); // so it stays in sync when `data` changes   
</script>

<div class="container">
  <!--Call the componenet to show the number you can vote for
  thisCounty is a var passed to the component and pulled from the URL / export above -->
  <VoteNumber thisCounty={county[1][1]}/>

  <!--loop through the data and display each county where candidate answered-->
  {#each county as thisCounty}
    {#if  thisCounty[3] === 'y'}
      <div class="container">
        <p class="candidate">{thisCounty[2]}</p> 
        <!-- pass the candidate's ID to the candidate/[id] page via the URL-->
        <a href={`/candidates/${thisCounty[0]}`}>Read More</a>
        <hr>
      </div>  
    {/if}
  {/each}

  <br><p><strong>The following candidates did not answer:</strong></p>
  <!--loop through the data and display each county where candidate DID NOT answer-->
  
  {#each county as thisCounty}
    {#if  thisCounty[3] === 'n'}
      <div class="container">
        <p class="candidate-no">{thisCounty[2]}</p> 
        <hr>
      </div>  
    {/if}
  {/each}

</div>