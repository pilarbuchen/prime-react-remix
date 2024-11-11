import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const MyPrimeReactComponent = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <Button
                label="Click You"
                icon="pi pi-check"
                className="p-button-raised p-button-lg p-button-primary"
            />
            <h2>Welcome to Codux with PrimeReact!</h2>

            <div style={{ marginTop: '20px' }}>
                <Button
                    label="Another Button"
                    icon="pi pi-info-circle"
                    className="p-button-raised p-button-lg p-button-primary"
                    style={{ marginLeft: '10px' }}
                />
            </div>

            <div style={{ marginTop: '20px' }}>
                <span className="p-float-label">
                    <label htmlFor="input">Enter Name</label>
                    <InputText id="input" />
                </span>
            </div>

            <Divider />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Card
                    title="Cards Header"
                    style={{ width: '25rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
                >
                    <p className="p-m-0">
                        This is some content inside the card. PrimeReact provides a comprehensive
                        suite of UI components.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default MyPrimeReactComponent;
