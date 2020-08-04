export type RecordData = {
    rid: number,
    fields: { fid: number, value: any }[]
} 

export type UpdateCreateRecordResponse = {
    data: any[],
    metadata: { createRecordIds: number[] },
    totalNumberOfRecordsProcessed: number,
    unchangedRecordIds: any[],
    updatedRecordIds: number[]
}

export type DeleteRecordResponse = {
    numberDeleted: number
}

export type QueryRecordData = {
    to: string,
    select?: number[],
    where?: string,
    sortBy?: { fieldId: number, order: string }[],
    groupBy?: { fieldId: number, grouping: string }[],
    options?: { skip: number, top: number },
}

export type QueryRecordDataResponse = {
    data: object[],
    fields: { id: number, label: string, type: string }[],
    metadata: { totalRecords: number, numRecords: number, numFields: number, skip: number }
}