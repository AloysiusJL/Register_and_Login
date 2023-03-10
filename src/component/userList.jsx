import React from "react"
import axios from "axios"

class UserList extends React.Component {
  state = {
    users: [],
    loading: true,
    error: null,
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/user")
      .then(response => {
        this.setState({
          users: response.data,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false,
        })
      })
  }

  render() {
    const { users, loading, error } = this.state

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error.message}</div>
    }

    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card">
            <table className="table is-striped is-hoverable">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default UserList
