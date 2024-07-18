<script>

    // import the data from js file api call
    export let data; 
     let { thisLegislator } = data;
     $: ({ thisLegislator } = data); // so it stays in sync when `data` changes
  
  </script>
  



  <!-- run a loop even though there is only one, display the data-->
   <!-- alt -- could drop the loop and refer to it as {legislator[0][4]}  -->
  {#each thisLegislator as legislator}
    <!--Grab the county name and replace the spaces with a plus
    Then add that to the URL to link back to all candidates in that county-->
    {@const countyLink = legislator[1].replace(/ /g, '+')}  

    <a href="../counties/{countyLink}">Return to see all candidates in this county</a>


  <div class="container">
      <p>{legislator[2]}</p> 



      <!-- for each of the following, it a field is set to null, it won't display-->
      {#if legislator[5] === "null"}
        <span></span>
        {:else}
        <p>Email: {legislator[5]}</p>
      {/if}


      {#if legislator[4] === "null"}
        <span></span>
        {:else}
        <p>Website: {legislator[4]}</p>
        {/if}

      {#if legislator[6] === "null"}
        <span></span>
        {:else}
        <p>Age: {legislator[6]}</p>
      {/if}


      {#if legislator[7] === "null"}
        <span></span>
        {:else}
        <p>Occupation: {legislator[7]}</p>
      {/if}


      {#if legislator[8] === "null"}
        <span></span>
        {:else}
        <p>Education {legislator[8]}</p>
      {/if}



      <p><strong>Q1</strong>: {legislator[9]}</p>
      <p><strong>Q2</strong>: {legislator[10]}</p>
      <p><strong>Q3</strong>: {legislator[11]}</p>
      <p><strong>Q4</strong>: {legislator[12]}</p>
      <p><strong>Q5</strong>: {legislator[13]}</p>
      <p><strong>Q6</strong>: {legislator[14]}</p>

    </div>  
    {/each}