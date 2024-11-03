import type { Access, AccessArgs } from 'payload'

export const anyone: Access = () => true

export const admin = ({ req: { user } }: AccessArgs) => {
  return user?.role.includes('admin') ?? false
}

export const adminOrBoardMember = ({ id, req: { user } }: AccessArgs) => {
  return (user?.role.includes('admin') || user?.role.includes('board-member')) ?? false
}

export const adminOrOrgOrBoardMember = ({ id, req: { user } }: AccessArgs) => {
  return (
    (user?.role.includes('admin') ||
      user?.role.includes('organization') ||
      (user?.role.includes('board-member') && user?.organization === id)) ??
    false
  )
}
