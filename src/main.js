import './pages/index.css'
import {getGamesList, result} from './components/api'

//
// const app = document.querySelector('#app')
// app.innerHTML = ``

const spinner = document.querySelector('.spinner');
export function renderLoading(isLoading) {
    if (isLoading) {
        spinner.classList.add('active')
    } else {
        spinner.classList.remove('active')
    }
}
