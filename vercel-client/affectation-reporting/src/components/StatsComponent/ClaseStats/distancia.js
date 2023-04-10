export class coordenadas {
    constructor(lat,long){
        this.lat=lat;
        this.long=long;
    }

    static distancia(a,b){
        const lr1 = a.lat*Math.PI/180;
        const longr1 = a.long*Math.PI/180;
        const lr2 = b.lat*Math.PI/180;
        const longr2 = b.long*Math.PI/180;
        const r = 6378000;
        console.log(lr1,lr2,longr1,longr2,"XXXXX");
        const _a = Math.pow(Math.sin((lr2-lr1)/2),2);
        const _b = Math.cos(lr1)*Math.cos(lr2);
        const _c = Math.pow(Math.sin((longr2-longr1)/2),2);
        const alfa = 2*r;
        
        const distancia = alfa * (Math.asin(Math.sqrt(_a + (_b * _c))));
        console.log(distancia,"DISTANCIA");
        return distancia;
    }
}