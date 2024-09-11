<script>

//this component displays the number of candidates a voter can vote for in each district

//define the variable. export means it can be changed later
export let thisCounty = "Howard County";

//this is the data
 let voteNumber = [
        {
            County: "Allegany County",
            Vote: "two"
        },
        {
            County: "Anne Arundel County District 1",
            Vote: "one"
        },
        {
            County: "Anne Arundel County District 2",
            Vote: "one"
        },
        {
            County: "Anne Arundel County District 3",
            Vote: "one"
        },
                {
            County: "Anne Arundel County District 4",
            Vote: "one"
        },
                {
            County: "Anne Arundel County District 5",
            Vote: "one"
        },
                {
            County: "Anne Arundel County District 6",
            Vote: "one"
        },
                {
            County: "Anne Arundel County District 7",
            Vote: "one"
        },
        {
            County: "Calvert County District 1",
            Vote: "one"
        },
        {
            County: "Calvert County District 2",
            Vote: "one"
        },
        {
            County: "Calvert County District 3",
            Vote: "one"
        },
        {
            County: "Caroline County District 1",
            Vote: "one"
        },
                {
            County: "Caroline County District 2",
            Vote: "one"
        },
        {
            County: "Carroll County",
            Vote: "two"
        },
        {
            County: "Cecil County District 1",
            Vote: "one"
        },
                {
            County: "Cecil County District 2",
            Vote: "one"
        },
        {
            County: "Charles County",
            Vote: "one"
        },
        {
            County: "Dorchester County District 1",
            Vote: "one"
        },
                {
            County: "Dorchester County District 3",
            Vote: "one"
        },
        {
            County: "Dorchester County District 5",
            Vote: "one"
        },

        {
            County: "Frederick County",
            Vote: "three"
        },
                {
            County: "Garrett County",
            Vote: "two"
        },
        {
            County: "Howard County District 1",
            Vote: "one"
        },
        {
            County: "Howard County District 2",
            Vote: "one"
        },
        {
            County: "Howard County District 3",
            Vote: "one"
        },
        {
            County: "Howard County District 4",
            Vote: "one"
        },
        {
            County: "Howard County District 5",
            Vote: "one"
        },
                {
            County: "Kent County",
            Vote: "two"
        },
        {
            County: "Montgomery County At Large",
            Vote: "one"
        },
        {
            County: "Montgomery County District 2",
            Vote: "one"
        },
        {
            County: "Montgomery County District 4",
            Vote: "one"
        },
        {
            County: "Prince George's County District 1",
            Vote: "one"
        },
        {
            County: "Prince George's County District 4",
            Vote: "one"
        },
        {
            County: "Prince George's County District 5",
            Vote: "one"
        },
        {
            County: "Prince George's County District 7",
            Vote: "one"
        },
        {
            County: "Prince George's County District 8",
            Vote: "one"
        },
        {
            County: "Queen Anne's County District 2",
            Vote: "one"
        },
        {
            County: "Queen Anne's County District 3",
            Vote: "one"
        },
        {
            County: "Queen Anne's County District 4",
            Vote: "one"
        },
        {
            County: "Saint Mary's County At Large",
            Vote: "one"
        },
        {
            County: "Saint Mary's County District 2",
            Vote: "one"
        },
        {
            County: "Saint Mary's County District 4",
            Vote: "one"
        },
        {
            County: "Somerset County District 2",
            Vote: "one"
        },
        {
            County: "Somerset County District 4",
            Vote: "one"
        },
        {
            County: "Talbot County District 2",
            Vote: "one"
        },
        {
            County: "Talbot County District 5",
            Vote: "one"
        },
        {
            County: "Talbot County District 6",
            Vote: "one"
        },
        {
            County: "Washington County",
            Vote: "four"
        },
        {
            County: "Worcester County District 2",
            Vote: "one"
        },
                {
            County: "Worcester County District 3",
            Vote: "one"
        },
                {
            County: "Worcester County District 5",
            Vote: "one"
        }
    ]   
    
</script>


<!--loop through the JSON, but only pull the record that matches the thisCounty variable (sent from the page where this is called)-->
{#each voteNumber as number}
    {#if number.County === thisCounty}
    <p class="hed">{number.County} Board of Education Candidates</p> 
    <p class="sub">Select a candidate below to read their responses to our questionnaire.<br>
    <span class="sub2">Vote for up to {number.Vote} candidates.</span></p> <br>
    {/if}

{/each}

