import { TuyaAPI } from "./activate"

export const activateDevice =  (id, key) => {
    return new TuyaAPI(id, key);
}

export const connectDevice = (object) => {
    object.activate();
}