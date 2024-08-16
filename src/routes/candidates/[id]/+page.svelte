<script>
  // import the data from js file api call
  export let data; 
  let { thisLegislator } = data;
  $: ({ thisLegislator } = data); // so it stays in sync when `data` changes
  </script>
  
<div class="container">

  <!-- run a loop even though there is only one, display the data-->
  <!-- alt -- could drop the loop and refer to it as {legislator[0][4]}  -->
  {#each thisLegislator as legislator}

    <!--Grab the county name and replace the spaces with a plus
    Then add that to the URL to link back to all candidates in that county-->
    {@const countyLink = legislator[1].replace(/ /g, '+')}  

    <!--return to see all candidates button-->
    <br>
    <a href="../counties/{countyLink}">
      <button type="button" class="btn btn-primary btn-md">See all candidates in this county</button>
    </a><br>
    
    <p class="hed">{legislator[2]}</p> <hr>

    <div class="intro-text">

      <!-- for each of the following, it a field is set to null, it won't display-->
      {#if legislator[5] === "null"}
        <span></span>
      {:else}
        Email: <a href="mailto:{legislator[5]}">{legislator[5]}</a><br>
      {/if}

      {#if legislator[4] === "null"}
        <span></span>
      {:else}
        Website: <a href="http://{legislator[4]}">{legislator[4]}</a><br>
        {/if}

      {#if legislator[6] === "null"}
        <span></span>
      {:else}
        Age: {legislator[6]}<br>
      {/if}


      {#if legislator[7] === "null"}
        <span></span>
      {:else}
        Occupation: {legislator[7]}<br>
      {/if}

      {#if legislator[8] === "null"}
        <span></span>
      {:else}
        Education {legislator[8]}
      {/if}

    </div>

    

    <!--The questions-->
    <p><strong>Q1. Lorem ipsum dolor sit amet, consectetur adipiscing elit:</strong><br> {@html legislator[9]}</p>
    <p><strong>Q2. Lorem ipsum dolor sit amet, consectetur adipiscing elit:</strong><br> {@html legislator[10]}</p>
    <p><strong>Q3. Lorem ipsum dolor sit amet, consectetur adipiscing elit:</strong><br> {@html legislator[11]}</p>
    <p><strong>Q4. Lorem ipsum dolor sit amet, consectetur adipiscing elit:</strong><br> {@html legislator[12]}</p>
    <p><strong>Q5. Lorem ipsum dolor sit amet, consectetur adipiscing elit:</strong><br> {@html legislator[13]}</p>
    <p><strong>Q6. Lorem ipsum dolor sit amet, consectetur adipiscing elit:</strong><br> {@html legislator[14]}</p>

  {/each}

</div>