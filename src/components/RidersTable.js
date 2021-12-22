import React, {useEffect, useState} from 'react';
import {Table, Radio, Divider} from 'antd';

import PropTypes from "prop-types";
import Search from "antd/es/input/Search";
import firebase from "firebase/compat";

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
        if(filtered.length===0) parentCallback('')

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

    return (
        <div>
            <Search placeholder="Find Kid by name" onSearch={onSearch} style={{width: 200}}/>
            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }
                }
                columns={columns}
                dataSource={filtered}
            />

        </div>
    );
};

/*RidersTable.propTypes = {
    data: PropTypes.array.isRequired
}*/
export default RidersTable;