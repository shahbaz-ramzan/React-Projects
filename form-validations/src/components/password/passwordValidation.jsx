import { Space } from "antd";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

const PasswordValidation = ({ password }) => {
  // If you have any state or lifecycle methods, you can use them here

  return (
    <Space direction="vertical">
      <Space>
        {password?.length >= 8 ? (
          <CheckCircleFilled style={{ color: "#52c41a" }} />
        ) : (
          <CloseCircleFilled style={{ color: "#ff4d4f" }} />
        )}
        At least 8 characters
      </Space>
      <Space>
        {/^(?=.*?[A-Z])/?.test(password) ? (
          <CheckCircleFilled style={{ color: "#52c41a" }} />
        ) : (
          <CloseCircleFilled style={{ color: "#ff4d4f" }} />
        )}
        At least one Upper case letter
      </Space>
      <Space>
        {/^(?=.*?[0-9])/?.test(password) ? (
          <CheckCircleFilled style={{ color: "#52c41a" }} />
        ) : (
          <CloseCircleFilled style={{ color: "#ff4d4f" }} />
        )}
        At least one number
      </Space>
      <Space>
        {/^(?=.*?[^\w\s])/?.test(password) ? (
          <CheckCircleFilled style={{ color: "#52c41a" }} />
        ) : (
          <CloseCircleFilled style={{ color: "#ff4d4f" }} />
        )}
        At least one special character
      </Space>
    </Space>
  );
};

export default PasswordValidation;