import { admin } from "./admin";


//we can extends class in interface . practiclaly we never do this.
export interface who extends admin {
    covid(): void;
}
