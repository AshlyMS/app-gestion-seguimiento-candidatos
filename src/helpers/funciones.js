export function generarToken(){
    let token = ""
    for(let index=0; index<=15; index++){
        token += Math.random().toString(36).substring(2);
    }
    return token
}