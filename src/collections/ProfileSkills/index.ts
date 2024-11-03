import skillLevels from '@/data/skillLevels'
import { adminOrBoardMember } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const ProfileSkills: CollectionConfig = {
  slug: 'profile-skills',
  access: {
    create: adminOrBoardMember,
    update: adminOrBoardMember,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'description',
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'archived',
      type: 'checkbox',
      required: false,
    },
  ],
}

export default ProfileSkills
