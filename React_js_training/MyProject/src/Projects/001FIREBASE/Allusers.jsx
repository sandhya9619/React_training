import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Allusers() {
    const [currentUserRecord, setCurrentUserRecord] = useState();
    const [currentuid, setUid] = useState();
    const [users, setUsers] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchcurrentuserdetails(user);
            }
        })
    }, []);

    useEffect(() => {
        if (currentuid) {
            fetchAllusers()
        }
    }, [currentuid])

    const fetchcurrentuserdetails = async (user) => {
        // const user = auth.currentUser;
        if (user) {
            const userdata = await getDoc(doc(db, "student", user.uid));
            setCurrentUserRecord(userdata.data());
            setUid(userdata.id)
        }
    }


    const fetchAllusers = async () => {
        const querySnapshot = await getDocs(collection(db, "student"))
        const alluserdata = [];

        querySnapshot.forEach((doc) => {
            if (doc.id !== currentuid) {
                alluserdata.push({ uid: doc.id, ...doc.data() })
            }
        })

        setUsers(alluserdata);
    }

    return (
        <div>   
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Logo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users
                                    ?
                                    users.map((e, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {e.profilepic
                                                    ?
                                                    <img src={e.profilepic} alt="" width={50} height={50} />
                                                    :
                                                    <img src=''/>
                                                }
                                            </td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td><button onClick={()=>navigate(`/chatscreen/${e.uid}`)}>Message</button> </td>
                                        </tr>
                                        
                                    })
                                :
                                <h1>No Records found</h1>
                                }
                         </tbody>       
                        
                    </table>
        </div>
    )
}
