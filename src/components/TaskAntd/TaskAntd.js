import React, { useState } from "react";
import moment from "moment";
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import { Row, Col, Form, Input, Avatar, DatePicker, List, Select } from 'antd';
import {
    EditFilled, DeleteFilled,
    FolderFilled, CheckOutlined,
    FileTextFilled, UnorderedListOutlined,
    HourglassFilled, BellFilled
} from '@ant-design/icons'

const dateFormat = 'YYYY-MM-DD';
const today = new Date();
const { Option } = Select;

console.log(moment(today, dateFormat))

const TaskAntd = () => {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const [notif, setNotif] = useState('')
    const [info, setInfo] = useState({
        project: 'Software Engineering',
        list: 'List number 1',
        deadline: String(today),
        progress: 'To Do',
        notification: [

        ],
        description: 'Try your best to get success ok?'
    })

    const [urlPhoto, setUrlPhoto] = useState([
        'D', 'K', 'A', 'H', 'N'
    ])

    const [modal1Visible, setModal1Visible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);

    const changeProject = (e) => {
        setInfo({ ...info, project: e.target.value })
    }

    const changeList = (e) => {
        setInfo({ ...info, list: e.target.value })
    }

    const changeDeadline = (value, dateString) => {
        setInfo({ ...info, deadline: dateString })
    }

    const changeProgress = (value) => {
        setInfo({ ...info, progress: value })
    }

    const changeNotification = (value, dateString) => {
        setNotif(dateString)
    }

    const submitNotification = () => {
        if (!notif) {
            return;
        }
        console.log(notif)
        let listNotification = info.notification;
        listNotification.push(notif)
        setInfo({ ...info, notification: listNotification })
    }

    const changeDescription = (e) => {
        setInfo({ ...info, description: e.target.value })
    }

    return (
        <>
            <Button type="primary" onClick={() => setModal2Visible(true)}>
                Vertically centered modal dialog
            </Button>
            <Modal
                title={[
                    <Row>
                        <Col span={21}>Create Modal of Task By Le Nhat Duy 2022</Col>
                        <Col span={3}>
                            <Row>
                                <Col span={10}><Button type="text" icon={<DeleteFilled />} /></Col>
                                <Col span={14} onClick={() => { setEdit(!edit) }}><Button type="text" icon={edit ? <CheckOutlined /> : <EditFilled />} /></Col>
                            </Row>
                        </Col>

                        <Col>
                            <Avatar.Group>
                                {urlPhoto.map(item => (
                                    <Avatar>{item}</Avatar>
                                ))}
                            </Avatar.Group>
                        </Col>
                    </Row>
                ]}
                centered
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
                width={800}
                footer={[
                    <Button onClick={() => { setEdit(!edit) }}>
                        {edit ? 'Save' : 'Edit'}
                    </Button>
                ]} >
                <Form layout={'vertical'} >
                    <Row>
                        <Col span={12}>

                            <Form.Item label={
                                <><FolderFilled /> &nbsp;Project</>
                            }>
                                {edit ?
                                    <Input value={info.project} onChange={(e) => changeProject(e)} />
                                    :
                                    <div>{info.project}</div>
                                }
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={
                                <><UnorderedListOutlined /> &nbsp;List</>
                            }>
                                {edit ?
                                    <Input value={info.list} onChange={(e) => changeList(e)} />
                                    :
                                    <div>{info.list}</div>
                                }
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

                <Form layout="horizontal">
                    <Form.Item label={
                        <><HourglassFilled /> &nbsp;Deadline</>
                    }>
                        {edit ?
                            <DatePicker
                                showTime
                                defaultValue={moment(info.deadline.length > 0 ? info.deadline : today, dateFormat)}
                                bordered={edit}
                                disabled={!edit}
                                onChange={changeDeadline} />
                            // <Input value={info.deadline} onChange={(e) => changeDeadline(e)} />
                            :
                            <div>{info.deadline}</div>
                        }
                    </Form.Item>
                </Form>

                <Form layout="horizontal">
                    <Form.Item label={
                        <><HourglassFilled /> &nbsp;Progress</>
                    }>
                        {edit ?
                            <Select
                                value={info.progress}
                                onChange={changeProgress}
                                allowClear
                            >
                                <Option value="TdDo">To do</Option>
                                <Option value="OnGoing">On Going</Option>
                                <Option value="Complete">Complete</Option>
                            </Select>
                            :
                            <div>{info.progress}</div>
                        }
                    </Form.Item>
                </Form>

                <Form layout="vertical">
                    <Form.Item label={
                        <><BellFilled /> &nbsp;Notification</>
                    }>
                        <Row justify="center">
                            <Col>
                                <DatePicker
                                    showTime
                                    defaultValue={moment(today, dateFormat)}
                                    bordered={edit}
                                    disabled={!edit}
                                    onChange={changeNotification} />
                                <Button type="primary" disabled={!edit} onClick={() => submitNotification()}>Add</Button>
                            </Col>
                            <Col span={24}>
                                <List
                                    dataSource={info.notification}
                                    renderItem={(item) => (
                                        <Row justify="center">
                                            <List.Item
                                                actions={[
                                                    <>
                                                        <Button>Edit</Button>
                                                        <Button>Delete</Button>
                                                    </>
                                                ]}
                                            >
                                                {item}
                                            </List.Item>
                                        </Row>
                                    )}
                                />
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form layout="horizontal">
                        <Form.Item label={<><FileTextFilled /> &nbsp;Desciption</>}>
                            {edit ?
                                <Input value={info.description} onChange={(e) => changeDescription(e)} />
                                :
                                <div>{info.description}</div>
                            }
                        </Form.Item>
                    </Form>
                </Form>
            </Modal>
        </>
    )
}

export default TaskAntd;