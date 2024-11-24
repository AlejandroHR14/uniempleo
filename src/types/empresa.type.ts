export interface Empresa {
    id:                    number;
    city:                  string;
    career:                string;
    companyName:           string;
    internshipDescription: string;
    availablePositions:    number;
    requirements:          string[];
    contactEmail:          string;
    stipend:               string;
    companyLogo:           string;
    positionsOffered     : Puesto[];
}

export interface Puesto {
    title: string;
    description: string;
    requirements: string[];
    salary: string;
    schedule: string;
}
