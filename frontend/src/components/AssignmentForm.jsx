import React, {useState} from 'react';

const AssignmentForm = () => {
const API_URL = "http://127.0.0.1:5000/api/assignments"
const [assignmentName, setAssignmentName] = useState("")
const [dateAssigned, setDateAssigned] = useState("")
const [dueDate, setDueDate] = useState("")
const [githubUrl, setGithubUrl] = useState("")

const postAssignment = async() => {
       
        try{
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    assignment_name: assignmentName,
                    date_assigned: dateAssigned,
                    deadline: dueDate,
                    github_url: githubUrl
                }) 

            })
            if(response.ok){
                const responseData = await response.json()
                console.log(`Assignment ${assignmentName} created successfully`)
                return responseData
            }
            else{
                console.log(`HTTP Server Error, ${response.status}`)
            }

        }catch(error){
            console.log('Error:', error)
        }
        

    }

  return (
    <div>
      <form>
        <label>Assignment Name</label>
        <input 
        type="text"
        value={assignmentName}
        onChange = {(e) => setAssignmentName(e.target.value)}
        />
        <label>Date Assigned</label>
        <input 
        type="date"
        value={dateAssigned}
        onChange = {(e) => setDateAssigned(e.target.value)}
        />
        <label>Due Date</label>
        <input 
        type="date"
        value={dueDate}
        onChange = {(e) => setDueDate(e.target.value)}
        />
        <label>Github URL</label>
        <input 
        type="text"
        value={githubUrl}
        onChange = {(e) => setGithubUrl(e.target.value)}
        />
        <button onClick={() => postAssignment()}>Add Assignment</button>
      </form>
    </div>
  );
};

export default AssignmentForm;