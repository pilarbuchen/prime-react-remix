import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Menubar } from 'primereact/menubar';
import { Panel } from 'primereact/panel';
import { Message } from 'primereact/message';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { ProgressBar } from 'primereact/progressbar';
import { Badge } from 'primereact/badge';
import { Timeline } from 'primereact/timeline';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';

import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styles from './my-pfime-react-component.module.scss';
import classNames from 'classnames';

const MyPrimeReactAppPage = () => {
    const containerStyle = {
        backgroundColor: '#1e1e1e',
        minHeight: '100vh',
    };

    const contentStyle = {
        padding: '2rem',
    };

    const cardStyle = {
        marginBottom: '2rem',
        backgroundColor: '#2d2d2d',
    };

    const footerStyle = {
        backgroundColor: '#2d2d2d',
        color: '#ffffff',
        padding: '1.5rem',
        marginTop: '2rem',
    };

    return (
        <div style={containerStyle}>
            <Menubar
                start={<h3 className="m-2 text-white">My App</h3>}
                style={{ backgroundColor: '#2d2d2d' }}
            />

            <div style={contentStyle}>
                <div className="grid" style={{ margin: '0', rowGap: '2rem' }}>
                    <div className="col-12 lg:col-8" style={{ padding: '0rem' }}>
                        <div>
                            <Card style={cardStyle} className="shadow-4">
                                <div className={styles.div1}>Get Started</div>
                                <form className={styles.container}>
                                    <div className="flex flex-column" style={{ gap: '2rem' }}>
                                        <div
                                            className={classNames(
                                                'p-float-label',
                                                styles.container
                                            )}
                                        >
                                            <InputText id="email" className="w-full p-3" />
                                            <label htmlFor="email">Email</label>
                                        </div>

                                        <div className="p-float-label">
                                            <Password
                                                id="password"
                                                toggleMask
                                                className={classNames('w-full', styles.container)}
                                            />
                                            <label htmlFor="password">Password</label>
                                        </div>

                                        <div
                                            className={classNames(
                                                'flex',
                                                'align-items-center',
                                                styles.container
                                            )}
                                        >
                                            <Checkbox inputId="remember" />
                                            <label htmlFor="remember" className="ml-3 text-white">
                                                Remember me
                                            </label>
                                        </div>

                                        <Button
                                            label="Submit"
                                            icon="pi pi-check"
                                            className={classNames(
                                                'p-button-raised',
                                                'p-button-md',
                                                styles.container
                                            )}
                                        />
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>

                    <div className="col-12 lg:col-4" style={{ padding: '1rem' }}>
                        <Accordion
                            multiple
                            className={classNames(
                                'shadow-4',
                                styles.accordion,
                                styles.accordion1
                            )}
                        >
                            <AccordionTab header="Quick Stats" className="container">
                                <div className="mb-4">
                                    <h5 className="text-white mb-3">Progress Overview</h5>
                                    <ProgressBar value={65} style={{ height: '1.5rem' }} />
                                </div>
                                <div className="flex gap-3">
                                    <div>
                                        <div  className={styles.dropdowncontainer} >
                                            <Badge value="New" severity="info" size="large" />
                                        </div>
                                      
                                      <div  className={styles.dropdowncontainer}>  <Badge value="Updated" severity="warning" size="large" /> </div>
                                      <div  className={styles.dropdowncontainer}>  <Badge value="Complete" severity="success" size="large" /> </div>
                                    </div>
                                </div>
                            </AccordionTab>
                            <AccordionTab header="Recent Activity">
                                <Timeline
                                    className="p-3"
                                    content={(item) => (
                                        <div className="text-white">
                                            <small className="text-gray-400">{item.date}</small>
                                            <div className="mt-2">{item.status}</div>
                                        </div>
                                    )}
                                />
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

                <div className="grid mt-6">
                    <div className="col-12 lg:col-8 lg:col-offset-2">
                        <Panel header="Featured Content" className="shadow-4" style={cardStyle}>
                            <div className="flex flex-column align-items-center p-4">
                                <Avatar
                                    icon="pi pi-user"
                                    size="xlarge"
                                    className="mb-4"
                                    style={{ backgroundColor: '#4f46e5', color: '#ffffff' }}
                                />
                                <h3 className="text-white mb-3">Special Feature</h3>
                                <p className="text-center text-gray-300 mb-4">
                                    Discover our amazing features and boost your productivity today!
                                </p>
                                <Button
                                    label="Learn More"
                                    icon="pi pi-external-link"
                                    className="p-button-outlined p-button-md"
                                />
                            </div>
                        </Panel>
                    </div>
                </div>
            </div>

            <div style={footerStyle} className="text-center">
                <small className="text-gray-400">© 2024 My App. All rights reserved.</small>
            </div>
        </div>
    );
};

export default MyPrimeReactAppPage;
