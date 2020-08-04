class Records {

    private url: string
    private headers: object
    
    constructor(headers) {
        this.headers = headers
        this.url = "https://api.quickbase.com/v1/records"
    }

    create = (data: any): void => {
        
    }

}