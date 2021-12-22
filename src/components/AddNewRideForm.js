import React, {useEffect, useState} from 'react';
import {
    Form,
    Button,
    Select, Typography, Input, Alert,
} from 'antd';
import {InputNumber} from "antd/es";
import {Option} from "antd/es/mentions";
import Text from "antd/es/typography/Text";
import firebase from "firebase/compat";
import {v4 as uuidv4} from "uuid";
import RidersTable from "./RidersTable";

const {Title} = Typography;


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

const AddNewRideForm = ({parentCallback}) => {

    const [total, setTotal] = useState(0)
    const [form] = Form.useForm();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const ref = firebase.firestore().collection('rides');


    const onFinish = (values) => {
        console.log(values);
        // tu dodaj wysyłanie gdzieś -> chyba na serwer
        setTotal(form.getFieldValue('total'))
        // tu na serwer
        form.resetFields();
    };


    useEffect(() => {
        onRideTypeChange("ind")

    }, []);


    const onRideTypeChange = (value) => {
        // eslint-disable-next-line default-case
        switch (value) {

            case 'ind':
                form.setFieldsValue({
                    price: 90,

                });
                form.setFieldsValue({
                    total: form.getFieldValue('price')

                });
                return;


            case 'doubleInd':
                form.setFieldsValue({
                    price: 80,
                    // total: (parseInt(form.getFieldValue('price')) * 2)
                });
                form.setFieldsValue({
                    total: form.getFieldValue('price') * 2

                });
                return;


            case 'lunge':
                form.setFieldsValue({
                    price: 50,
                    // total: (form.getFieldValue('price'))
                });
                form.setFieldsValue({
                    total: form.getFieldValue('price')

                });
                return;


            case 'unit':
                form.setFieldsValue({
                    price: 50,
                    // total: ((form.getFieldValue('customizeUnit')) * (form.getFieldValue('price')))

                });
                form.setFieldsValue({
                    total: (3 * (form.getFieldValue('price')))
                    // total: ((form.getFieldValue('customizeUnit')) * (form.getFieldValue('price')))
                });

                return;
            // updateTotal()


        }


    };


    function updateTotal() {
        form.setFieldsValue({
            total: ((form.getFieldValue('customizeUnit')) * (form.getFieldValue('price')))
        })
    }

    function readValues() {
        const added = 'instructor1';
        const instructorRef = 'instructor1';


        // const ride = {
        //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        //     lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
        //     instructorRef: firebase.firestore().collection(`instructors`).doc(`${instructorRef}`),
        //     added: instructorRef,
        //     rideType: form.getFieldValue('lungeType'),
        //     total: form.getFieldValue('total'),
        //     price: form.getFieldValue('price')
        //
        // }

        parentCallback({ createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
            instructorRef: firebase.firestore().collection(`instructors`).doc(`${instructorRef}`),
            added: instructorRef,
            rideType: form.getFieldValue('lungeType'),
            total: form.getFieldValue('total'),
            price: form.getFieldValue('price')})


    }





    return (

        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} onValuesChange={readValues}>

            {error && <Alert
                description={error}
                type="error"
                showIcon
            />}
            {success && <Alert
                description={success}
                type="success"
                showIcon
            />}
            <Form.Item
                name="lungeType"
                label="Typ jazdy"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    placeholder="Select a option and change input text above"
                    onChange={onRideTypeChange}
                    defaultValue="ind"
                    allowClear
                >
                    <Option value="ind">Indywidualna</Option>
                    <Option value="doubleInd">Podwójna jazda</Option>
                    <Option value="lunge">Lonża</Option>
                    <Option value="unit">Zastęp</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="price"
                label="Cena"
                rules={[
                    {
                        type: 'number',
                        required: true,
                    },
                ]}
            >
                <Input readOnly="true" style={{background: 'lightgrey'}}/>
            </Form.Item>

            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.customizeUnit !== currentValues.customizeUnit}
            >
                {({getFieldValue}) =>
                    getFieldValue('lungeType') === 'unit' ? (
                        <Form.Item
                            name="customizeUnit"
                            label="Ilość osób w zastępie"
                            initialValue={3}
                            rules={[
                                {
                                    type: "number",
                                    min: 3,
                                    required: true,
                                },
                            ]}
                        >
                            <InputNumber onChange={updateTotal}/>
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            <Form.Item
                name="total"
                label="Całościowo:"
                rules={[
                    {
                        type: "number",
                        required: true,
                    },
                ]}
            >
                <Input readOnly="true" style={{background: 'lightgrey'}}/>
            </Form.Item>
            {/*  <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Dodaj
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>*/}
        </Form>


    );
};
export default AddNewRideForm;