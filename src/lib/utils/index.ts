export function m_txt_1SplitAll_arr_txt(txt_i: string): string[]{
    let arr_txt_o = [];
    let arr_txt_p = m_Initialize_arr_txt();
    
    for(let i = 0; i < txt_i.length; i++){
        let char_p = txt_i[i];
        if(arr_txt_p.includes(char_p)){
            //Se tomarán todos los elementos anteriores a la posicion donde se encuentra txt_p
            //Realizando un slice entre los elementos anteriores a la posición de txt_p y el indice de txt_p
            let txt_p = txt_i.slice(0,i);
            arr_txt_o.push(txt_p);
            txt_i = txt_i.slice(i+1);
            i = -1;
        } 
    } 
    if(txt_i !== ''){
        arr_txt_o.push(txt_i);
    } 
    //Recorrer cada caracter txt_i
    //Encontrar algun elemento de arr_txt_p que sea igual a algún caractér de txt_i
    return arr_txt_o;
}; 

export function m_Initialize_arr_txt(): string[]{
    let arr_txt_o = ['+', '-', '*', '/']
    return arr_txt_o;
}; 

export function g_m_txt_Pairing_arr_arr_txt(txt_i: string){
    let arr_arr_txt_o = [];

    let arr_txt_p2 = [];
// Create a dynamic regular expression from the separators array
    let arr_txt_p: string[] = m_txt_1SplitAll_arr_txt(txt_i);

    let num_p:number = arr_txt_p.length;

    const loop_1 = () => {
        for(let i = 0; i < num_p; i+=2){
            let arr_txt_p2 = [];
            let txt_p = arr_txt_p[i];
            let txt_p2 = i+1 < num_p ? arr_txt_p[i+1]: undefined;
            if(txt_p2 !== undefined){
                arr_txt_p2.push(txt_p, txt_p2);
            } else{
                arr_txt_p2.push(txt_p)
            } 
            arr_arr_txt_o.push(arr_txt_p2);
        } 

    } 
    loop_1();
    return arr_arr_txt_o;
};


export function m_txt_Pairing_arr_arr_txt(txt_i: string){
    let arr_arr_txt_o = [];

    let arr_txt_p2 = [];
// Create a dynamic regular expression from the separators array
    let arr_txt_p: string[] = m_txt_1SplitAll_arr_txt(txt_i);

    let num_p:number = arr_txt_p.length;

    const loop_1 = () => {
        for(let i = 0; i < num_p; i+=2){
            let arr_txt_p2 = [];
            let txt_p = arr_txt_p[i];
            let txt_p2 = i+1 < num_p ? arr_txt_p[i+1]: undefined;
            if(txt_p2 !== undefined){
                arr_txt_p2.push(txt_p, txt_p2);
            } else{
                arr_txt_p2.push(txt_p)
            } 
            arr_arr_txt_o.push(arr_txt_p2);
        } 

    } 
    loop_1();
    return arr_arr_txt_o;
};


export function m_arr_txt_ConvertAll_arr_num(arr_txt_i: string[]): number[]{
    let arr_num_o: number[] = [];
    for(let i = 0; i < arr_txt_i.length; i++){
        let txt_p = arr_txt_i[i];
        let num_p = parseInt(txt_p);
        arr_num_o.push(num_p);
    } 
    return arr_num_o
} 


export function m_num_Convert_txt(num_i: number):string{
    let txt_o = '';
    let txt_p = num_i.toString();
    txt_o = txt_p;
    return txt_o;
} 


export function m_txt_1EvaluateAll_num(txt_i:string){
    let txt_o = '';
    let num_p2 = 0;

    let arr_arr_txt_p = m_txt_Pairing_arr_arr_txt(txt_i);
    for(let i = 0; i < arr_arr_txt_p.length; i++){
        let arr_txt_l = arr_arr_txt_p[i]; //Par en texto
        let arr_num_l:Array<number> = arr_txt_l.map((txt_p: string) => parseInt(txt_p)); //Par en numero
        let num_p = arr_num_l.length > 1 ? arr_num_l.reduce((a, b) => a + b): arr_num_l[0];  //Par verdadero o par falso
        num_p2 += num_p
    } 
   return num_p2.toString();
}; 
