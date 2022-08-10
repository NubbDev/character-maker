import {useState} from "react";
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"


export default function UserForm(props) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const submitDataHandler = (event) => {
        event.preventDefault();
        const personData = {
            name: name,
            age: parseInt(age),
        }

        props.onDataSave(personData)
        setName('')
        setAge('')

    }
    return (
        <Form className="was-validated" onSubmit={submitDataHandler}>
            <div class="mb-3 mt-3 form-floating">
                <input type="text" className="form-control" id="name" placeholder="Enter a name" name="name" required onChange={event => setName(event.target.value)} value={name}/>
                <label for="name">Name:</label>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="mb-3 mt-3 form-floating">
                <input type="number" className="form-control" id="age" placeholder="Enter an age" name="age" required onChange={event => setAge(event.target.value)} value={age}/>
                <label for="age">Age:</label>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="btn-group">
            <Button className="btn-danger" onClick={props.onCancel}>Cancel</Button>
            <Button className="btn-success" type="submit">Submit</Button>
            </div>
        </Form>
    )
}