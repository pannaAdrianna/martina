import {Button, Card, Form, InputNumber, Layout, Space} from "antd";
import {Link} from "react-router-dom";
import {Content} from "antd/es/layout/layout";
import {useEffect, useState} from "react";

const Prices = () => {

    const [lungeValue, setLungeValue]=useState();
    const [unitValue, setUnitValue]=useState();
    const [indyvidualLungeValue, setIndyvidualLungeValue]=useState();
    const [doubleLungeValue, setDoubleLungeValue]=useState();

    useEffect(() => {
        document.title = `Dashboard`
        setLungeValue(10)
        setIndyvidualLungeValue(20)
        setDoubleLungeValue(40)
        setUnitValue(5)
    }, [])

    function handleChange() {

    }

    return (
        <Layout>
            <Content style={{span: 10}}>
                <Space direction="vertical">
                    <Card title="Moje stawki" bordered={false} style={{width: 300}}>
                        {/*  lonża 10
            indy 20
            podw 40
            zastep 5 za os*/}
                        <Form onValuesChange={handleChange}>
                            {/*lunge*/}
                            <Form.Item label="Lonża">
                                <InputNumber value={lungeValue}/> zł
                            </Form.Item>
                            <Form.Item label="Podwójna jazda">
                                <InputNumber value={doubleLungeValue} /> zł
                            </Form.Item>
                            <Form.Item label="Indywidualna jazda">
                                <InputNumber value={indyvidualLungeValue}/> zł
                            </Form.Item>
                            <Form.Item label="Zastęp">
                                <InputNumber value={unitValue}/> zł
                            </Form.Item>
                            <Button>Submit</Button>
                        </Form>


                    </Card>
                </Space>
            </Content>
        </Layout>


    )
}
export default Prices;

