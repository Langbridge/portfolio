export type Image = {
    src:string,
    alt:string
}

export type Component = {
    component:string,
    props:Record<string, unknown>
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

// export const prerender = true