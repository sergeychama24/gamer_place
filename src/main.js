import './pages/index.css'
import {getGamesList, result} from './components/api'

//
// const app = document.querySelector('#app')
// app.innerHTML = ``
(async () => {
    await getGamesList(1);
    await getGamesList(2);
    await getGamesList(3);

    console.log(result);
})();
