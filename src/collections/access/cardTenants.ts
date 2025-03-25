import type { Access } from 'payload'

export const cardTenants: Access = ({ req: { user } }) => {
  // TODO: Replace with actual tenant check
  if (user) {
    return user.email === 'campbell.moss@gmail.com'
  }

  return false
}
