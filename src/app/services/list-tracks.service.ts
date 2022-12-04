import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from "rxjs";
import { IResponse } from "../interfaces/list-tracks.interface";
import { IPostFavorite, IResponseFavorite } from "../interfaces/favorites.interface";
import { environment } from "src/environments/environment";


@Injectable()
export class ListTrackService {

    constructor(private http: HttpClient){}

    async searchTrackByTerm(bandName: string, limit?: number): Promise<IResponse>{
        const url = `${environment.apiUrl}/search_tracks?term=${bandName}&media=music&limit=${limit || 25}`
        return firstValueFrom(
            this.http.get<IResponse>(url)
        )
    }

    async getFavorites() {
        const url = `${environment.apiUrl}/favorites`
        return firstValueFrom(
            this.http.get<IResponseFavorite>(url)
        )
    }

    async setFavorites(body: IPostFavorite) {
        const url = `${environment.apiUrl}/favorites`
        return firstValueFrom(
            this.http.post<IResponseFavorite>(url, body)
        )  
    }

}