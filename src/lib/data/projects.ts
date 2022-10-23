import { readable, type Readable, type Subscriber } from "svelte/store";
// import * as metaData from "src/static/content/posts/posts.json"
import type { Project } from "./core_types";
import metaData from "./projects.json"

export const projects:Readable<[Project]> = readable(metaData, function start(_:Subscriber<any>) {
    return function stop() {return null}
})

export const prerender = true