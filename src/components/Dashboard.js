import {Card, Row, Col, Form, Layout, Space, Switch, Typography} from "antd";
import {Content} from "antd/es/layout/layout";
import React, {useEffect, useState} from "react";
import RideForm from "./AddNewRideForm";
import {KidForm} from "./AddNewKidForm";
import {KidFinder} from "./KidFinder";


const {Title} = Typography;


const Dashboard = () => {

    const [date, setDate] = useState()
    const [name, setName] = useState()
    const [total, setTotal] = useState(0)
    const [boss, setBoss] = useState(0)
    const [my, setMy] = useState(0)
    const [kid, setKid] = useState(0)


    useEffect(() => {
        document.title = `Dashboard`
        setName("Martyna")

        setDate(new Date().toLocaleDateString())
    }, [])


    function handleTotal() {


    }

    function handleKid(value) {
        console.log('Dashboard')
        console.log('Dashboard ID kid chosen fT: ', value)
        setKid(value)

    }

    return (
        <Layout>
            <Content style={{gap: 10}}>
                {/*<Space direction="vertical">*/}
                {/*<Title level={1}>Dzień Dobry {user.name}</Title>*/}
                <Row style={{gap: 10}}>
                    <Col> <Title level={1}>Witaj, Martyna</Title></Col>
                    <Col>
                        <Card title="Kalendarz" bordered={false}>
                            <p>Dziś jest <b>{date}</b></p>
                            <Form>
                                <Form.Item label="Czy zastępstwo?" valuePropName="checked">
                                    <Switch/>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>

                    <Col>
                        <Card title="Zarobek dzisiaj" bordered={false}>
                            <ul>W saszetce: {total} zł
                                <li>Karolina: {boss} zł</li>
                                <li>{name}: {my} zł</li>
                            </ul>

                        </Card>

                    </Col>
                    <Col>

                        <Card title="Dodaj dziecko" bordered={false}>
                            <KidForm/>
                        </Card>
                    </Col>
                </Row>

                {/*</Space>*/}


            </Content>
        </Layout>

    )

};
export default Dashboard
