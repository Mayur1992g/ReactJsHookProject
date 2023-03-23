import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
const ListEmployeeComponet = () => {

    const [employee, setEmployee] = useState([])

    useEffect(() => {
        getAllEmployee()
    }, [])


    const getAllEmployee = () => {
        EmployeeService.getEmployees().then(res => {
            setEmployee(res.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const deleteEmployee = (id) => {
            EmployeeService.deleteEmployeesById(id).then(res => {
                getAllEmployee()
            })
    }


    return (
        <div>

            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
            </div>
            <div className='row'>
                <Link to="/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                        </td>
                                        <td>
                                            <button class="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponet
