import React from 'react'
import { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate, useParams } from 'react-router-dom'
const AddEmployeeComponet = () => {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate()
    const { id } = useParams();

    const saveEmployeeOrUpdate = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId }
        if (id) {
            EmployeeService.updateEmployee(id, employee).then(res => {
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })
        } else {
            EmployeeService.saveEmployee(employee).then(res => {
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })
        }



    }

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeesById(id).then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmailId(res.data.emailId)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [])

    const title = () => {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div class="col-md-6 offset-md-3">
            {
                title()
            }
            <form>

                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder='Enter First Name' class="form-control" id="firstName" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder='Enter Last Name' class="form-control" id="lastName" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label>Email Id</label>
                    <input type="text" placeholder='Enter Email Id' class="form-control" id="emailId" name="emailId" value={emailId} onChange={e => setEmailId(e.target.value)} />
                </div>

                <button class="btn btn-success" onClick={e => saveEmployeeOrUpdate(e)}>Save</button>
                <Link to="/employees" className='btn btn-danger' style={{ marginLeft: "10px" }}>Cancel</Link>

            </form>
        </div>
    )
}

export default AddEmployeeComponet
