export type Project = {
    projectTitle:string,
    desc:string[],
    tech:string[],
}

export type Skill = {
    skillTitle:string,
    techs:string[]
}

export type ComplexSkill = {
    title:string,
    image?:string,
    skills:Skill[]
}