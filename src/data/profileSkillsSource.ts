type SkillCode =
  | 'frontEndDev'
  | 'backEndDev'
  | 'databases'
  | 'mobileDev'
  | 'devOps'
  | 'wordPress'
  | 'squarespace'
  | 'wix'
  | 'weebly'
  | 'htmlCss'
  | 'javaScript'
  | 'react'
  | 'vue'
  | 'angular'
  | 'nodeExpress'
  | 'phpLaravel'
  | 'projMgmt'
  | 'brand'
  | 'copy'
  | 'crm'
  | 'marketing'
  | 'seo'
  | 'social'
  | 'technicalWriting'
  | 'testing'
  | 'a11y'
  | 'a11yDev'
  | 'assistiveTech'
  | 'photography'
  | 'videography'
  | 'print'
  | 'ux'
  | 'ui'
  | 'designThinking'
  | 'illustration'
  | 'motionGraphics'
  | 'adobeSuite'
  | 'sketch'
  | 'figma'
  | 'zeplin'
  | 'inVision'
  | 'marvel'
  | 'adobeXd'

type SkillDescription =
  | 'Front End Dev'
  | 'Back End Dev'
  | 'Databases'
  | 'Mobile Dev'
  | 'DevOps'
  | 'WordPress'
  | 'Squarespace'
  | 'Wix'
  | 'Weebly'
  | 'HTML / CSS'
  | 'JavaScript'
  | 'React'
  | 'Vue'
  | 'Angular'
  | 'Node / Express'
  | 'PHP / Laravel'
  | 'Project Management'
  | 'Brand Strategy'
  | 'Copywriting'
  | 'CRM Tools (e.g. Salesforce)'
  | 'Marketing'
  | 'SEO'
  | 'Social Media'
  | 'Technical Writing'
  | 'User Testing / Compliance Testing'
  | 'Accessible Design'
  | 'Accessible Development'
  | 'Assistive Technology'
  | 'Photography'
  | 'Videography'
  | 'Print Design'
  | 'User Experience (UX)'
  | 'User Interface (UI)'
  | 'Design Thinking'
  | 'Illustration'
  | 'Branding'
  | 'Motion Graphics'
  | 'Adobe Creative Suite'
  | 'Sketch'
  | 'Figma'
  | 'Zeplin'
  | 'InVision'
  | 'Marvel'
  | 'Adobe XD'

interface SkillSourceItem {
  code: SkillCode
  description: SkillDescription
}

// TODO: Make sure all skills are accounted for below
const profileSkillsSource: SkillSourceItem[] = [
  { code: 'frontEndDev', description: 'Front End Dev' },
  { code: 'backEndDev', description: 'Back End Dev' },
  { code: 'databases', description: 'Databases' },
  { code: 'mobileDev', description: 'Mobile Dev' },
  { code: 'devOps', description: 'DevOps' },
  { code: 'wordPress', description: 'WordPress' },
  { code: 'squarespace', description: 'Squarespace' },
  { code: 'wix', description: 'Wix' },
  { code: 'weebly', description: 'Weebly' },
  { code: 'htmlCss', description: 'HTML / CSS' },
  { code: 'javaScript', description: 'JavaScript' },
  { code: 'react', description: 'React' },
  { code: 'vue', description: 'Vue' },
  { code: 'angular', description: 'Angular' },
  { code: 'nodeExpress', description: 'Node / Express' },
  { code: 'phpLaravel', description: 'PHP / Laravel' },
  { code: 'projMgmt', description: 'Project Management' },
  { code: 'brand', description: 'Brand Strategy' },
  { code: 'copy', description: 'Copywriting' },
  { code: 'crm', description: 'CRM Tools (e.g. Salesforce)' },
  { code: 'marketing', description: 'Marketing' },
  { code: 'seo', description: 'SEO' },
  { code: 'social', description: 'Social Media' },
  { code: 'technicalWriting', description: 'Technical Writing' },
  { code: 'testing', description: 'User Testing / Compliance Testing' },
  { code: 'a11y', description: 'Accessible Design' },
  { code: 'a11yDev', description: 'Accessible Development' },
  { code: 'assistiveTech', description: 'Assistive Technology' },
  { code: 'photography', description: 'Photography' },
  { code: 'videography', description: 'Videography' },
  { code: 'print', description: 'Print Design' },
  { code: 'ux', description: 'User Experience (UX)' },
  { code: 'ui', description: 'User Interface (UI)' },
  { code: 'designThinking', description: 'Design Thinking' },
  { code: 'illustration', description: 'Illustration' },
  { code: 'brand', description: 'Branding' },
  { code: 'motionGraphics', description: 'Motion Graphics' },
  { code: 'adobeSuite', description: 'Adobe Creative Suite' },
  { code: 'sketch', description: 'Sketch' },
  { code: 'figma', description: 'Figma' },
  { code: 'zeplin', description: 'Zeplin' },
  { code: 'inVision', description: 'InVision' },
  { code: 'marvel', description: 'Marvel' },
  { code: 'adobeXd', description: 'Adobe XD' },
]

export default profileSkillsSource
