import { Button, Form, Input, Popover } from "antd";
import PasswordValidation from "./passwordValidation"; // Assuming this component is correctly implemented
import { useState } from "react";

function Password() {
  const [password, setPassword] = useState('');

  const [form] = Form.useForm(); 
  const resetPassword = async (values) => {
    console.log("Validating password", values);
  };

  return (
    <>
      <Form
        form={form}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={resetPassword}
        layout="vertical"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
            {
              min: 3,
              message: "First name must be minimum 3 characters.",
            },
            {
              max: 14,
              message: "First name should be less than 15 characters",
            },
          ]}
        >
          <Input placeholder="First Name" size="large" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name",
            },
            {
              min: 3,
              message: "Last name must be minimum 3 characters.",
            },
            {
              max: 14,
              message: "Last name should be less than 15 characters",
            },
          ]}
        >
          <Input placeholder="Last Name" size="large" />
        </Form.Item>
        <Popover
          content={<PasswordValidation password={password} />}
          trigger="focus"
          placement="leftTop"
        >
          <Form.Item
            label="New Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input password",
              },
            ]}
          >
            <Input.Password
              placeholder="New Password"
              size="large"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
        </Popover>
        <Form.Item
          label="Confirm New Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Password does not match!"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            size="large"
            htmlType="button" // Prevent form submission on Enter key press
          />
        </Form.Item>
        <Form.Item>
          <Button block size="large" type="primary" htmlType="submit">
            Update Password
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Password;
