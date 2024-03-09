<script lang="ts">
    import * as utils from '../lib/utils/index'
    import { parse } from "svelte/compiler";
    export let v_txt_1;
    export let v_txt_2;
    export let arr_arr;

    let x:HTMLInputElement;
    export function num_handleNum_txt(num_i:number){
        let txt_o = '';

        let txt_p = num_i.toString();
        x.value += txt_p;
        txt_o = x.value;
        return txt_o;
    } 

    export function txt_handleOperator_txt(txt_i: string){
       let txt_o = '';
       x.value += txt_i;
       txt_o = x.value;
       return txt_o;
    };

    export function txt_handleEqual_txt(txt_i: string){
        //If input has operators 
            //Read input 

            //If there's not operator then return the input
            //If there's operator then process
    }; 
    


</script>


<input type="text" bind:this={x} role="textbox">
<p>{v_txt_1}</p>
<p>{v_txt_2}</p>

{#each arr_arr as arr}
    {#if arr.arr_arr_num}
        {#each arr.arr_arr_num as arr_num }
            <div role="row">
                {#each arr_num as num}
                    <button on:click={() => num_handleNum_txt(num)}>{num}</button>
                {/each}
            </div>
        {/each}
    {/if}
    {#if arr.arr_txt}
        {#each arr.arr_txt as txt}
            <button on:click={() =>{txt_handleOperator_txt(txt)}} >{txt}</button>
        {/each}
    {/if}
    {#if arr.arr_txt_2}
            {#each arr.arr_txt_2 as txt}
            <!-- Se muestra el boton = -->
                <button on:click={()=> txt_handleEqual_txt(input)} >{txt}</button>
            {/each}
    {/if}
{/each}
