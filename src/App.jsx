import { useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [editingUser, setEditingUser] = useState(null)

  return (
    <div className="app">

      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <h1 className="logo-title">User CRUD</h1>
          </div>
        </div>
      </header>

      <main className="main">

        <section className="section-form">
          <UserForm
            editingUser={editingUser}
            onCancelEdit={() => setEditingUser(null)}
          />
        </section>

        <section className="section-list">
          <UserList
            onEdit={(user) => setEditingUser(user)}
          />
        </section>

      </main>

    </div>
  )
}

export default App