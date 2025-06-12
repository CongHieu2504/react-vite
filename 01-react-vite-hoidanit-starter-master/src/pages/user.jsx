import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { fetchAllUserAPI } from '../services/api.service';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([

    ]);

    //empty array => run once
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        setDataUsers(res.data);
    }

    // Kỹ thuật Life-up State
    return (
        <div style={{ padding: '20px' }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage;