import {Alert, Button, Card, Form, InputNumber, Layout, Space} from "antd";
import {Content} from "antd/es/layout/layout";
import {useEffect, useRef, useState} from "react";

const Prices = () => {

    const [lungeValue, setLungeValue] = useState();
    const [unitValue, setUnitValue] = useState();
    const [indyvidualLungeValue, setIndyvidualLungeValue] = useState();
    const [doubleLungeValue, setDoubleLungeValue] = useState();
    const lungeRef = useRef()
    const doubleLungeRef = useRef()
    const indyvidualLungeRef = useRef()
    const unitRef = useRef()

    const [error, setError] = useState('')

    useEffect(() => {
        document.title = `Dashboard`
        /*setLungeValue(10)
        setIndyvidualLungeValue(20)
        setDoubleLungeValue(40)
        setUnitValue(5)*/
    }, [])

    function handleChange() {

     /*   let temp = {
            lunge: lungeRef.current,
            doubleLunge: doubleLungeRef.current,
            indyvidualLunge: indyvidualLungeRef.current,
            unitLunge: unitRef.current
        }*/
        setLungeValue((lungeRef.current))
        setIndyvidualLungeValue(indyvidualLungeRef.current)
        setDoubleLungeValue(doubleLungeRef.current)
        setUnitValue(unitRef.current)
        // history.push("/register-test", {selectedPatient: patient})}


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
                        <p>Lonża: {lungeValue} zł</p>
                        <Form onValuesChange={handleChange}>
                            {/*lunge*/}
                            {error && <Alert severity="info">{error}</Alert>}
                            <Form.Item label="Lonża">
                                <InputNumber value={lungeValue} inputref={lungeRef}/> zł
                            </Form.Item>
                            <Form.Item label="Podwójna jazda">
                                <InputNumber value={doubleLungeValue} inputref={doubleLungeRef}/> zł
                            </Form.Item>
                            <Form.Item label="Indywidualna jazda">
                                <InputNumber value={indyvidualLungeValue} inputref={indyvidualLungeRef}/> zł
                            </Form.Item>
                            <Form.Item label="Zastęp">
                                <InputNumber value={unitValue} inputref={unitRef}/> zł
                            </Form.Item>
                            <Button
                                // onClick={() => history.push("/register-test", {selectedPatient: patient})}
                                onClick={handleChange}>Submit</Button>
                        </Form>


                    </Card>
                </Space>
            </Content>
        </Layout>


    )
}
export default Prices;

