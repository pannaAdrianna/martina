import {Alert, Button, Card, Form, Input, Space} from "antd";
import firebase from "firebase/compat";
import {useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import Title from "antd/es/typography/Title";
import Search from "antd/es/input/Search";
import RidersTable from "./RidersTable";


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export const KidFinder = () => {


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(true);
    const [patients, setPatients] = useState([]);
    const ref = firebase.firestore().collection('kids');
    const [filtered, setFiltered] = useState([])


    useEffect(() => {

        getAllPatients()
        console.log(patients)
        // eslint-disable-next-line
    }, []);


    const onSearch = value => {
        getAllPatients()
        setFiltered(patients.filter((row) => {
            return row.name.toLowerCase().includes(value.toLowerCase());
        }));


    }

    function getAllPatients() {
        setLoading(true);
        let instructorId = 'instructor1'


        ref
            .where('added', '==', instructorId)
            // .where('tests','array-contains',1)
            //.where('title', '==', 'School1') // does not need index
            //.where('score', '<=', 10)    // needs index
            //.orderBy('owner', 'asc')
            //.limit(3)
            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                    items.push(doc.data());
                });
                setPatients(items);
                setLoading(false);

            });
        console.log(patients.length)
    }


    return (
        <>
            {/*<Title level={5}>Items length: {patients.length}</Title>*/}
            <Search placeholder="Find Kid by name" onSearch={onSearch} style={{width: 200}}/>
            <RidersTable data={filtered}/>
            {/* eslint-disable-next-line array-callback-return */}


            {/*<Button onClick={getPatients}>Find</Button>*/}


        </>
    )
}