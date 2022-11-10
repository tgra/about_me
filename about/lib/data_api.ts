import { ExperienceData } from '../types/experiencedata'

const fs = require('fs')


export async function GetExperiences(): Promise<ExperienceData[]> {
    let file = "../data/experience.json"
    let rawdata = fs.readFileSync(file);
    let result = JSON.parse(rawdata);
    const experienceList: ExperienceData[] = (result.experiences) as ExperienceData[]
    return experienceList
}

