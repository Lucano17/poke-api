import { Type } from "./pokemon";

export interface SimplePokemon {
    id: string;
    name: string;
    types: Type[]
}