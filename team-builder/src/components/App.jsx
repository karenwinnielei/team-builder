import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import '../../src/index.css';

const initialTeamRoster = [
  {
    id: uuid(),
    name: 'Karen',
    email: 'karenwinnielei@gmail.com',
    role: 'Frontend Engineer'
  }
]

const initialFormValues = {
  name: '',
  email: '',
  role: '', 
}

function App() {
  const [team, setTeam] = useState(initialTeamRoster)

  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
      <header>
        <h1>Team</h1>
      </header>
    </div>
  );
}

export default App;
