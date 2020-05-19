import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import '../../src/index.css';
import Team from './Team'
import TeamForm from './TeamForm'

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

export default function App() {
  const [team, setTeam] = useState(initialTeamRoster)

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const { name } = evt.target
    const { value } = evt.target
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    if( !formValues.name.trim()||
        !formValues.email.trim()||
        !formValues.role.trim()
    ){
      return
    }

    const newMember = {...formValues, id: uuid()}
    setTeam([newMember,...team])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <header>
        <h1>Team</h1>
      </header>
      <TeamForm values ={formValues} onInputChange = {onInputChange} onSubmit = {onSubmit} />

      {
        team.map(teamMember => {
          return (
            <Team key={teamMember.id} details ={teamMember} />
          )
        })
      }
    </div>
  );
}

