import { readable, type Readable, type Subscriber } from "svelte/store";
// import * as metaData from "src/static/content/posts/posts.json"
import type { Publication } from "./core_types";
import metaData from "./publications.json"

export const publications:Readable<[Publication]> = readable(metaData, function start(_:Subscriber<any>) {
    return function stop() {return null}
})