import { putDatas } from './app.js'

export const loadTask = () => {
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    tasks.forEach((task)=>{
        putDatas(task)
    })
}