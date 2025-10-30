import React, {useState, useEffect} from 'react';
import '../static/TrackingSheet.css';

const TrackingSheet = () => {
  const API_URL = "http://127.0.0.1:5000/api/assignments"
  let [assignments, setAssignments] = useState([])

  let todo="To Do"
  let progress="In progress"
  let done="Done"

  useEffect(() => {
    const fetchAssignments = async() => {
      try{
        const response = await fetch(`${API_URL}`)
      console.log(response)
      if(response.ok){
        const responseData = await response.json()
        console.log(responseData.data)
        setAssignments(responseData.data)
      }
      throw new Error(`HTTP SERVER ERROR, ${response.status}`)
    }catch(error){
      console.log(error)
    }
    } 
    fetchAssignments()
  }, [])

  console.log(assignments)

  return (
    <div>
      <table>
   
        <tbody>
            <tr>
            <th scope="col">Assignment Name</th>
            <th scope="col">Date Assigned</th>
            <th scope="col">Deadline</th>
            <th scope="col">Status</th>
            <th scope="col">Github URL</th>
            <th scope="col">Instructor Remarks</th>
            </tr>
                 {//map fetched data to popuLate the table data
                  assignments.map((assignment) => (
                    <tr key={assignment._id}>
                    <td>{assignment.assignment_name}</td>
                    <td>{assignment.date_assigned.slice(0, 10)}</td>
                    <td>{assignment.deadline.slice(0,10)}</td>
                     <td>
                      { assignment.status ? '': <select><option className='toDo'>{todo}</option><option className='inProgress'>{progress}</option><option className='done'>{done}</option></select>}
                     </td>
                    <td><a href={assignment.github_url}>{assignment.github_url}</a></td>
                    <td>
                      
                    </td>
                    <td> 
                      <button>X</button>
                    </td>
                    </tr>
                  ))  
                }
            
           
        </tbody>
      </table>
    </div>
  );
};

export default TrackingSheet;