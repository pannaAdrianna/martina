import {Alert, Button, Card, Form, Input, Space} from "antd";
import firebase from "firebase/compat";
import {useCallback, useEffect, useRef, useState} from "react";
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

export const KidFinder = ({parentCallback}) => {


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(true);
    const [patients, setPatients] = useState([]);
    const ref = firebase.firestore().collection('kids');
    const [filtered, setFiltered] = useState([])
    const [idKid, setIdKid] = useState('')


    useEffect(() => {
        console.log(patients)
        // eslint-disable-next-line
    }, []);





    const callback = (id) => {
        setIdKid(id);
        parentCallback(id)

    }


    return (
        <>
            {/*<Title level={5}>Items length: {patients.length}</Title>*/}
            <span>  Choosen rider: {idKid}</span>
            <RidersTable  parentCallback={callback}/>



        </>
    )
}