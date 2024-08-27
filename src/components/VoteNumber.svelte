<script>

//this component displays the number of candidates a voter can vote for in each district

//define the variable. export means it can be changed later
export let thisCounty = "Howard County";

//this is the data
 let voteNumber = [
        {
            County: "Allegany County",
            Vote: "three"
        },
        {
            County: "Anne Arundel County District 1",
            Vote: "four"
        },
        {
            County: "Anne Arundel County District 2",
            Vote: "five"
        },
        {
            County: "Anne Arundel County District 3",
            Vote: "two"
        },
                {
            County: "Anne Arundel County District 4",
            Vote: "two"
        },
                {
            County: "Anne Arundel County District 5",
            Vote: "two"
        },
                {
            County: "Anne Arundel County District 6",
            Vote: "two"
        },
                {
            County: "Anne Arundel County District 7",
            Vote: "two"
        },
        {
            County: "Calvert County District 1",
            Vote: "six"
        },
        {
            County: "Calvert County District 2",
            Vote: "six"
        },
        {
            County: "Calvert County District 3",
            Vote: "six"
        },
        {
            County: "Caroline County District 1",
            Vote: "seven"
        },
                {
            County: "Caroline County District 2",
            Vote: "seven"
        },
        {
            County: "Carroll County",
            Vote: "three"
        },
        {
            County: "Cecil County District 1",
            Vote: "four"
        },
                {
            County: "Cecil County District 2",
            Vote: "four"
        },
        {
            County: "Charles County",
            Vote: "five"
        },
        {
            County: "Dorchester County District 1",
            Vote: "two"
        },
                {
            County: "Dorchester County District 3",
            Vote: "two"
        },
        {
            County: "Dorchester County District 5",
            Vote: "two"
        },

        {
            County: "Frederick County",
            Vote: "two"
        },
                {
            County: "Garrett County",
            Vote: "two"
        },
        {
            County: "Howard County District 1",
            Vote: "two"
        },
        {
            County: "Howard County District 2",
            Vote: "two"
        },
        {
            County: "Howard County District 3",
            Vote: "two"
        },
        {
            County: "Howard County District 4",
            Vote: "two"
        },
        {
            County: "Howard County District 5",
            Vote: "two"
        },
                {
            County: "Kent County",
            Vote: "two"
        },
        {
            County: "Montgomery County At Large",
            Vote: "six"
        },
        {
            County: "Montgomery County District 2",
            Vote: "six"
        },
        {
            County: "Montgomery County District 4",
            Vote: "six"
        },
        {
            County: "Prince George's County District 1",
            Vote: "six"
        },
        {
            County: "Prince George's County District 4",
            Vote: "six"
        },
        {
            County: "Prince George's County District 5",
            Vote: "six"
        },
        {
            County: "Prince George's County District 7",
            Vote: "six"
        },
        {
            County: "Prince George's County District 8",
            Vote: "six"
        },
        {
            County: "Queen Anne's County District 2",
            Vote: "seven"
        },
        {
            County: "Queen Anne's County District 3",
            Vote: "seven"
        },
        {
            County: "Queen Anne's County District 4",
            Vote: "seven"
        },
        {
            County: "Saint Mary's County At Large",
            Vote: "six"
        },
        {
            County: "Saint Mary's County District 2",
            Vote: "six"
        },
        {
            County: "Saint Mary's County District 4",
            Vote: "six"
        },
        {
            County: "Somerset County District 2",
            Vote: "six"
        },
        {
            County: "Somerset County District 4",
            Vote: "six"
        },
        {
            County: "Talbot County District 2",
            Vote: "six"
        },
        {
            County: "Talbot County District 5",
            Vote: "six"
        },
        {
            County: "Talbot County District 6",
            Vote: "six"
        },
        {
            County: "Washington County",
            Vote: "six"
        },
        {
            County: "Worcester County District 2",
            Vote: "six"
        },
                {
            County: "Worcester County District 3",
            Vote: "six"
        },
                {
            County: "Worcester County District 5",
            Vote: "six"
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

