import { addDoc, collection, doc, getDoc, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function Chatscreen() {
    const { uid } = useParams();

    const [currentUsername, setCurrentUsername] = useState();
    const [cid, setCid] = useState();
    const [chatperson, setChatperson] = useState();
    const [chatpersonid, setChatpersonid] = useState();
    const [newmessageinput, setNewMessageInput] = useState();

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchcurrentuser(user);
            }
        });
        // Cleanup subscription on unmount
        return () => subscribe();
    }, []);
    const fetchcurrentuser = async (user) => {
        const cuid = await getDoc(doc(db, "student", user.uid));
        setCid(user.uid);
        setCurrentUsername(cuid.data().name);

        const chatpersondata = await getDoc(doc(db, "student", uid));
        setChatpersonid(uid);
        setChatperson(chatpersondata.data().name);
    }

    const handlesendmessage = async () => {
        if (!newmessageinput.trim()) return;

        const newmessage = {
            senderid: cid,
            receiverid: chatpersonid,
            content: newmessageinput,
            timestamp: serverTimestamp()
        }

        await addDoc(collection(db, "Chats"), newmessage);
        setNewMessageInput("");
    }

    return (
        <div>
            <h3>Welcome {currentUsername} </h3>
            <h1>Let's start chat with: {chatperson}</h1>

            <input type="text" value={newmessageinput} placeholder='Type message here' onChange={(e) => setNewMessageInput(e.target.value)} />
            <button onClick={handlesendmessage}>Send</button>
        </div>
    )
}
