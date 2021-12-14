import Layout, {Content} from "antd/es/layout/layout";
import {Space} from "antd";


import {Steps, Button, message} from 'antd';
import {useState} from "react";
import {KidFinder} from "./KidFinder";
import AddNewRideForm from "./AddNewRideForm";
import {UserOutlined} from "@ant-design/icons";

const {Step} = Steps;

const steps = [
    {
        title: 'Wybierz jeźdźca',
        icon: <UserOutlined/>,
        content: <KidFinder/>,
    },
    {
        title: 'Wybierz typ jazdy',
        icon: <UserOutlined/>,
        content: <AddNewRideForm/>,
    },
    {
        title: 'Podsumowanie',
        icon: <UserOutlined/>,
        content: 'Tu wyświetlić',
    },
    {
        title: 'Koniec',
        icon: <UserOutlined/>,
        content: 'Last-content',
    },
];

const Process = () => {

    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    return (
        <Layout>
            <Content style={{span: 10}}>
                <Space direction="vertical">

                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title}/>
                        ))}
                    </Steps>
                    <Layout style={{minHeight: "100vh"}}>
                        <Content style={{span: 40}}>
                            <div className="steps-content">{steps[current].content}</div>
                            <div className="steps-action">
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => next()}>
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
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
