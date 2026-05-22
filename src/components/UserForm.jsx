import { useState, useEffect } from 'react'
import {
  useAddUserMutation,
  useUpdateUserMutation
} from '../features/users/usersApi'

function UserForm({ editingUser, onCancelEdit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [addUser] = useAddUserMutation()
  const [updateUser] = useUpdateUserMutation()

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name)
      setEmail(editingUser.email)
    } else {
      setName('')
      setEmail('')
    }
  }, [editingUser])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email) return

    if (editingUser) {
      await updateUser({
        id: editingUser.id,
        name,
        email,
      })
      onCancelEdit()
    } else {
      await addUser({ name, email })
    }

    setName('')
    setEmail('')
  }

  return (
    <div className="form-card">
      <h2 className="form-title">
        {editingUser ? 'Edit User' : 'Add User'}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>

          <input
            type="text"
            className="input"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Email</label>

          <input
            type="email"
            className="input"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingUser ? 'Save' : 'Add'}
          </button>

          {editingUser && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default UserForm