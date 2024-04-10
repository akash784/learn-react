import { useState, useEffect } from "react";
import './Content-Table.scss';

export default function ContentTable({list}) {
    const [headers, setHeaders] = useState([]);

    useEffect(()=> {
        if(list.length) {
            setHeaders(Object.keys(list[0]));
        }

        return () => {
            setHeaders([]);
        }
    }, [list]);

    return(
        <>  
            <div className="content-table">
                <div className="table-head">
                    {headers.map((header, i) => {
                        return <div key={i}>{header.toUpperCase()}</div>
                    })}
                </div>
                <div className="table-content">
                    {list.map((item, i) => {
                        return <div key={i} className="content-row">{
                            headers.map((h, j) => {
                                return <div role={h} key={j}>{item[h]}</div>
                            })
                        }</div>
                    })}
                </div>
            </div>
        </>
    );
}