import { Button, Form, Input, Popover } from "antd";
import PasswordValidation from "./passwordValidation";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";



function Password() {

    const form = useForm()
    const [password, setPassword] = useState();


    const resetPassword = async (values) => {
        console.log("Validating password",values)
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
                      message: "First name should be less than 15 character",
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
                      message: "please input your last name",
                    },
                    
                    {
                      min: 3,
                      message: "Last name must be minimum 3 characters.",
                    },
                    {
                      max: 14,
                      message: "Last name should be less than 15 character",
                    },
                  ]}
                >
                  <Input placeholder="Last Name" size="large" />
                </Form.Item>
            <Popover
              content={<PasswordValidation password={password} />}
              trigger={"focus"}
              placement="leftTop"
            >
              <Form.Item
                label="New Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "please input password",
                  },
                  
                ]}
              >
                <Input.Password
                  suffix={<i className="icon-lock"></i>}
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
                  message: "please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Password does not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                suffix={<i className="icon-lock"></i>}
                placeholder="Confirm Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button block size="large" type="primary" htmlType="submit">
                Update Password
              </Button>
            </Form.Item>
        </Form >
          </>
  )
}

export default Password