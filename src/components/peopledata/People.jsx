import { Container } from "react-bootstrap";
import PeopleCard from "./PeopleCard";

const container = "bg-secondary rounded"

const People = (props) => {
    if (props.item.length <= 0) {
        return (
            <Container className={container}>
                <h1 className="d-flex justify-content-center">Add a component</h1>
            </Container>
        )
    } else {
        return (
            <Container className={container}>
                {props.item.map(people => <PeopleCard key={people.id} id={people.id} name={people.name} age={people.age} onDelete={props.onDeleteItem}/>)}
            </Container>
        )
    }
}

export default People;