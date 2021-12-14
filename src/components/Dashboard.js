import {Card, Form, Layout, Space, Switch, Typography} from "antd";
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
        console.log('Dashboard ID kid chosen fT: ',value)
        setKid(value)

    }

    return (
        <Layout>
            <Content style={{span: 10}}>
                <Space direction="vertical">
                    {/*<Title level={1}>Dzień Dobry {user.name}</Title>*/}
                    <Title level={1}>Witaj, Martyna</Title>
                    <Card title="Kalendarz" bordered={false} style={{width: 300}}>
                        <p>Dziś jest <b>{date}</b></p>
                        <Form>
                            <Form.Item label="Czy zastępstwo?" valuePropName="checked">
                                <Switch/>
                            </Form.Item>
                        </Form>
                    </Card>
                    <Card title="Zarobek dzisiaj" bordered={false} style={{width: 300}}>
                        <ul>W saszetce: {total} zł
                            <li>Karolina: {boss} zł</li>
                            <li>{name}: {my} zł</li>
                        </ul>

                    </Card>
                    <Card title="Dodaj dziecko" bordered={false} style={{width: 300}}>
                        <KidForm/>
                    </Card>

                    <Card title="Dodaj nową jazdę" bordered={false} style={{width: 600}}>
                        <RideForm/>
                    </Card>

                    <Card title="Wybierz dziecko" bordered={false} style={{width: 600}}>
                        <KidFinder selectedID={handleKid}/>
                    </Card>
                    Kid: {kid}
                </Space>


            </Content>
        </Layout>

    )

};
export default Dashboard