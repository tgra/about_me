export interface ExperienceData {
    id: string
    title: string
    start?:string
    end?:string
    description:any[]
    skills:any[]
    org:string
  
  }
  
export interface ExperienceDataProps {
    experienceData: ExperienceData
  }

export interface ExperienceDataListProps {
    experienceDataList: ExperienceData[]
  }