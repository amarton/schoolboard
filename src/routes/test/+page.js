//import the data from API
export const load = async ({ fetch }) => {
    //add that variable to the API url
    const res = await fetch(`https://schoolboard-tvt5vsz5vq-ue.a.run.app/schoolboard/candidates.json?_sort=rowid&County__exact=Howard+County`, {
        headers: {
            "Accept": "application/json"
        }
    });
    const json = await res.json();
    //select the rows array from the json file
    const county= json.rows;
    return {
        county,
}
}
