import React, {useState} from 'react';
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

const RideForm = data => {

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

    const onReset = () => {
        form.resetFields();
    };


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

    function clearForm() {
        form.resetFields()
    }


    function add(ride) {
        let docr = '06ab6364-40df-422a-be57-b9ad2ff304e6' // reference for rider id
        ref
            .doc(docr)
            .collection('rides')
            .add(ride)
            .catch((err) => {
                console.error(err);
            });
        setSuccess(`Dodano  ${ride.total} do bazy danych`)
        clearForm();

    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setTotal(form.getFieldValue('total'))


        try {
            setError("");

            // const added = currentUser ? currentUser.uid : 'unknown';
            const added = 'instructor1';
            const instructorRef = 'instructor1';


            const ride = {
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
                instructorRef: firebase.firestore().collection(`instructors`).doc(`${instructorRef}`),
                added: instructorRef,
                rideType: form.getFieldValue('lungeType'),
                total: form.getFieldValue('total'),
                price: form.getFieldValue('price')

            }
            add(ride);

        } catch (e) {
            setError("Failed to create an account!")
            console.log(e)
        }


    }


    return (

        <Form {...layout} form={form} name="control-hooks" onSubmit={handleSubmit} onFinish={onFinish}>

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
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Dodaj
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>


    );
};
export default RideForm;