import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {Col, Form, Row} from "react-bootstrap";

const MoonContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f0f0f0; /* Moon color */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Moon glow effect */
  cursor: default;
`;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        textAlign: 'center',
        cursor: 'default', // Set the cursor to 'default' for the modal content
    },
    overlay: {
        cursor: 'default', // Set the cursor to 'pointer' for the modal overlay
    },
};

const Moon = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [show, setShow] = useState(false)
    const [validate, setValidate] = useState("")

    const password = "B35TFR13ND"

    const handleMoonClick = () => {
        setShow(false)
        setModalOpen(true);
        setValidate("")
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handlePassword = (e) => {
        if(e.target.value === password) {
            setShow(true)
        } else {
            setShow(false)
            setValidate(false)
        }
    }

    return (
        <>
            <MoonContainer onClick={handleMoonClick} />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Moon Message"
            >
                <Row>
                    {!show ? <Col sm={12} md={12} lg={12}>
                        <h2>If you want to find the message in the Moon 🌙</h2>
                        <br/>
                        <p>Give me the password you found from the stars</p>
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Password"
                            onChange={handlePassword}
                        />
                        {(validate !== "" && !show) ? <code style={{color: '#e74c3c'}}>Invalid answer</code> : null}
                    </Col> : <Col sm={12} md={12} lg={12}>
                        <h2>Wow Excellent Job! 😍 <br/> You did it C. 🖤 </h2>
                        <br/>
                        <h2>Dhanith Sri says <br/>ආදරෙ කියලා හිත පිලිගන්නට <br/>නුඹ තනිකර මගෙ වෙන්නම ඕනෙද 🖤</h2>
                        <br/>
                        <br/>
                        <p>Key for Mars: LOVE</p>
                        <br/>
                        <p>Encrypt the key using this codes: <a href="./map.jpeg" target="_blank">Click Here</a></p>
                    </Col>}
                </Row>
            </Modal>
        </>
    );
};

export default Moon;
