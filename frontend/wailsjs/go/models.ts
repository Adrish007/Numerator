export namespace main {
	
	export class ConversionResult {
	    hex: string;
	    bin: string;
	    dec: string;
	    error: string;
	
	    static createFrom(source: any = {}) {
	        return new ConversionResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.hex = source["hex"];
	        this.bin = source["bin"];
	        this.dec = source["dec"];
	        this.error = source["error"];
	    }
	}

}

