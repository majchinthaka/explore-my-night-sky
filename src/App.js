import React from "react";
import Moon from './Moon';
import Star from './Star';
import Mars from "./Mars";
import './App.css';
import {Col, Row} from "react-bootstrap";

const App = () => {
    const fixedStarPositions = [
        { left: '10%', top: '15%' },
        { left: '65%', top: '10%' },
        { left: '5%', top: '35%' },
        { left: '20%', top: '50%' },
        { left: '75%', top: '80%' },
        { left: '90%', top: '20%' },
        { left: '30%', top: '80%' },
        { left: '75%', top: '45%' },
        { left: '60%', top: '55%' },
        { left: '45%', top: '30%' },


        { left: '90%', top: '40%' },
        { left: '15%', top: '50%' },
        { left: '30%', top: '40%' },
        { left: '50%', top: '20%' },
        { left: '70%', top: '60%' },
        { left: '20%', top: '80%' },
        { left: '80%', top: '30%' },
        { left: '45%', top: '75%' },
        { left: '25%', top: '25%' },
        { left: '35%', top: '70%' },
        { left: '40%', top: '10%' },
        { left: '55%', top: '85%' },
        { left: '12%', top: '60%' },
        { left: '50%', top: '90%' },
        { left: '70%', top: '15%' },
        { left: '85%', top: '70%' },
        { left: '65%', top: '40%' },
        { left: '10%', top: '75%' },
        { left: '55%', top: '5%' },
        { left: '35%', top: '20%' },
        { left: '80%', top: '65%' },
        { left: '25%', top: '45%' },
        { left: '60%', top: '10%' },
        { left: '15%', top: '85%' },
        { left: '50%', top: '30%' },
        { left: '40%', top: '55%' },
    ];

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < fixedStarPositions.length; i++) {
            stars.push(<Star key={i} index={i} fixedStarPositions={fixedStarPositions} />);
        }
        return stars;
    };

    return (
        <div>
            <div className="App" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#130f40' }}>
                <Row>
                    <Col lg={12} md={12} sm={12} style={{textAlign: 'center', backgroundColor: '#130f40'}}>
                        <h5 style={{color: 'white'}}>Explore My Night Sky and Find Secrets.. 🌙⭐💫✨🪐🛰️</h5>
                    </Col>
                </Row>

                <Moon />
                {renderStars()}
                <Mars />
            </div>
        </div>
    );
};

export default App;
