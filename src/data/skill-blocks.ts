import { type ComplexSkill } from "../types/types";

export const SkillBlocks : ComplexSkill[] = [
    {
        title:"Data & Analitycs",
        image:"/assets/code.svg",
        skills:[
            {
                skillTitle:"Languages",
                techs:["Python", "SQL"]
            },
            {
                skillTitle:"Data Processing",
                techs:["Pandas", "NumPy", "Matplotlib/Seaborn"]
            },
            {
                skillTitle:"Web Scraping",
                techs:["Selenium", "Beautiful Soup"]
            },
            {
                skillTitle:"Business Intelligence",
                techs:["Tableau", "Power BI"]
            },
            {
                skillTitle:"Learning in Progress",
                techs:["PySpark", "DAX"]
            },
        ]
    },
    {
        title:"Processes & Methodologies",
        image:"/assets/database.svg",
        skills:[
            {
                skillTitle:"Approaches &",
                techs:["Git", "APIs","Agile","SCRUM","MySQL","GitLab CI/CD",
                    "RKE","Node.js","RabbitMQ","Linux","Bash",
                    "Grafana","Prometheus"
                ]
            }
        ]
    }
    
]