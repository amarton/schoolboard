<script>
  import VoterLogo from '$lib/images/voter-guide-logo.png';
// import the data from js file api call
  export let data; 
  let { thisLegislator } = data;
  $: ({ thisLegislator } = data); // so it stays in sync when `data` changes
  </script>
  


<div class="topper">
  <div class="topper-content">
    <center><a href="../"><img src="{VoterLogo}" id="main-logo"></a> </center>
      
  </div>
</div>

<div class="container">

  <!-- run a loop even though there is only one, display the data-->
  <!-- alt -- could drop the loop and refer to it as {legislator[0][4]}  -->
  {#each thisLegislator as legislator}

   
    
    <p class="hed">{legislator[2]}</p>
    <p class="sub">Running for school board in {legislator[1]}</p> 

    
    <div class="intro-text">

      <!-- for each of the following, it a field is set to null, it won't display-->

      {#if legislator[6] === "null"}
        <span></span>
      {:else}
        <span class="contact">Email:</span> <a href="mailto:{legislator[6]}">{legislator[6]}</a><br>
      {/if}

      {#if legislator[4] === "null"}
        <span></span>
      {:else}
      <span class="contact">Website:</span> <a href="http://{legislator[4]}">{legislator[4]}</a><br>
        {/if}

      {#if legislator[5] === "null"}
        <span></span>
      {:else}
      <span class="contact">Facebook:</span> <a href="http://{legislator[5]}">{legislator[5]}</a><br>
      {/if}
 
    </div>


    <!--Age, Employment, Edu-->
    <p class="question">How old will you be on Election Day (Nov. 5)?</p> 
    <p class="answer"> {legislator[7]}</p>

    <p class="question">Are you currently employed? If so, where, and what is your job title?</p> 
    <p class="answer">{legislator[8]}</p>

    <p class="question">What is the highest level of education that you completed, and where did you get that degree?</p>
    <p class="answer"> {legislator[9]}</p>    

    <!--The questions-->
    <!--Q1-->
    <p class="question">Why are you running for the school board? </p>
    <p class="answer"> {@html legislator[10]}</p>
    
    <!--Q2-->
    <p class="question">What makes you a good candidate for the board?</p>
    <p class="answer"> {@html legislator[11]}</p>
    
    <!--Q3-->
    <p class="question">What is the most important issue facing your school board and what would you do about it if elected?</p>
    <p class="answer"> {@html legislator[12]}</p>

    <!--Q4-->
    <p class="question">Please name a public leader you admire and explain why.</p>
    <p class="answer"> {@html legislator[13]}</p>

    <!--Q5-->
    <p class="question">The Blueprint for Maryland’s Future, passed by the General Assembly in 2021, is a 10-year plan that includes increased education funding to support early childhood education, increased teacher starting pay, college/career-readiness standards for high school graduates, and expanded services to multilingual and impoverished families, among other goals. Please tell us your views on the Blueprint and how it will affect your school district. </p>
    <p class="answer"> {@html legislator[14]}</p>

    <!--Q6-->
    <p class="question">Some school districts nationwide are placing new limits on the use of cellphones in middle and high schools. What do you think should be the policy on student use of cellphones in your district, and why do you support that policy?</p>
    <p class="answer">{@html legislator[15]}</p>

    <!--Q7-->
    <p class="question">Are you satisfied with your school district's efforts to ensure the safety of its students? What, if anything, should be done to improve school safety in your district?</p>
    <p class="answer"> {@html legislator[16]}</p>

    <!--Q8-->
    <p class="question">Do you think there are circumstances when books should be removed from school libraries? If so, what kind of books should be removed, and who should make those decisions?</p>
    <p class="answer"> {@html legislator[17]}</p>

    <!--Q9-->
    <p class="question">Some school districts enact policies allowing transgender and gender nonconforming students to use their preferred pronouns while at the same time not informing those students' parents about that decision. What is your opinion of such policies? </p>
    <p class="answer"> {@html legislator[18]}</p>

    
    
    <!--Grab the county name and replace the spaces with a plus
    Then add that to the URL to link back to all candidates in that county-->
    {@const countyLink = legislator[1].replace(/ /g, '+')}  

    <!--return to see all candidates button-->
    <br>
    <a href="../counties/{countyLink}">
      <button type="button" class="btn btn-primary btn-md larger-btn">Select another candidate</button>
    </a><br>


  {/each}

</div>