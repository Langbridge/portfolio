export type Image = {
    src:string,
    alt:string
}

export type Component = {
    component:string,
    props:Record<string, unknown>
}

export type ProjectLink = {
    label: string;      // Button text (e.g., "Paper", "Code", "Project Page")
    url: string;        // URL of the resource; can be empty
    type?: "primary" | "secondary";  // Styling for the button
}

export type Project = {
    title: string;      // Project title
    slug?: string;      // Optional slug or identifier
    featuredImage: {
        src: string;    // Image source path or URL
        alt: string;    // Alt text for the image
    };
    tags: string[];     // Tags or categories for the project
    excerpt: string;    // Short description of the project
    links?: ProjectLink[]; // Optional array of links (Paper, Code, etc.)
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