import {Container, Button} from "react-bootstrap";
import UserForm from "./UserForm";
import { useState } from "react";

const UserInput = (props) => {
    const [value, setValue] = useState(0);

    const onDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        props.onAddedNewData(userData)
        
    }

    if (value === 0) {
        return (
            <Container>
                <Button className="btn-success" onClick={() => setValue(1)}>+</Button>
            </Container>
        )
    } else {
        return (
            <Container className="p-3 rounded-3">
                <UserForm onDataSave={onDataHandler} onCancel={() => setValue(0)}/>
            </Container>
        )
    }

}
export default UserInput