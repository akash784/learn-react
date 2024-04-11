import { useEffect, useState } from "react";
import ContentTable from "./Content-Table.js";
import './Content.scss';

export default function Content({selectedTab}) {
    const [items, setItems] = useState([]);
    const [loader, setLoader] =  useState(true);

    useEffect(() => {
        if(selectedTab != 'home') {
            fetch(`https://jsonplaceholder.typicode.com/${selectedTab}`)
            .then(response => response.json())
            .then(json => {
                setItems(json.slice(0,15));
                setLoader(false);
            });
        } else {
            setItems([]);
        }
      }, [selectedTab]);

    return (
        <>
            <div className="content">
                { loader ? <h2>...LOADING</h2> : <ContentTable list={items} /> }
            </div>
        </>
    );
}