import React from 'react'
import {StyledButton, StyledForm} from './Styled'

export default function TeamForm(props){
    const {
        values, 
        onInputChange, 
        onSubmit
    } = props

return (
    <StyledForm onSubmit={onSubmit}>
        <div>
            <h2>Add a Team Member</h2>
            <StyledButton>Submit</StyledButton>
        </div>

        <div>
            <h4>General Information</h4>
            <label>Name:&nbsp;
                <input
                    type = 'text'
                    placeholder = 'Type a name'
                    maxLength = '20'
                    name = 'name'
                    value = {values.name}
                    onChange = {onInputChange}
                />
            </label><br></br>
            <label>Email:&nbsp;    
                <input
                    type ='text'
                    placeholder = 'Type an email'
                    maxLength = '30'
                    name = 'email'
                    value = {values.email}
                    onChange = {onInputChange}
                />
            </label><br></br>
            <label>Role:&nbsp;
                <select name='role' value={values.role} onChange = {onInputChange}>
                    <option value =''>Select a Role</option>
                    <option value = 'Backend Engineer'>Backend Engineer</option>
                    <option value ='Frontend Engineer'>Frontend Engineer</option>
                    <option value ='User Experience'>User Experience</option>
                    <option value ='iOS Developer'>iOS Developer</option>
                </select>
            </label>    
        </div>
    </StyledForm>
)
}

