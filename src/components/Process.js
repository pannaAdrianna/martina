import Layout, {Content} from "antd/es/layout/layout";
import {Card, Col, Row, Space} from "antd";


import {Steps, Button, message} from 'antd';
import {useEffect, useState} from "react";
import {KidFinder} from "./KidFinder";
import {UserOutlined} from "@ant-design/icons";
import AddNewRideForm from "./AddNewRideForm";
import firebase from "firebase/compat";
import Title from "antd/es/typography/Title";
import {useNavigate} from "react-router";
import {GiHorseHead} from "react-icons/gi";


const {Step} = Steps;


const Process = data => {

    const [current, setCurrent] = useState(0);
    const [id, setId] = useState('')
    const [ride, setRide] = useState([])
    const [tempStat, setStat] = useState(false)
    const navigate = useNavigate()

    const refRides = firebase.firestore().collection('rides');


    useEffect(() => {
        setId('')
    }, []);

    const callbackFromKidFinder = (idKid) => {
        // do something with value in parent component, like save to state
        console.log("Callback from Kid Finder: ", idKid)
        setId(idKid)
    }

    const callbackFromRideForm = (ride) => {
        // do something with value in parent component, like save to state
        console.log("Callback from Ride Form: ", ride)
        setRide(ride)
    }

    function add(ride) {
        // reference for rider id
        refRides
            .doc(`${id}`).collection(`rides`)
            .add(ride, {merge: true})
            .catch((err) => {
                console.error(err);
                // setError(err);
            });
        // setSuccess(`Dodano  ${ride.total} do bazy danych`)


    }


    const steps = [
        {
            title: 'Wybierz jeźdźca',
            icon: <UserOutlined/>,
            content: <KidFinder parentCallback={callbackFromKidFinder}/>,
        },
        {
            title: 'Wybierz typ jazdy',
            icon: <GiHorseHead/>,
            content:
                <AddNewRideForm parentCallback={callbackFromRideForm}/>,
        },
        {
            title: 'Podsumowanie',
            icon: <UserOutlined/>,
            content:
                <div className="site-card-border-less-wrapper">
                    <Card title="Podsumowanie jazdy">

                        <Row>
                            <Col flex={3}>
                                <p>Rider name: imię</p>
                            </Col>
                            <Col flex={3}>
                                <p>Rider Id: {id}</p>
                            </Col>
                            <Col flex={3}>
                                <p>Rider price: {ride.price}</p>
                            </Col>
                            <Col flex={3}><p>Rider total: {ride.total}</p></Col>
                            <Col flex={3}><p>Ride type: {ride.rideType}</p></Col>
                            <Col flex={3}><p>Czy karnet - zaimplementować</p></Col>

                        </Row>
                    </Card>
                </div>
        },
        {
            title: 'Koniec',
            icon: <UserOutlined/>,
            content: <div>
                <Title>Dodano do bazy</Title>

            </div>,
        },
    ];


    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    function handleAdd() {
        message.success(`Added ride for: ${id}`)
        add(ride)
        next()

    }


    return (
        <Layout>
            <Content>
                <Space direction="vertical">
                    <Row>
                        <Card>
                            <Col flex="auto">

                                <span>Process Id: {id}</span> </Col>
                            <Col> <span>Process Ride total: {ride.total}</span></Col>


                        </Card>
                    </Row>
                    <Row>
                        <Col flex="auto">
                            <Card>
                                <Steps current={current}>
                                    {steps.map(item => (
                                        <Step key={item.title} title={item.title}/>
                                    ))}
                                </Steps>
                            </Card>
                        </Col>
                    </Row>


                    <div className="steps-action">
                        {current === 0 && (
                            id.length > 0 ?

                                <Button type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                                :
                                <span>Choose Rider first
                                        </span>
                        )}
                    </div>
                    <Card>
                        <div className="steps-content">{steps[current].content}</div>
                    </Card>
                    <div className="steps-action">
                        {current < steps.length - 1 && current !== 2 && (
                            id.length > 0 ?

                                <Button type="primary" onClick={() => next()}>
                                    Next
                                </Button>
                                :
                                <span>Choose Rider first
                                        </span>


                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => {
                                setCurrent(0)
                                // message.success(`Done`)
                            }}>
                                Add another
                            </Button>
                        )}
                        {current === 2 && (
                            <Button type="primary" onClick={handleAdd}>
                                Add
                            </Button>
                        )}


                        {current > 0 && current !== steps.length - 1 && (
                            <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                                Previous
                            </Button>
                        )}
                    </div>


                </Space>
            </Content>
        </Layout>
    )
}
export default Process;
