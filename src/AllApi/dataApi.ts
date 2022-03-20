import axios from "axios";

export const getAllData = async(pageNumber: Number) => {
    // const res = await fetch(
    //     `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`
    // )
    const {data} = await axios.get(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`
    )
    // const data = await res.json();
    return data;
}