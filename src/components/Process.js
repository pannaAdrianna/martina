import Layout, {Content} from "antd/es/layout/layout";
import {Card, Space} from "antd";


import {Steps, Button, message} from 'antd';
import {useState} from "react";
import {KidFinder} from "./KidFinder";
import {UserOutlined} from "@ant-design/icons";
import AddNewRideForm from "./AddNewRideForm";
import firebase from "firebase/compat";


const {Step} = Steps;


const Process = data => {

    const [current, setCurrent] = useState(0);
    const [id, setId] = useState('')
    const [ride, setRide] = useState([])
    const [tempStat, setStat] = useState(false)

    const refRides = firebase.firestore().collection('rides');


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
            icon: <UserOutlined/>,
            content:
                <AddNewRideForm parentCallback={callbackFromRideForm}/>,
        },
        {
            title: 'Podsumowanie',
            icon: <UserOutlined/>,
            content: <div className="site-card-border-less-wrapper">
                <Card title="Podsumowanie jazdy">
                    <p>Rider name: imię</p>
                    <p>Rider Id: {id}</p>
                    <p>Rider price: {ride.price}</p>
                    <p>Rider total: {ride.total}</p>
                    <p>Czy karnet - zaimplementować</p>

                </Card>
            </div>,
        },
      /*  {
            title: 'Koniec',
            icon: <UserOutlined/>,
            content: 'Last-content',
        },*/
    ];


    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    function handleAdd(){

        message.success(`Added ride for: ${id}`)
        add(ride)

    }


    return (
        <Layout>
            <Content style={{span: 10}}>
                <Space direction="vertical">
                    <span>Process Id: {id}</span>
                    <span>Process Ride total: {ride.total}</span>
                    {/*<span>Process Ride total: {ride.total}</span>*/}
                    {/*<span>Process Ride total: {ride.total}</span>*/}
                    {/*<span>Process Ride price: {ride.price}</span>*/}
                    {/*<span>Process Ride createdAt: {ride.createdAt}</span>*/}
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title}/>
                        ))}
                    </Steps>
                    <Layout style={{minHeight: "100vh"}}>


                        <Content style={{span: 40}}>
                            <Card>
                                <div className="steps-content">{steps[current].content}</div>
                            </Card>
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                    id.length > 0 ?

                                        <Button type="primary" onClick={() => next()}>
                                            Next
                                        </Button>
                                        :
                                        <span>Choose Rider first
                                        </span>


                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={handleAdd}>
                                        Done
                                    </Button>
                                )}


                                {current > 0 && (
                                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                                        Previous
                                    </Button>
                                )}
                            </div>
                        </Content>

                    </Layout>


                </Space>
            </Content>
        </Layout>
    )
}
export default Process;
