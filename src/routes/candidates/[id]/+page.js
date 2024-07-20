//query the API
export const load = async ({ fetch, params }) => {
    //grab the candidate API from the URL
    const id = params.id; 
    //add the candidate ID from the URL to the API query URL
    const res = await fetch(`https://schoolboard-tvt5vsz5vq-ue.a.run.app/schoolboard/candidates/${id}.json`, {
        headers: {
            "Accept": "application/json"
        }
    });
    const json = await res.json();
    //select the rows array from the json
    const thisLegislator = json.rows;
    return {
        thisLegislator,
}
}
