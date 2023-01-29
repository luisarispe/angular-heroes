export class Heroe {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public modified: Date,
        public thumbnail: Object,
        public resourceURI: string,
        public teamColor:TeamColor
    ) {}
}
export class TeamColor{
    public _id:string;
    public id_hero:string;
    public color:string;
    public color_code:string;
}
