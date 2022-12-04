export interface IResponseFavorite {
    status:  boolean;
    message: string;
    data:    IFavorite[] | null;
}

export interface IFavorite {
    nombre_banda: string;
    cancion_id:   number;
    usuario:      string;
    ranking:      string;
}


export interface IPostFavorite {
    nombre_banda: string;
    cancion_id: number;
    usuario: string;
    ranking: string;
}