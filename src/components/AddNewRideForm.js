import React, {useState} from 'react';
import {
    Form,
    Button,
    Select, Typography, Input,
} from 'antd';
import {InputNumber} from "antd/es";
import {Option} from "antd/es/mentions";
import Text from "antd/es/typography/Text";

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

const RideForm = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);

        // tu dodaj wysyłanie gdzieś -> chyba na serwer
        form.resetFields();
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            total: '0',
        });
    };


    const onRideTypeChange = (value) => {
        switch (value) {

            case 'ind':
                form.setFieldsValue({
                    price: '90',
                });
                return;

            case 'doubleInd':
                form.setFieldsValue({
                    price: '80',
                });
                return;
            case 'lunge':
                form.setFieldsValue({
                    price: '50',
                });
                return;

            case 'unit':
                form.setFieldsValue({
                    price: '50',
                });
                return;
        }
    };


    return (

        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

            <Form.Item
                name="price"
                label="Price"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input readOnly="true" style={{background: 'lightgrey'}}/>
            </Form.Item>
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
                            <InputNumber/>
                        </Form.Item>
                    ) : null
                }
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
                <Button type="link" htmlType="button" onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>
        </Form>


    );
};
export default RideForm;