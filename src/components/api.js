import {renderLoading} from '../main.js'

export const result = []
export const key = "f35c3a30d54e474cb0bf6f725ad38c6f";

export async function getGamesList(intPage) {
    const queryParams = new URLSearchParams({
        key: key,
        page: intPage,
        page_size: 40,
        genres: "action"
    });

    const url = `https://api.rawg.io/api/games?${queryParams}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        result.push(...data.results);
    } catch (error) {
        console.error('Error:', error);
        throw error; // Пробросить ошибку для обработки на верхнем уровне
    }
}