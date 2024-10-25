import type { Access, AccessArgs } from 'payload'

// NOTE: In a CollectionConfig, isAuthenticated is a default for CRUD operations
export const admin = ({ req: { user } }: AccessArgs) => {
  return user?.role.includes('admin') ?? false
}
