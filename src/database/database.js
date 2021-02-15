const users = [
  { id: 1, username: 'Dilbarchik', password: '123', is_admin: false },
  { id: 2, username: 'Ziyoda', password: '890', is_admin: false },
  { id: 3, username: 'Lobar', password: '456', is_admin: false },
  { id: 4, username: 'Mahbuba', password: '567', is_admin: false },
  { id: 5, username: 'root', password: '290', is_admin: true },
]

const permissions = [
  { permission_id: 1, user_id: 1, permission_code: 1, module: 'user' },

  { permission_id: 2, user_id: 2, permission_code: 2, module: 'user' },

  { permission_id: 3, user_id: 3, permission_code: 3, module: 'user' },

  { permission_id: 4, user_id: 4, permission_code: 4, module: 'user' },
]

const books = [
  { book_id: 1, book_name: 'Yulduzli tunlar' },
  { book_id: 2, book_name: 'Dunyoning ishlari' },
]

module.exports = {
  users,
  permissions,
  books,
}

// 1 - read
// 2 - read and write
// 3 - read and change
// 4 - read and delete