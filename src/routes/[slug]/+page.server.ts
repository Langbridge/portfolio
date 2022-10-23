import { error } from '@sveltejs/kit';
import { projects } from "../../lib/data/projects"
import { get } from 'svelte/store'
import type { Project } from "../../lib/data/core_types"
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
 
    const projectIndex = get(projects).findIndex((project: Project) => project.slug === params.slug)
    const project = get(projects)[projectIndex]

    // console.log(project)

    const projectContent = await fetch(`../content/${params.slug}.json`).then((resp:any) => resp.json())
    
    // console.log(projectContent)

    if (projectContent) {
        return {
                project,
                projectContent:projectContent.content,
        };
    }
    
    throw error(404, 'Not found');
}

export const prerender = true