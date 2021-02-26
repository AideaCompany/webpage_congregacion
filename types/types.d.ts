import { Localization } from '../i18n/types'

export type propsLayout = {
  title?: string
  children: JSX.Element
}

export interface propsHeader extends propsLayout {
  image?: string
}

import { FormInstance } from 'antd/lib/form'
import { ReactNode } from 'react'
import { Localization, Translations } from '../i18n/types'

export type User = {
  _id?: string
  password?: string
  name?: string
  lastname?: string
  email?: string
  privilegeID?: Privilege | string
  province?: Province | string
  active?: boolean
  country?: iCountry | string
  token?: string
  createdAt?: Date
  updatedAt?: Date
  key?: string
  isActive?: string
  rolName?: string
}

export interface iUserForm extends User {
  confirmPassword?: string
}

export type Privilege = {
  _id?: string
  key?: string
  name?: string
  createdAt?: Date
  UpdatedAt?: Date
  permissions?: PermissionsPrivilege[]
}

export type PermissionsPrivilege = {
  sectionID?: Sections['_id']
  read?: boolean
  create?: boolean
  delete?: boolean
  update?: boolean
  sectionName?: string
}

export type Sections = {
  _id: string
  name: string
  description: string
  createdAt: Date
  UpdatedAt: Date
}

export type HistoryAction = {
  userId: User['_id']
  action: string
  createdAt: string
  updatedAt: string
}

export type TableProps = {
  data?: any[]
  columns: any[]
  loading?: boolean
}

export type LayoutProps = {
  children: JSX.Element
  title: string
  showTitle?: boolean
  fullWidth?: boolean
}

export type iCountry = {
  key?: string
  name: string
  latlng?: [number, number]
  nativeName?: string
  _id: string
  translations?: Translations
}
//User Secction

export type ButtonsCrudProps = {
  titleCreate?: string
  functionCreate?: () => void
  formSubmit?: boolean
}

export type Province = {
  key?: string
  _id: string
  name: string
  country: iCountry | string
  state: string
  city: string
  address: string
  link: string
  phone1: string
  phone2: string
  fax: string
  photo: fileType
  email: string
  opened: string
  closed: string
  createdAt?: Date
  updatedAt?: Date
}
export interface IAcademicLevels extends Document {
  key?: string
  _id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}
export interface ICargos extends Document {
  key?: string
  _id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}
export interface IDocumentType extends Document {
  key?: string
  _id: string
  name: string
  short: string
  createdAt?: Date
  updatedAt?: Date
}
export interface IFamilyType extends Document {
  key?: string
  _id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}
export interface IFormationStages extends Document {
  key?: string
  _id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}
export interface IMision extends Document {
  key?: string
  _id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IMotiveRetreat extends Document {
  key?: string
  _id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}
export interface IFraternity extends Document {
  key?: string
  _id: string
  name: string
  province: Province | string
  country: iCountry | string
  misionApostol: IMisionApostol | string
  state: string
  city: string
  address: string
  phone1: string
  phone2: string
  cel: string
  email: string
  opened: string
  closed: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IObras extends Document {
  key?: string
  _id: string
  name: string
  province: IProvinces | string
  fraternity: IFraternity | string
  country: iCountry | string
  mision: IMisionApostol | string
  state: string
  city: string
  address: string
  phone1: string
  phone2: string
  cel: string
  email: string
  fax: string
  opened: string
  closed: string
  finality: string
  createdAt?: Date
  updatedAt?: Date
}

export type ColumnFactoryType = {
  name: string
  search?: boolean
  sort?: boolean
  filter?: string[]
  customRender?: (render: any) => JSX.Element | string
}

namespace FormFactory {
  export interface FormFactoryType {
    name: string
    type: typeForm
    visible?: boolean
    opacity?: boolean
    required?: boolean
    adicionalProps?: any
    fullWidth?: boolean
    // Para selector
    data?: any[]
    //para Table
    actualFormRef?: FormInstance<any> | null | undefined
    FormItems?: (update: boolean, key?: string) => JSX.Element
    columnsItem?: ColumnFactoryType[]
    inicialData?: any
    //Para dynamic
    formListElements?: FormFactoryType[]
    width?: number
  }
  export type typeForm =
    | 'string'
    | 'number'
    | 'date'
    | 'boolean'
    | 'email'
    | 'select'
    | 'textArea'
    | 'dynamic'
    | 'avatar'
    | 'table'
    | 'upload'
    | 'date-year'
    | 'date-month'
}

export type fileType = {
  filename: string
  key: string
}

export interface IHermanas {
  key?: string
  _id: string
  photo: fileType | string | any
  nameReligion: string
  name: string
  birth: string
  entry: string
  Country: iCountry | string
  nacionalDocument: string
  nacionalDocumentlexpedite: string
  foreignDocument: string
  foreignDocumentlexpedite: string
  province: IProvinces | string
  fraternity: IFraternity | string
  obras: IObras | string
  ownerProvince: IProvinces | string
  cargo: ICargos | string
  formationStages: IFormationStages | string
  academicLevels: IAcademicLevels | string
  death: string
  mision: IMision | string
  retreat: string
  motiveRetreat: IMotiveRetreat | string
  bloodGroupRh: string
  bloodPressure: string
  healthRecord: string
  impediments: string
  skills: string
  hobbies: string
  historyFormation: FormationHistory[]
  documentList: DocumentList[]
  families: family[]
  familyVisitHistory: familyVisit[]
  madeCargo: madeCargo[]
  createdAt?: Date
  updatedAt?: Date
  appliedStudies: AppliedStudies[]
  formacionInicial: formacionInicialInput
  absence: absence[]
  secularizacion: Date | string
  exclaustracion: Date | string
}

type absence = {
  initDate: Date | string
  endDate: Date | string
  motive: String
}

type formacionInicialInput = {
  startDate?: String
  endDate?: String
  isFormation?: Boolean
}
export type DocumentList = {
  _id?: any
  key: any
  type: IDocumentType | string
  number: string
  country: iCountry | string
  date: Date | string
  files: fileType | string | any
  action?: 'delete' | 'update'
}

type madeCargo = {
  cargo: ICargos | string
  start: Date | string
  end: Date | string
  country: iCountry | string
  city: string
  place: string
}
type family = {
  numberDocument: string
  familyType: IFamilyType | string
  name: string
  death: boolean
  country: iCountry | string
  state: string
  city: string
  address: string
  phone: string
  cel: string
  healthState: string
}

type familyVisit = {
  date: Date | string
  country: iCountry | string
  city: string
}

type FormationHistory = {
  formationStages: IFormationStages | string
  date: Date | string
}

export type AppliedStudies = {
  title: string
  years: number
  graduateDate: string
  institution: string
  level: IAcademicLevels | string
}

export type layoutObj = {
  path: string
  title: string
  icon: JSX.Element
}

export interface IMisionApostol extends Document {
  key?: string
  _id: string
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IContentType extends Document {
  key?: string
  _id?: string
  name?: string
  type?: 'collection' | 'unique' | 'component' | string
  isSelected?: boolean
  createdAt?: Date
  updatedAt?: Date
}

//analytics
export type Analytics = {
  totalHermanas: totals
}

export type totals = {
  totalHermanas: number
  totalNovicias: number
  totalHermanasRetreat: number
  totalHermanasDeath: number
  totalProvinces: number
  totalFraternities: number
  newHermanas: number
  newHermanasDeath: number
  newHermanasRetired: number
}

export type PropsSearchOptions = {
  provinces: Province[]
  localization: Localization
  onSearch: (data: inputAnalyticsSearch) => Primise<void>
}

export type inputAnalyticsSearch = {
  provonce: string
  time: Date | string | number
}

export interface IEvent extends Document {
  key?: string
  _id?: string
  title?: string
  date?: string
  descrpition?: string
  image: fileType | string | any
}

export type PropsScreens = {
  dataCMS: any
  mainPhoto?: any
  photos?: any[]
}

export interface PropsHomeScreen extends PropsScreens {
  dataNews: NewsOBject[]
}

export interface PropsOurWorkScreen extends PropsScreens {
  dataNews: NewsOBject[]
}

export interface PropsMadreScreen extends PropsScreens {
  dataBlogs: NewsOBject[]
}

export interface PropsNewsScreen extends PropsScreens {
  dataNews: NewsOBject
}

export interface INews extends BlogObjetc {
  key?: string
  _id?: string
  date?: string | Date
  image?: fileType | string | any
}

export type BlogObjetc = {
  es?: NewsOBject
  en?: NewsOBject
  fr?: NewsOBject
  de?: NewsOBject
  it?: NewsOBject
}

export type IdiomsType = 'es' | 'en' | 'fr' | 'de' | 'it'

export interface NewsOBject extends INews {
  text?: string
  title?: string
  description?: string
}
