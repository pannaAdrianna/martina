import {Image, Space} from "antd";
import Layout, {Content} from "antd/es/layout/layout";

const Random = () => {


    return (

        <Layout>
            <Content style={{span: 10}}>
                <Space direction="vertical">
                    <Image src="/martina/martina.jpg" height="400px"/>
                </Space>
            </Content>
        </Layout>

    )
}
export default Random;
