import React, { useState } from 'react'

export default function Statetask01() {
    let [on, setOn] = useState(false)
    let [click, setClick] = useState(false)
    const handelButton = () => {
        if (on) {
            setOn(false);
        } else {
            setOn(true);
        }
        {
            if (click) {
                setClick(false);
            } else {
                setClick(true);
            }
        }
    };

    //  const handelButtonname = () => 

    return (
        <div>
            {

                on ?

                    (
                        <img
                            src="https://www.shutterstock.com/image-illustration/3d-illustration-light-bulb-isolated-600nw-749587456.jpg"
                            alt="on image"
                            style={{ height: "250px" }}
                        />
                    )

                    :

                    (
                        <img
                            src="https://cdn.vectorstock.com/i/1000v/60/94/cartoon-glowing-yellow-light-bulb-vector-18016094.jpg"
                            alt="off image"
                            style={{ height: "250px" }}
                        />
                    )

            }
            {" "}
            <br />
            <br />
            {

                click ?
                    (
                        <button onClick={handelButton} style={{ padding: "20px", backgroundColor: "yellow", color: "gray" }}>Bulb on</button>
                    )

                    :

                    (
                        <button onClick={handelButton} style={{ padding: "20px", backgroundColor: "skyblue", color: "yellow" }}>Bulb Off</button>
                    )}
            {/* <button onClick={handelButton}>Bulb</button> */}
        </div>
    );
}
// <img src="./iamge/off.webp" alt="">