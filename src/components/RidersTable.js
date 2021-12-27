import React, {Fragment, useEffect, useState} from 'react';
import {Table, Radio, Divider, Card, Modal, Col} from 'antd';

import Search from "antd/es/input/Search";
import firebase from "firebase/compat";

import useModal from "antd/es/modal/useModal";
import PersonalRideTable from "./PersonalRideTable";
import Row from "antd/es/descriptions/Row";

const columns = [

    {
        title: 'Imię',
        dataIndex: 'name',

    },

    {
        title: 'Nazwisko',
        dataIndex: 'surname',
    },
    {
        title: 'Tag',
        dataIndex: 'owner',
    },
    {
        title: 'Telefon',
        dataIndex: 'phone',
    },


];


function RidersTable({parentCallback}) {

    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    const ref = firebase.firestore().collection('kids');

    const rowSelection = {

        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            parentCallback(selectedRowKeys)
        }
    };


    useEffect(() => {
        getAllPatients()
        document.title = `Riders Table`
    }, [])


    const onSearch = value => {

        setFiltered(list.filter((row) => {
            return row.name.toLowerCase().includes(value.toLowerCase());
        }));
        if (filtered.length === 0) parentCallback('')

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
                setList(items);
                setFiltered(items)
                setLoading(false);
            });
        console.log(list.length)
    }

    const {confirm} = Modal


    function handleClick(record) {
        console.log("event: ", record)
        confirm({
            title: `${record.name} ${record.surname}`,
            // icon: <ExclamationCircleOutlined/>,
            content:
                <div style={{width: 'auto'}}>
                    <Card>
                        <p>Imię: {record.name}</p>
                        <p>Nazwisko: {record.surname}</p>
                        <p>Telefon: {record.phone}</p>
                        <p>Czy posiada karnet: T/N</p>
                    </Card>
                    <Card>
                        <PersonalRideTable/>
                    </Card>
                </div>,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
            width: "100%", resize: "auto",
            minWidth: '300',
        });
    }

    return (
        <>
            <Search placeholder="Find Kid by name" onSearch={onSearch} style={{width: 200}}/>


            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }
                }
                columns={columns}
                dataSource={filtered}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            handleClick(record)
                        }, // click row
                    };
                }}

            />


        </>
    );
};

/*RidersTable.propTypes = {
    data: PropTypes.array.isRequired
}*/
export default RidersTable;
