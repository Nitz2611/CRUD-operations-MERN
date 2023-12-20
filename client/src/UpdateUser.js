import React from 'react'

export default function UpdateUser() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form action="">
                    <h2>Update User</h2>
                    <div className="mb2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' />
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control' />
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Age</label>
                        <input type="number" placeholder='Enter Age' className='form-control' />
                    </div>
                    <button type="submit" className="btn btn-success mt-2">Update</button>
                </form>
            </div>
        </div>
  )
}
