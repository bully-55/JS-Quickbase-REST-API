import { RecordData, DeleteRecordResponse } from "../typings"

class Records {

    private url: string
    // private headers: object
    
    constructor(headers) {
        // this.headers = headers
        this.url = "https://api.quickbase.com/v1/records"
    }

    create = async (data: RecordData, headers: object): Promise<object> => {
        return new Promise((resolve, reject) => {
            fetch(this.url, {
                method: "POST",
                mode: "cors",
                headers: headers as HeadersInit,
                body: JSON.stringify(data),
            }).then(res => {
                return res.json
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }

    delete = (from: string, where: string, headers: object): Promise<Response> => {
        return fetch(this.url, {
            method: "POST",
            mode: "cors",
            headers: headers as HeadersInit,
            body: JSON.stringify({ from, where }),
        })
    }

}