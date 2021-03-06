import { 
    RecordData,
    DeleteRecordResponse, 
    QueryRecordData, 
    QueryRecordDataResponse,
    UpdateCreateRecordResponse,
} from "../typings"

class Records {

    private url: string
    private queryUrl: string
    
    constructor() {
        this.url = "https://api.quickbase.com/v1/records"
        this.queryUrl = "https://api.quickbase.com/v1/records/query"
    }

    create = async (to: string, data: object[], headers: object): Promise<UpdateCreateRecordResponse> => {
        return new Promise((resolve, reject) => {
            fetch(this.url, {
                method: "POST",
                mode: "cors",
                headers: headers as HeadersInit,
                body: JSON.stringify({ to, data }),
            }).then((res: Response) => {
                return res.json()
            }).then((res: UpdateCreateRecordResponse) => {
                resolve(res)
            }).catch((err: Error) => {
                reject(err)
            })
        })
    }

    update = async (to: string, data: RecordData[], headers: object, fidRid?: number): Promise<UpdateCreateRecordResponse> => {
        let recordData = await this.updateDataHandler(data, fidRid)

        return new Promise((resolve, reject) => {
            fetch(this.url, {
                method: "POST",
                mode: "cors",
                headers: headers as HeadersInit,
                body: JSON.stringify({ to, recordData }),
            }).then((res: Response) => {
                return res.json()
            }).then((res: UpdateCreateRecordResponse) => {
                resolve(res)
            }).catch((err: Error) => {
                reject(err)
            })
        })
    }

    delete = async (from: string, where: string, headers: object): Promise<DeleteRecordResponse> => {
        return new Promise((resolve, reject) => {
            fetch(this.url, {
                method: "POST",
                mode: "cors",
                headers: headers as HeadersInit,
                body: JSON.stringify({ from, where }),
            }).then((res: Response) => {
                return res.json()
            }).then((res: DeleteRecordResponse) => {
                resolve(res)
            }).catch((err: Error) => {
                reject(err)
            })
        })
    }

    get = async (opt: QueryRecordData, headers): Promise<QueryRecordDataResponse> => {
        return new Promise((resolve, reject) => {
            fetch(this.queryUrl, {
                method: "POST",
                mode: "cors",
                headers: headers as HeadersInit,
                body: JSON.stringify(opt),
            }).then((res: Response) => {
                return res.json()
            }).then((res: QueryRecordDataResponse) => {
                resolve(res)
            }).catch((err: Error) => {
                reject(err)
            })
        })
    }

    updateDataHandler = async (data: RecordData[], fidRid?: number): Promise<object[]> => {
        let postData: object[] = [] as object[]
        let rid = !fidRid ? 3 : fidRid


        return new Promise((resolve, reject) => {
            data.forEach(element => {
                postData.push({ 
                    [rid]: {value: element.rid}
                })
                element.fields.forEach(el => {
                    postData[postData.length-1][el.fid] = { value: el.value }
                });
            })
    
            resolve(postData)
        })
    }

}

export default new Records()