import React, {useState} from 'react';
import {
    Form,
    Button,
    Select, Typography,
} from 'antd';

const {Title} = Typography;

const RideForm = () => {
    const [componentSize, setComponentSize] = useState('default');

    const [price, setPrice] = useState(0)


    return (
        <Form
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            size="default"
        >

            <Form.Item label="Jazda">
                <Select>
                    <Select.Option value="ind">Indywidualna</Select.Option>
                    <Select.Option value="2ind">Podwójna indywidualna</Select.Option>
                    <Select.Option value="lon">Lonża</Select.Option>
                    <Select.Option value="zas">Zastęp</Select.Option>
                </Select>
            </Form.Item>
            <Title level={5}>Cena: {price} zł</Title>
            <Form.Item label="Button">
                <Button>Button</Button>
            </Form.Item>
        </Form>
    );
};
export default RideForm;