import type { Access, AccessArgs } from 'payload'

export const anyone: Access = () => true

export const admin = ({ req: { user } }: AccessArgs) => {
  return user?.role.includes('admin') ?? false
}

export const adminOrOrganization = ({ req: { user } }: AccessArgs) => {
  return (user?.role.includes('admin') || user?.role.includes('organization')) ?? false
}
