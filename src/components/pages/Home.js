import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState( [] );

    useEffect( () => {
        loadUsers();
    }, [] )

    const loadUsers = async () => {
        const result = await axios.get( "http://localhost:3003/users" );

        setUser( result.data )
    }


    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>

                <table class="table">
                    <thead class="table-dark border shadow">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( ( user, index ) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className="bg">
                                            <Link className="btn btn-outline-warning ey1 mr-2"><i class="fas fa-eye ey"></i></Link>
                                            <Link className="btn btn-outline-success btn-white mr-2"><i class="fas fa-user-edit"></i></Link>
                                            <Link className="btn btn-outline-danger"><i class="fas fa-trash-alt dlt"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                            ) )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;
