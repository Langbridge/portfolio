export type Image = {
    src:string,
    alt:string
}

export type Project = {
    title: string,
    slug:string,
    featuredImage:Image,
    tags:string[],
    excerpt:string,
}

export type Publication = {
    title:string,
    journal:string,
    authors:string[],
    paper:string,
    code:string,
    citation:string,
    project:string,
}