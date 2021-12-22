import React, {useEffect, useState} from 'react';
import {Table, Radio, Divider} from 'antd';

import PropTypes from "prop-types";

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


function RidersTable({parentCallback,data}) {
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            parentCallback(selectedRowKeys)
        }
    };


    useEffect(() => {
        document.title = `Riders Table`
    }, [])

    return (
        <div>
            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }
                }
                columns={columns}
                dataSource={data}
            />

        </div>
    );
};

RidersTable.propTypes = {
    data: PropTypes.array.isRequired
}
export default RidersTable;