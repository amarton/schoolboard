//boilerplate to create the writeable story
import { writable } from "svelte/store";

//create a writeable variable in this store and give it an initial value
export const county = writable("Baltimore County");
