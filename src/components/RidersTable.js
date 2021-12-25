import React, {useEffect, useState} from 'react';
import {Table, Radio, Divider, Card} from 'antd';

import PropTypes from "prop-types";
import Search from "antd/es/input/Search";
import firebase from "firebase/compat";
import Modal from "antd/es/modal/Modal";
import useModal from "antd/es/modal/useModal";
import {ExclamationCircleOutlined} from "@ant-design/icons";

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

    const [modal, contextHolder] = useModal();

    const ReachableContext = React.createContext();
    const UnreachableContext = React.createContext();

    const config = {
        title: 'Use Hook!',
        content: (
            <>
                <ReachableContext.Consumer>{name => `Reachable: ${name}!`}</ReachableContext.Consumer>
                <br/>
                <UnreachableContext.Consumer>{name => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
            </>
        ),
        onOk() {
            console.log('OK');
        },
    };


    function handleClick(record) {
        console.log("event: ", record)
        Modal.confirm({
            title: `${record.name} ${record.surname}`,
            // icon: <ExclamationCircleOutlined/>,
            content: <Card>
                <p>Imię: {record.name}</p>
                <p>Nazwisko: {record.surname}</p>
                <p>Telefon: {record.phone}</p>
                <p>Czy posiada karnet: T/N</p>
            </Card>,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <div>
            <Search placeholder="Find Kid by name" onSearch={onSearch} style={{width: 100}}/>


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
            {contextHolder}


        </div>
    );
};

/*RidersTable.propTypes = {
    data: PropTypes.array.isRequired
}*/
export default RidersTable;
