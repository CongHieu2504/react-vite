import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {

    const { loadUser } = props;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    // hàm onClick
    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        // sử dụng ANTD để hiển thị thông báo: Notification

        if (res.data) {
            notification.success({
                message: "Create user",
                description: "Tạo user thành công"
            })
            resetModalUser();
            await loadUser();
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
        <div className="user-form" style={{ margin: '20px 0px' }}>
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    style={{ cursor: 'pointer' }}
                    type="primary">Create User
                </Button>
            </div>
            <Modal
                title="Create User"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetModalUser()}
                maskClosable={false}
                okText="Create"
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
        </div >
    )

}

export default UserForm;