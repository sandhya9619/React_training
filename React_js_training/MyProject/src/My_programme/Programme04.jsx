import React from 'react'
import Programme01 from './Programme01';
import Programme02 from './Programme02';

export default function Programme04() {
    const islogging = true;

    if (islogging) {
        return <Programme01/>;
    }
    else{
        return <Programme02/>;
    }


}
