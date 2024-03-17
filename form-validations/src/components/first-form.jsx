import { Button, DatePicker, Form, Select } from "antd"
import Input from "antd/es/input/Input"

function FirstForm() {
    const onFinish = (values) => {
    console.log(values)
    }
  return (
      <div>
          <Form onFinish={onFinish} autoComplete="off">
              <Form.Item label="UserName" name="userName" rules={[
                  {
                      required: true,
                      message:"Please Enter User Name",
                  }
              ]}>
                  <Input placeholder="UserName"/>
              </Form.Item>
              <Form.Item label="Email" name="email" rules={[
                  {
                    required: true,
                    message:"Please Enter Email",
                  }
              ]}>
                  <Input placeholder="Email"/>
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[
                  {
                      required: true,
                      message:"Please Enter Password",
                  }
              ]}>
                  <Input></Input>
              </Form.Item>
              <Form.Item
      label="Select"
      name="Select"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Select />
              </Form.Item>
              <Form.Item
      label="DatePicker"
      name="DatePicker"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <DatePicker />
    </Form.Item>
              <Button type="primary" htmlType="submit">Submit</Button>
          </Form>
    </div>
  )
}

export default FirstForm