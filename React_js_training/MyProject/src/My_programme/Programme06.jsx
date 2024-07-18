import React from 'react'
import Programme01 from './Programme01';
import Programme02 from './Programme02';
import Programme03 from './Programme03';
import Admin01 from './Admin01';
import Supplier01 from './Supplier01';
import Customer01 from './Customer01';

export default function Programme06() {
    const userrole = "customer";

    switch (userrole) {
        case "Admin":
            return <Admin01/>
        
            case "supplier" :
                return <Supplier01/>

                case "customer" :
                    return <Customer01/>
    }

}
