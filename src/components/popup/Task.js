import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { PencilSquare, FolderFill, ListUl, HourglassSplit, BellFill } from 'react-bootstrap-icons'
import './Task.css'
import 'antd/dist/antd.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Task = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const [info, setInfo] = useState({
        project: 'nhatduy0409@gmail.com',
        list: '123',
        deadline: '01/01/2002',
        address: 'Dương Bá Trạc, Phường 2, Quận 8, Thành phố Hồ Chí Minh'
    })

    const changeEmail = (e) => {
        setInfo({ ...info, email: e.target.value })
    }

    const changePass = (e) => {
        setInfo({ ...info, password: e.target.value })
    }

    const changeAddress = (e) => {
        setInfo({ ...info, address: e.target.value })
    }

    return (
        <>
            <button onClick={() => { setShow(true) }}>Click</button>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div>Test Software</div>
                    </Modal.Title>
                    <PencilSquare className="mt-1 mr-1" onClick={() => { setEdit(!edit) }} />
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Row>
                                <Col xs={1}><FolderFill /></Col>
                                <Col xs={11}><Form.Label>Project</Form.Label></Col>
                            </Row>

                            <Form.Control
                                plaintext={!edit}
                                readOnly={!edit}
                                type="text"
                                placeholder="Enter project"
                                value={info.project}
                                onChange={(e) => changeEmail(e)} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Row>
                                <Col xs={1}><ListUl /></Col>
                                <Col xs={11}><Form.Label>List</Form.Label></Col>
                            </Row>

                            <Form.Control
                                plaintext={!edit}
                                readOnly={!edit}
                                type="text"
                                placeholder="Enter list"
                                value={info.list}
                                onChange={(e) => changePass(e)} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <div className="d-flex">
                            <HourglassSplit />
                            <Form.Label>
                                Deadline
                            </Form.Label>
                        </div>


                        <Form.Control
                            plaintext={!edit}
                            readOnly={!edit}
                            placeholder="Enter deadline"
                            value={info.deadline}
                            onChange={(e) => changeAddress(e)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <BellFill />
                        <Form.Label>
                            Notification
                        </Form.Label>
                        <div className="d-flex justify-content-center">
                            <div className="mt-1 pr-3"><DatePicker readOnly={!edit} selected={startDate} onChange={(date) => setStartDate(date)} /></div>
                            <Button>Add</Button>
                        </div>

                    </Form.Group>



                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { setShow(!show) }}>Close</Button>
                    <Button onClick={() => { setEdit(!edit) }}>{edit ? 'Save' : 'Edit'}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Task;