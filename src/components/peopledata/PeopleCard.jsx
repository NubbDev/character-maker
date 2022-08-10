import { Container, Button } from "react-bootstrap";

const PeopleCard = (props) => {
    const onDeleteHandler = () => {
        props.onDelete(props.id)
    }
    return (
        <Container className="d-flex ">
            <div className="d-flex justify-content-start">
                <h2 className="my-2 mx-3">{`Name: ${props.name}`}</h2>
                <h2 className="my-2 mx-3">{`Age: ${props.age}`}</h2>
            </div>
            <div className="d-flex justify-content-end ms-auto">
                <Button className="btn-danger" onClick={onDeleteHandler}>x</Button>
            </div>
        </Container>
    )
    
}

export default PeopleCard;