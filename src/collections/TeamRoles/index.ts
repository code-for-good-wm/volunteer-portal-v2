import { admin } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

/**
 * TODO: Having a giant list of roles that have ever
 * been added to any team is likely not an ideal solution.
 */
const TeamRoles: CollectionConfig = {
  slug: 'team-roles',
  access: {
    create: admin,
    // Do not allow editing or deletion, which
    // could have adverse effects on existing teams.
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}

export default TeamRoles
