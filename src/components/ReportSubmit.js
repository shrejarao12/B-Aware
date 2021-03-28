import React, {useState} from 'react'
import axios from 'axios';
import { Button, Input, Form, Table } from "antd";

import './ReportSubmit.css'
const ReportDetails = () => {
    const [result, setResult] = useState(null);

    const onFinish = async (values) => {
        console.log(values)
        const code = values.code;
        const axiosInstance = axios.create({
            withCredentials: true
        });

        const data = await axiosInstance.post(`http://localhost:8000/postdata`, {
            ...values
            },


        );

    }

    return (
        <div className="report-div">
            <Form onFinish={onFinish}>
                <Form.Item name="code" label="Enter your current location zip code" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="loc" label="Enter the location type. For e.g, park, restuarant etc." rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="age" label="Enter the harasser age" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="eth" label="Enter the harasser ethnicity" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="harr_tye" label="Enter the type of harassment" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="arrested" label="Has the harasser been arrested" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="details" label="If you would like to share more details..">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
};

export default ReportDetails