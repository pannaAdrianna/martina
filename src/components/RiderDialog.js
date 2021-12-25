import PropTypes from "prop-types";
import Modal from "antd/es/modal/Modal";
import {useEffect} from "react";
import Title from "antd/es/typography/Title";

const RiderDialog = (props) => {

    useEffect(() => {
        // console.log('Rider Dialog', selectedPatient[0])
        // console.log('PAtientDialog.name', selectedPatient.name)
        // let pat = new Patient(select)


        // eslint-disable-next-line
    }, []);


    /*const handleClose = () => {
        onClose();
    };*/


    let year = new Date().getFullYear()
    let datePattern = "dd.MM.yyyy"
    const [modal, contextHolder] = Modal.useModal();

    return (
       <Modal>
           <Title level={1}>Tytuł</Title>

       </Modal>
    );
}

/*RiderDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedPatient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        pesel: PropTypes.string.isRequired
    })
};*/
export default RiderDialog;
