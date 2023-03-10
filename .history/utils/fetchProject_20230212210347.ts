import { Project } from "../typing";

export const fetchProject = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getProject`)
    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;

}