import {auth, baseUrl} from "@/constants/constants";


export const apiFetch  = async <T,> (endpoint:string, params?:{ [key: string]: string | string[] |number| undefined; }):Promise<T> => {
    const query = new URLSearchParams();

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                query.set(key, String(value));
            }
        });
    }

    const url = `${baseUrl}${endpoint}${query.toString() ? `?${query.toString()}` : ''}`;
    return await fetch(url, {
        headers: {
            "Authorization": `Bearer ${auth}`,
        },
        next:{revalidate:3600}
    })
        .then(response => response.json())
}