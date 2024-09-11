<script>
  import VoterLogo from '$lib/images/voter-guide-logo.png';

  //import the component that shows how many candidates a voter can vote for
  import VoteNumber from "../../../components/VoteNumber.svelte";

  // import the data from js file api call
  export let data; 
  let { county } = data;
  $: ({ county } = data); // so it stays in sync when `data` changes   
</script>


<div class="topper">
  <div class="topper-content">
    <center><a href="../"><img src="{VoterLogo}" id="main-logo"></a> </center>
      
  </div>
</div>


<div class="container">

  <!--Call the componenet to show the number you can vote for
thisCounty is a var passed to the component and pulled from the URL / export above -->
<VoteNumber thisCounty={county[1][1]}/>

  <!--loop through the data and display each county where candidate answered-->
  {#each county as thisCounty}
    {#if  thisCounty[3] === 'y'}
      <div class="container">
        <a href={`/candidates/${thisCounty[0]}`} class="candidate">{thisCounty[2]}</a> 
        <!-- pass the candidate's ID to the candidate/[id] page via the URL-->
         <hr>
      </div>  
    {/if}
  {/each}

  <br><p class="sub sub2">The following candidates did not answer:</p>
  <!--loop through the data and display each county where candidate DID NOT answer-->
  
  {#each county as thisCounty}
    {#if  thisCounty[3] === 'n'}
      <div class="container">
        <p class="candidate-no">{thisCounty[2]}</p> 
        <hr>
      </div>  
    {/if}
    {:else}
    <p class="candidate-no">All candidates in this district answered our survey</p>
  {/each}


  <a href="../">
    <button type="button" class="btn btn-primary btn-md larger-btn">Select a different county</button>
  </a>

</div>