import profileRoleOptions from '@/data/profileRoleOptions'
import { adminOrBoardMember } from '../../utilities/access'
import type { Access, CollectionConfig } from 'payload'
import { Profile } from 'payload-types'
import shirtSizes from '@/data/shirtSizes'
import dietaryRestrictionOptions from '@/data/dietaryRestrictionOptions'
import { agreementsGroup } from '@/data/collectionGroups'
import skillLevels from '@/data/skillLevels'

export const adminOrBoardOrOwner: Access<Profile> = ({ id, req: { user } }) => {
  if (user) {
    if (user.role?.includes('admin') || user.role?.includes('board-member')) {
      return true
    }

    return user.profile === id
  }

  return false
}

const Profiles: CollectionConfig = {
  slug: 'profiles',
  access: {
    read: adminOrBoardOrOwner, // TODO: There may be a time when we want others to access certain facets of this
    update: adminOrBoardOrOwner,
    delete: () => false,
  },
  admin: {
    // TODO: We'll need access to the user name here
    // useAsTitle: 'name',
  },
  fields: [
    {
      // Was the profile completed?
      name: 'completionDate',
      type: 'date',
      required: false,
      access: {
        // TODO: We should have a hook that populates this date on completion of the profile
        update: () => false,
      },
    },
    {
      name: 'lastUpdated',
      type: 'date',
      required: true,
      access: {
        // TODO: We should have a hook that populates this date on create and update
        update: () => false,
      },
    },
    {
      name: 'roles',
      type: 'select',
      options: profileRoleOptions,
      hasMany: true,
      required: false,
    },
    {
      name: 'linkedInUrl',
      type: 'text',
      required: false,
    },
    {
      name: 'websiteUrl',
      type: 'text',
      required: false,
    },
    {
      name: 'portfolioUrl',
      type: 'text',
      required: false,
    },
    {
      name: 'shirtSize',
      type: 'select',
      options: shirtSizes,
      required: false,
    },
    {
      name: 'dietaryRestrictions',
      type: 'select',
      options: dietaryRestrictionOptions,
      required: false,
    },
    {
      name: 'additionalDietaryRestrictions',
      type: 'textarea',
      required: false,
    },
    {
      name: 'accessibilityRequirements',
      type: 'textarea',
      required: false,
    },
    {
      name: 'agreements',
      type: 'group',
      fields: agreementsGroup,
      access: {
        update: adminOrBoardMember,
      },
    },
    {
      name: 'skills',
      type: 'group',
      fields: [
        {
          name: 'skill',
          type: 'relationship',
          relationTo: 'profile-skills',
          required: true,
        },
        {
          name: 'level',
          type: 'select',
          options: skillLevels,
          required: true,
        },
      ],
    },
    {
      name: 'additionalSkills',
      type: 'textarea',
      required: false,
    },
    {
      name: 'teamLeadCandidate',
      type: 'checkbox',
      required: false,
      access: {
        read: adminOrBoardMember,
        update: adminOrBoardMember,
      },
    },
    {
      // TODO: Can this be determined programmatically?
      name: 'previousVolunteer',
      type: 'checkbox',
      required: false,
      access: {
        read: adminOrBoardMember,
        update: adminOrBoardMember,
      },
    },
    {
      name: 'notes',
      label: 'Notes (admin/board member only)',
      type: 'textarea',
      required: false,
      access: {
        read: adminOrBoardMember,
        update: adminOrBoardMember,
      },
    },
    {
      name: 'archived',
      type: 'checkbox',
      access: {
        read: adminOrBoardMember,
        update: adminOrBoardMember,
      },
    },
  ],
}

export default Profiles
