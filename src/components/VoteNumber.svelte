<script>

//this component displays the number of candidates a voter can vote for in each district

//define the variable. export means it can be changed later
export let thisCounty = "Howard County";

//this is the data
 let voteNumber = [
        {
            County: "Howard County",
            Vote: "3"
        },
        {
            County: "Baltimore County",
            Vote: "4"
        },
        {
            County: "Charles County",
            Vote: "5"
        },
        {
            County: "Prince George's County District 1",
            Vote: "6"
        },
        {
            County: "Prince George's County District 2",
            Vote: "7"
        }
    ]   
    
</script>


<!--loop through the JSON, but only pull the record that matches the thisCounty variable (sent from the page where this is called)-->
{#each voteNumber as number}
    {#if number.County === thisCounty}
    <p class="hed">{number.County} Board of Education Candidates</p> 
    <p class="intro-text">Select a candidate below to read their responses to our questionnaire. The Maryland general election will be held Nov. 5, 2024.</p>
    <p class="intro-text"><em>Vote for up to {number.Vote}</em></p> 
    {/if}

{/each}

