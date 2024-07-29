import React from "react";
import Dashboard from "./Dashboard";
import { Form, Input, Radio, Select, Button, DatePicker } from "antd";
import "./Forms.css";

export default function Forms() {
  function submitForm(values) {
    console.log(values);
  }

  return (
    <Dashboard>
      <div>
        <h3 className="ml-2">
          <b>Antd Forms with Validation</b>
        </h3>

        <Form layout="vertical" className="p-2 form" onFinish={submitForm}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, min: 2, message: "กรุณากรอกข้อมูล" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, min: 2, message: "กรุณากรอกข้อมูล" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, type: "email", message: "กรุณากรอกข้อมูล" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "กรุณากรอกข้อมูล" }]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Date Of Birth"
            name="dob"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="computers">Computers</Select.Option>
              <Select.Option value="electrical">Electrical</Select.Option>
              <Select.Option value="civil">Civil</Select.Option>
              <Select.Option value="mechanical">Mechanical</Select.Option>
              <Select.Option value="bio">Bio</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, min: 10 }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Button htmlType="submit" type="primary">
            Register
          </Button>
        </Form>
      </div>
    </Dashboard>
  );
}
