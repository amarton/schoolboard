<script>

//this component displays the number of candidates a voter can vote for in each district

//define the variable. export means it can be changed later
export let thisCounty = "Howard County";

//this is the data
 let voteNumber = [
        {
            County: "Allegany County",
            Vote: "3"
        },
        {
            County: "Anne Arundel County District 1",
            Vote: "4"
        },
        {
            County: "Anne Arundel County District 2",
            Vote: "5"
        },
        {
            County: "Anne Arundel County District 3",
            Vote: "2"
        },
                {
            County: "Anne Arundel County District 4",
            Vote: "2"
        },
                {
            County: "Anne Arundel County District 5",
            Vote: "2"
        },
                {
            County: "Anne Arundel County District 6",
            Vote: "2"
        },
                {
            County: "Anne Arundel County District 7",
            Vote: "2"
        },
        {
            County: "Calvert County	District 1",
            Vote: "6"
        },
        {
            County: "Calvert County	District 2",
            Vote: "6"
        },
        {
            County: "Calvert County	District 3",
            Vote: "6"
        },
        {
            County: "Caroline County District 1",
            Vote: "7"
        },
                {
            County: "Caroline County District 2",
            Vote: "7"
        },
        {
            County: "Carroll County",
            Vote: "3"
        },
        {
            County: "Cecil County District 1",
            Vote: "4"
        },
                {
            County: "Cecil County District 2",
            Vote: "4"
        },
        {
            County: "Charles County",
            Vote: "5"
        },
        {
            County: "Dorchester County	District 1",
            Vote: "2"
        },
                {
            County: "Dorchester County	District 3",
            Vote: "2"
        },
        {
            County: "Dorchester County	District 5",
            Vote: "2"
        },

        {
            County: "Frederick County",
            Vote: "2"
        },
                {
            County: "Garrett County",
            Vote: "2"
        },
        {
            County: "Howard County	District 1",
            Vote: "2"
        },
        {
            County: "Howard County	District 2",
            Vote: "2"
        },
        {
            County: "Howard County	District 3",
            Vote: "2"
        },
        {
            County: "Howard County	District 4",
            Vote: "2"
        },
        {
            County: "Howard County	District 5",
            Vote: "2"
        },
                {
            County: "Kent County",
            Vote: "2"
        },
        {
            County: "Montgomery County	At Large",
            Vote: "6"
        },
        {
            County: "Montgomery County	District 2",
            Vote: "6"
        },
        {
            County: "Montgomery County	District 4",
            Vote: "6"
        },
        {
            County: "Prince George's County	District 1",
            Vote: "6"
        },
        {
            County: "Prince George's County	District 4",
            Vote: "6"
        },
        {
            County: "Prince George's County	District 5",
            Vote: "6"
        },
        {
            County: "Prince George's County	District 7",
            Vote: "6"
        },
        {
            County: "Prince George's County	District 8",
            Vote: "6"
        },
        {
            County: "Queen Anne's County District 2",
            Vote: "7"
        },
        {
            County: "Queen Anne's County District 3",
            Vote: "7"
        },
        {
            County: "Queen Anne's County District 4",
            Vote: "7"
        },
        {
            County: "Saint Mary's County At Large",
            Vote: "6"
        },
        {
            County: "Saint Mary's County District 2",
            Vote: "6"
        },
        {
            County: "Saint Mary's County District 4",
            Vote: "6"
        },
        {
            County: "Somerset County District 2",
            Vote: "6"
        },
        {
            County: "Somerset County District 4",
            Vote: "6"
        },
        {
            County: "Talbot County	District 2",
            Vote: "6"
        },
        {
            County: "Talbot County	District 5",
            Vote: "6"
        },
        {
            County: "Talbot County	District 6",
            Vote: "6"
        },
        {
            County: "Washington County",
            Vote: "6"
        },
        {
            County: "Worcester County District 2",
            Vote: "6"
        },
                {
            County: "Worcester County District 3",
            Vote: "6"
        },
                {
            County: "Worcester County District 5",
            Vote: "6"
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

