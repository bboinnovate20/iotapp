
import * as TuyAPI from 'tuyapi';

export class TuyaAPI {
    
    device = null;

    constructor(id, key) {
        device =this.activate(id, key)
    }

    activate(id, key) {
        try{this.device = new TuyAPI({id, key});}
        catch(err) {return print("Error Activating")}   
    }

    async initiateDevice() {
        if(this.device) {
            await this.device.find();
            this.connectDevice();
        }
    }

    async connectDevice() {
        if(this.device) await this.device.connect();
    }

    async getStatus() {
        return await this.device.get();
    }

    async disconnect() {
        return await this.device.disconnect();

    }

    
}

