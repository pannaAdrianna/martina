import {Card, Row, Col, Form, Layout, Space, Switch, Typography} from "antd";
import {Content} from "antd/es/layout/layout";
import React, {useEffect, useState} from "react";
import RideForm from "./AddNewRideForm";
import {KidForm} from "./AddNewKidForm";
import {KidFinder} from "./KidFinder";
import firebase from "firebase/compat";


const {Title} = Typography;


const Dashboard = () => {

    const [date, setDate] = useState()
    const [name, setName] = useState()
    const [total, setTotal] = useState(0)
    const [boss, setBoss] = useState('')
    const [my, setMy] = useState(0)
    const [kid, setKid] = useState(0)

    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([])


    useEffect(() => {
        document.title = `Dashboard`
        setName("Martyna")
        setDate(new Date().toLocaleDateString())

        // setTotal(getTotalFromDB)
        getRidesList()
        console.log(list)

        list.length > 0 ?
            setTotal(list.reduce((a, v) => a = a + v.total), 0)
            :
            setTotal(0)

        const sum = list.reduce((agg, item) => {
            ['total'].forEach(f => agg[f] += item.total[f] || 0);
            return agg;
        }, {Total: 0});
        console.log(sum);
        console.log("Sumaaa", sum)


        console.log("total", total)


    }, [])

    function getRidesList() {

        const ref = firebase.firestore().collection('payout');
        setLoading(true);

        let instructorId = 'instructor1'

        let startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);
        let endOfToday = new Date();
        endOfToday.setHours(23, 59, 59, 999);

        ref
            // .where('added', '==', instructorId)
            .where('rideDate', '>=', startOfToday)
            .where('rideDate', '<=', endOfToday)
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
                setLoading(false);
                console.log("items", items.length)
                console.log("items", items)
            });
        console.log(list)


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
                            {loading ? <>
                                    loading...
                                </>
                                :
                                <>
                                    <ul>W saszetce: {total} zł
                                        <li>Karolina: {boss} zł</li>
                                        <li>{name}: {my} zł</li>
                                    </ul>
                                </>
                            }
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
