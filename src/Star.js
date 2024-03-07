import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from "react-modal";
import {Col, Form, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const StarContainer = styled.div`
  position: absolute;
  width: ${(props) => (props.shining ? '4px' : '3px')};
  height: ${(props) => (props.shining ? '4px' : '3px')};
  background-color: #fff; /* Star color */
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Star glow effect */
  opacity: ${(props) => (props.shining ? 1 : 0.3)};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const Star = ({ index, fixedStarPositions }) => {
    const [show, setShow] = useState(false);
    const [shining, setShining] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [question, setQuestion] = useState({})
    const [validate, setValidate] = useState("")

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setShining(true);
            setTimeout(() => {
                setShining(false);
            }, 400); // Adjust the shining duration (in milliseconds)
        }, Math.random() * 5000 + 2000); // Random interval between 2000ms and 7000ms

        return () => clearInterval(blinkInterval);
    }, []);

    const fixedPosition = fixedStarPositions[index];

    const questions = [
        {
            q: "What is the first topic of our conversation begin?",
            a: "kuweni",
            g: "B"
        },
        {
            q: "What is the objects of we discussed briefly?",
            a: "Stars",
            g: "3"
        },
        {
            q: "What is thing of we discussed briefly?",
            a: "Subject to change",
            g: "5"
        },
        {
            q: "What is the best moment as we discussed?",
            a: "Present",
            g: "T"
        },
        {
            q: "What is the song I gave you a reply?",
            a: "Matath kaviyak liyanna",
            g: "F"
        },
        {
            q: "What is the peaceful place to think and talk?",
            a: "The sea",
            g: "R"
        },
        {
            q: "When is my birthday?",
            a: "1996-04-11",
            g: "1"
        },
        {
            q: "What is my favourite color?",
            a: "Yellow",
            g: "3"
        },
        {
            q: "What is the youtube channel I suggest to watch for you?",
            a: "Ramuwa",
            g: "N"
        },
        {
            q: "What us become sad?",
            a: "Love and attachment",
            g: "D"
        }
    ]

    const handleStarClick = () => {
        setShow(false)
        setValidate("")

        if (index >= 0 && index <= 10) {
            setQuestion(questions[index])
            setPopupOpen(true);
        }
    };

    const closeModal = () => {
        setPopupOpen(false);
    };

    const handleAnswer = (e, index) => {
        if((e.target.value).toLowerCase() === (questions[index].a).toLowerCase()) {
            setShow(true)
        } else {
            setShow(false)
            setValidate(false)
        }
    }

    return (
        <>
            <StarContainer style={fixedPosition} shining={shining} onClick={handleStarClick} />
            <Modal
                isOpen={isPopupOpen}
                onRequestClose={closeModal}
                contentLabel="Star Popup"
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
                    {!show ? <Col sm={12} md={12} lg={12}>
                        <h2>{question.q}</h2>
                        <br/>
                        <Form.Control
                            type="text"
                            size="sm"
                            placeholder={(index === 6) ? "YYYY-MM-DD" : "Give your answer..."}
                            onChange={e => handleAnswer(e, index)}
                        />
                        {(validate !== "" && !show) ? <code style={{color: '#e74c3c'}}>Invalid answer</code> : null}
                    </Col> : <Col>
                        <h2>🖤</h2>
                        <h3>Password key: <b>{question.g}</b></h3>
                        <p>Please find other keys for explore the Moon.</p>
                    </Col>}
                </Row>

            </Modal>
        </>
    );
};

export default Star;
