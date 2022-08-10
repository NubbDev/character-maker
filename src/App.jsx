
import {Container} from 'react-bootstrap';
import UserInput from './components/userinput/UserInput'
import People from './components/peopledata/People';
import {useState} from 'react';


function App() {
  const [data, setData] = useState([])
 
  const itemDeleteHandler = dataId => {
    setData(prevData => {
      const updateData = prevData.filter(goal => goal.id !== dataId);
      return updateData;
    })
  }
  const peopleDataHandler = (inputData) => {
    setData(prevData => {
      return [inputData, ...prevData]
    })
  }

  return (
    <Container className="p-3" >
      <UserInput onAddedNewData={peopleDataHandler}/>
      <People item={data} onDeleteItem={itemDeleteHandler}/>
    </Container>
  );
}

export default App;
