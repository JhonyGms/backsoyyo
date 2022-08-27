import { Entity } from "../types";
import entity from "./entity.json";

const entitys: Array<Entity> = entity as Array<Entity>;

export const getEntity = () => entitys;

export const findById = (id: number): Entity | undefined=> {
    const entry = entity.find(d => d.entityId === id);
    return entry;
}

export const addEntry = () => null;  