// Mars.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import {Col, Form, Row} from "react-bootstrap";

const MarsContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ff5733; /* Mars color */
  box-shadow: 0 0 10px rgba(255, 87, 51, 0.8); /* Mars glow effect */
  cursor: pointer;
`;

const Mars = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [show, setShow] = useState(false)
    const [validate, setValidate] = useState("")
    const password = "|_0\\/3"

    const handleMarsClick = () => {
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
            <MarsContainer onClick={handleMarsClick} />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Mars Message"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        textAlign: 'center',
                        cursor: 'default',
                    },
                    overlay: {
                        cursor: 'pointer',
                    },
                }}
            >
                <Row>
                    {show ? <Col sm={12} md={12} lg={12}>
                        <h2>Mars👽</h2>
                        <br/>
                        <h3>
                            පමා වී..<br/>පිපුණු මල්‌ සුවඳයි..<br/>පිපුණි දෙතැනක ඒ නමුත්‌ සුවඳ ළෙන්ගතුමයි.
                        </h3>
                        <br/>
                        <p>
                            පමා වී පිපුණු මලකි මට 🖤🖤🖤
                        </p>
                    </Col> : <Col sm={12} md={12} lg={12}>
                        <h2>If you want explore the Mars 👾👽</h2>
                        <h5>Grab the key from the moon 🌙</h5>
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Enter the encrypted key"
                            onChange={handlePassword}
                        />
                        {(validate !== "" && !show) ? <code style={{color: '#e74c3c'}}>Invalid answer</code> : null}
                    </Col>}
                </Row>
            </Modal>
        </>
    );
};

export default Mars;
