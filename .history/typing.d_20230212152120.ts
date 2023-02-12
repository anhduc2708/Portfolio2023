interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt:string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    role: string;
    heroImage: Image;
    name: string;
    profilePic: Image;
    title: string;
    backgroundInformation: string;
}

export interface Skill extends SanityBody{
    _type: "skill";
    image: Image;
    Name: string;
    title: string;

}

export interface Project extends SanityBody{
    _type: "projects";
    summary: string;
    image: Image;
    url: string;
    title: string;
    linkToBuild: string;
    technologies: Technology[];

}