import React, { useEffect, useState } from 'react'

export default function Hookapi05() {

    const [dataValue, setData] = useState([]);

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const res = await response.json();
        setData(res.data);

    }
    return (
        <div>
            {!dataValue.length ==0 ? dataValue.map((e, i) => {
                return <div key={i}>
                    <h2>{e.id}</h2>
                </div>
            }) : "data loading.....!"}
        </div>
    )
}
