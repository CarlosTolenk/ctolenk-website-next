import React from "react";
import MainLayout from "../src/components/templates/MainLayout";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faClock,
    faPhone,
    faEnvelope,
    faPenAlt,
    faUser,
    faCalendarAlt,
    faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import {IPropPageBase} from "../src/intefaces";
import Title from "../src/components/molecules/Title";

interface IPropsAppointments extends IPropPageBase {
}

export default function Appointments({metadata, page}: IPropsAppointments) {
    const {title, slogan} = page;
    return (
        <MainLayout title={metadata.title} description={metadata.description}>
            <section className="sub-page start-page animate__animated animate__fadeIn">
                <div className="sub-page-inner">
                    <Title title={title} slogan={slogan}/>
                    <div className="row contact-form pb-30">
                        <div className="col-sm-12 col-md-6">
                            <div className="section-head third-head">
                                <h4>
                                    <span>My Appointments</span>
                                    Before booking an appointment please check my availability
                                </h4>
                            </div>
                            <div className="list-appointments">
                                <ul>
                                    <li className="available"><i className="fa fa-check">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </i> Saturday: <span
                                        className="text-muted"> 5:15:40 AM - 5:15:40 AM</span></li>
                                    <li className="not-available"><i className="fa fa-times">
                                        <FontAwesomeIcon icon={faClock}/>
                                    </i> Sunday: <span
                                        className="text-muted"> 5:15:40 AM - 5:15:40 AM</span></li>
                                    <li className="not-available"><i className="fa fa-times">
                                        <FontAwesomeIcon icon={faClock}/>
                                    </i> Monday: <span
                                        className="text-muted"> 5:15:40 AM - 5:15:40 AM</span></li>
                                    <li className="available"><i className="fa fa-check">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </i> Tuesday: <span
                                        className="text-muted"> 5:15:40 AM - 5:15:40 AM</span></li>
                                    <li className="available"><i className="fa fa-check">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </i> Wednesday: <span
                                        className="text-muted"> 5:15:40 AM - 5:15:40 AM</span></li>
                                    <li className="available"><i className="fa fa-check">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </i> Thursday: <span
                                        className="text-muted"> 5:15:40 AM - 5:15:40 AM</span></li>
                                    <li className="available"><i className="fa fa-check">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </i> Friday: <span
                                        className="text-muted"> 5:15:40 AM - 5:15:40 AM</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-contact-me">
                                <form method="post">
                                    <div className="input-icon">
                                        <i className="lnr lnr-pencil">
                                            <FontAwesomeIcon icon={faPenAlt}/>
                                        </i>
                                        <input name="subject" type="text" placeholder="Subject" required
                                               autoComplete="off"/>
                                    </div>
                                    <div className="input-icon">
                                        <i className="lnr lnr-user">
                                            <FontAwesomeIcon icon={faUser}/>
                                        </i>
                                        <input name="name" type="text" placeholder="Name" autoComplete="off"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-icon">
                                                <i className="lnr lnr-envelope">
                                                    <FontAwesomeIcon icon={faEnvelope}/>
                                                </i>
                                                <input name="email" type="email" placeholder="Email" required
                                                       autoComplete="off"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-icon">
                                                <i className="lnr lnr-phone-handset">
                                                    <FontAwesomeIcon icon={faPhone}/>
                                                </i>
                                                <input name="phone" type="text" placeholder="Phone"
                                                       autoComplete="off"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-icon">
                                                <i className="lnr lnr-calendar-full">
                                                    <FontAwesomeIcon icon={faCalendarAlt}/>
                                                </i>
                                                <input name="date" id="app_date" type="text" data-lock="from"
                                                       data-init-set="false" data-lang="en" data-large-mode="true"
                                                       data-large-default="true" data-min-year="2020"
                                                       data-max-year="2020" placeholder="Date" required
                                                       autoComplete="off"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-icon">
                                                <i className="lnr lnr-clock">
                                                    <FontAwesomeIcon icon={faClock}/>
                                                </i>
                                                <input name="time" id="app_time" type="text" placeholder="Time"
                                                       required autoComplete="off"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-icon">
                                        <i className="lnr lnr-bubble message-icon">
                                            <FontAwesomeIcon icon={faCommentAlt}/>
                                        </i>
                                        <textarea name="message" placeholder="Message" rows={4}></textarea>
                                    </div>
                                    <input className="bt-submit" type="submit" value="Booking appointment"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export const getStaticProps = () => {
    return {
        props: {
            metadata: {
                title: 'CTolenk - Software Engineer',
                description: 'Que tenemos'
            },
            page: {
                title: 'APPOINTMENTS',
                slogan: 'CHECK MY AVAILABILITY AND REQUEST AN APPOINTMENT',
            }
        }
    }
}
