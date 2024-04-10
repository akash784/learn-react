import { useEffect, useState } from "react";
import ContentTable from "./Content-Table.js";
import './Content.scss';

export default function Content({selectedTab}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if(selectedTab != 'home') {
            fetch(`https://jsonplaceholder.typicode.com/${selectedTab}`)
            .then(response => response.json())
            .then(json => {
                setItems(json.slice(0,15));
            });
        } else {
            setItems([]);
        }
      }, [selectedTab]);

    return (
        <>
            <div class="content">
                <ContentTable list={items} />
            </div>
        </>
    );
}