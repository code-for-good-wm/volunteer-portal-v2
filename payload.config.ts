import path from 'path'
// import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import Users from './src/collections/Users'
import EventSeries from './src/collections/EventSeries'
import Events from './src/collections/Events'
import EventLocations from './src/collections/EventLocations'
import Projects from './src/collections/Projects'
import Organizations from './src/collections/Organizations'
import Teams from './src/collections/Teams'
import Profiles from '@/collections/Profiles'
import ProfileSkills from '@/collections/ProfileSkills'

import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  ChecklistFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import profileSkillsSource from '@/data/profileSkillsSource'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  collections: [
    Users,
    EventSeries,
    Events,
    EventLocations,
    Organizations,
    Projects,
    Teams,
    Profiles,
    ProfileSkills,
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // db: postgresAdapter({
  //   pool: {
  //     connectionString: process.env.POSTGRES_URI || ''
  //   }
  // }),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      email: 'admin@codeforgoodwm.org',
      password: 'admin',
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          authId: '1234',
          email: 'admin@codeforgoodwm.org',
          password: 'admin',
          name: 'CFG Admin',
          role: 'admin',
        },
      })
    }

    const profileSkills = await payload.find({
      collection: 'profile-skills',
      limit: 1,
    })

    if (profileSkills.docs.length === 0) {
      console.log('Creating profile skills')
      for (let i = 0; i < profileSkillsSource.length; i++) {
        // TODO: Can we just dump these in without an await?
        await payload.create({
          collection: 'profile-skills',
          data: profileSkillsSource[i],
        })
      }
      console.log('Profile skills created')
    }
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
