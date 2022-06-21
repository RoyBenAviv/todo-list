export interface Todo {
    _id?: string,
    title: string,
    isCompleted: boolean,
    importancy: number,
    doneAt: null | number | Date
}