import React, {useEffect, useState} from 'react';
import {Table, Radio, Divider, Card, Modal} from 'antd';

import Search from "antd/es/input/Search";
import firebase from "firebase/compat";

import useModal from "antd/es/modal/useModal";
import Ride from "../model/Ride";

const columns = [

    {
        title: 'Data jazdy',
        dataIndex: 'rideDate',

    },
    {
        title: 'Rodzaj jazdy',
        dataIndex: 'rideType',
    },

    {
        title: 'Total',
        dataIndex: 'total',
    }, {
        title: 'Instruktor',
        dataIndex: 'added',
    },
    , {
        title: 'Instruktor1',
        dataIndex: 'added',
    }

];


function PersonalRideTable({parentCallback}) {

    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    const ref = firebase.firestore().collection('payout');



    useEffect(() => {
        getAllPatients()
        document.title = `Riders Table`
    }, [])



    function getAllPatients() {
        setLoading(true);
        let idKid = '04d6d148-df93-422e-912c-b9c1427fb067'
        ref
            .where('idKid', '==', idKid)
            // .where('tests','array-contains',1)
            //.where('title', '==', 'School1') // does not need index
            //.where('score', '<=', 10)    // needs index
            .orderBy('rideDate', 'desc')
            //.limit(3)
            .onSnapshot((querySnapshot) => {
                const items = [];
                querySnapshot.forEach((doc) => {
                let item=new Ride(doc.data())
                    items.push(item);
                });

                setList(items);
                setFiltered(items)
                setLoading(false);
            });
        console.log(list.length)

    }

    return (
        <>
            <Table
                columns={columns}
                dataSource={filtered}
                scroll={{ x: 'fit-content' }}
            />



        </>
    );
};

/*RidersTable.propTypes = {
    data: PropTypes.array.isRequired
}*/
export default PersonalRideTable;
