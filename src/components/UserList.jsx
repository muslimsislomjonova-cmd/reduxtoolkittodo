import { useGetUsersQuery, useDeleteUserMutation } from '../features/users/usersApi'

function UserList({ onEdit }) {
  const { data: users = [] } = useGetUsersQuery()

  const [deleteUser] = useDeleteUserMutation()

  const handleDelete = async (id) => {
    try {
      await deleteUser(id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="table-card">

      <div className="table-header">
        <h2 className="table-title">
          Foydalanuvchilar
        </h2>

        <span className="badge badge-count">
          {users.length} ta
        </span>
      </div>

      <div className="table-wrapper">

        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Ism</th>
              <th>Email</th>
              <th>Amallar</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="table-row">

              
                <td className="td-num">
                  {user.id}
                </td>

            
                <td className="td-name">
                  <div className="avatar">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  <span>{user.name}</span>
                </td>

              
                <td className="td-email">
                  {user.email}
                </td>

            
                <td className="td-actions">

                  <button
                    className="btn btn-edit"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  )
}

export default UserList