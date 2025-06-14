import { useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";

const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        // sử dụng ANTD để hiển thị thông báo: Notification

        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            resetModalUser();
            // await loadUser();
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetModalUser = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }

    return (
        <Modal
            title="Update a User"
            open={isModalOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => resetModalUser()}
            maskClosable={false}
            okText="SAVE"
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal;