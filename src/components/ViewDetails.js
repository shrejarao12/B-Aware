import React, {useState} from 'react'
import axios from 'axios';
import { Button, Input, Form, Table } from "antd";

const ViewDetails = () => {
    const [result, setResult] = useState(null);
    const columns = [

        {
            title: 'Zip Code',
            dataIndex: 'zipcode',
            key: 'zipcode',
        },
        {
            title: 'Location Type',
            dataIndex: 'locType',
            key: 'locType',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Ethnicity',
            dataIndex: 'ethnicity',
            key: 'ethnicity',
        },
        {
            title: 'Type Of harrasment',
            dataIndex: 'hType',
            key: 'hType',
        },
        {
            title: 'Arrested',
            dataIndex: 'arrest',
            key: 'arrest',
        },
        {
            title: 'Details Of harrasment',
            dataIndex: 'hdetails',
            key: 'hdetails',
        }
    ]
    const onFinish = async (values) => {
        const code = values.code;
        const data = await axios.get(`http://localhost:8000/getdata/${code}`, {
            withCredentials: true,
        }

    );
        console.log(data)
        setResult(data.data)
    }

    return (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item name="code" label="Enter the zip code" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
            {result && <Table columns={columns} dataSource={result} />}
        </div>
    )
};

export default ViewDetails