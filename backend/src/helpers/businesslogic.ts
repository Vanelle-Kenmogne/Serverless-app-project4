import { getTodos} from './datalayer'
// import { AttachmentUtils } from './filemanagement';
// import { TodoItem } from '../models/TodoItem'
// import { CreateTodoRequest } from '../requests/CreateTodoRequest'
// import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
// import { createLogger } from '../utils/logger'
// import * as uuid from 'uuid'
// import * as createError from 'http-errors'

// TODO: Implement businessLogic

export function getTodosForUser(userId:string) {
    return new Promise(async(resolve, reject) => {
        try {
            const todos = await getTodos(userId);
            resolve(todos.data.items)
        } catch (error) {
            reject(error)
        }
    })
}