import type { AccessArgs } from 'payload'

import type { User } from '../../payload-types'

type isAuthenticated = (args: AccessArgs<User>) => boolean

// NOTE: In a CollectionConfig, isAuthenticated is a default for CRUD operations
export const authenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}
