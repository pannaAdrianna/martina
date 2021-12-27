import {Alert, Button, Form, Input, Space} from "antd";
import firebase from "firebase/compat";
import {useRef, useState} from "react";
import {v4 as uuidv4} from 'uuid';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export const KidForm = () => {

    const [form] = Form.useForm();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const ref = firebase.firestore().collection('kids');



    function clearForm() {

        form.resetFields()
    }

    function add(kid) {

        ref
            .doc(kid.id)
            .set(kid)
            .catch((err) => {
                console.error(err);
            });
        setSuccess(`Dodano  ${kid.name} ${kid.surname} do bazy danych`)
        clearForm();

    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');


        try {
            setError("");

            // const added = currentUser ? currentUser.uid : 'unknown';
            const added = 'instructor1';
            const instructorRef = 'instructor1';

            let name = form.getFieldValue('name')
            // let surname=form.getFieldValue('surname')
            let surname = "nazwisko"
            let phone = '666666666'

            let kids_rides = []
            let t=uuidv4()

            const newKid = {
                name,
                surname,
                phone,
                id: t,
                key: t,
                added: instructorRef,
                instructorRef: firebase.firestore().collection(`instructors`).doc(`${instructorRef}`),
                kids_rides,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
                hasPass: true
            }
            add(newKid);
        } catch (e) {
            setError("Failed to create an account!")
            console.log(e)
        }


    }

    return (
        <Form onSubmit={handleSubmit} form={form} {...layout}>
            {error &&  <Alert
                description={error}
                type="error"
                showIcon
            />}
            {success &&  <Alert
                description={success}
                type="success"
                showIcon
            />}

            <Form.Item label="name" name="name">
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button onClick={handleSubmit}>Add</Button>
            </Form.Item>


        </Form>

    )
}
