import React from 'react'
import Programme01 from './Programme01';
import Programme02 from './Programme02';

export default function Programme04() {
    const islogging = true;
    let Element;

    if (islogging) {
        Element = <Programme01 />;
    }
    else {
        Element = <Programme02 />;
    }

    return Element;
}
