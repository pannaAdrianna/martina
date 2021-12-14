
import React, {useState, useEffect, Fragment} from "react";
import {v4 as uuidv4} from "uuid";
import PatientsTable from "../components/doc/patients/PatientsTable";


function PatientsFirebase() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const firebase = require("firebase");
// Required for side-effects
    require("firebase/firestore");
    const ref = firebase.firestore().collection("patients");

    //REALTIME GET FUNCTION
    function getSchools() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setPatients(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getSchools();
        // eslint-disable-next-line
    }, []);

    // ADD FUNCTION
    function addSchool(newSchool) {
        ref
            //.doc() use if for some reason you want that firestore generates the id
            .doc(newSchool.id)
            .set(newSchool)
            .catch((err) => {
                console.error(err);
            });
    }

    //DELETE FUNCTION
    function deleteSchool(school) {
        ref
            .doc(school.id)
            .delete()
            .catch((err) => {
                console.error(err);
            });
    }

    // EDIT FUNCTION
    function editSchool(updatedSchool) {
        setLoading();
        ref
            .doc(updatedSchool.id)
            .update(updatedSchool)
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <Fragment>
            {/*<h1>Schools (SNAPSHOT)</h1>*/}
            {/*<div className="inputBox">*/}
            {/*    <h3>Add New</h3>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        value={title}*/}
            {/*        onChange={(e) => setTitle(e.target.value)}*/}
            {/*    />*/}
            {/*    <textarea value={desc} onChange={(e) => setDesc(e.target.value)}/>*/}
            {/*    <button onClick={() => addSchool({title, desc, id: uuidv4()})}>*/}
            {/*        Submit*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<hr/>*/}
            {loading ? <h1>Loading...</h1> : null}
            {patients.map((school) => (
                <div className="school" key={school.pesel}>
                    <h2>{school.name}</h2>
                    <p>{school.name}</p>
                    <div>
                        <button onClick={() => deleteSchool(school)}>X</button>
                    </div>
                </div>
            ))}}
            <PatientsTable list={patients}/>
            {console.log(patients)}
        </Fragment>
    );
}
