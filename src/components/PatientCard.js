import {Card} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import React, {useEffect, useState} from "react";
import {useStyles} from "../../theme";
import {format} from "date-fns";

import Patient from "./Patient";
import Title from "antd/es/typography/Title";

const PatientCard = (props) => {



    const [currentPatient, setCurrentPatient] = useState({});



    useEffect(() => {
        console.log('Rider card')
        setCurrentPatient(prevState => {
            // Object.assign would also work
            return {...prevState, ...new Patient(props.myPatient.name, props.myPatient.surname)};
        });
        console.log('Radier Card:', currentPatient)
    }, []);


    // let datePattern = "dd.MM.yyyy"

    return (

        <Card>

            <Box sx={{display: 'flex', flexDirection: 'column', gap: 10}}
                 component="div" alignItems="left">
                <Title level={5}>
                    Name: {currentPatient.name}
                </Title>

            </Box>


        </Card>


    )

}
export default PatientCard;