<script lang="ts">
    import * as utils from '../lib/utils/index'
    import { parse } from "svelte/compiler";
    export let v_txt_1;
    export let v_txt_2;
    export let arr_arr;

    let input = '';
    function handleNum(num_i:number){
        let num_p = num_i.toString();
        input += num_p;
    } 

    function handleOperator(txt_i: string){
        let txt_p = txt_i;
        input += txt_p
    };


    


</script>


<input type="text" bind:value={input} role="textbox">
<p>{v_txt_1}</p>
<p>{v_txt_2}</p>

{#each arr_arr as arr}
    {#if arr.arr_arr_num}
        {#each arr.arr_arr_num as arr_num }
            <div role="row">
                {#each arr_num as num}
                    <button on:click={() => handleNum(num)}>{num}</button>
                {/each}
            </div>
        {/each}
    {/if}
    {#if arr.arr_txt}
        {#each arr.arr_txt as txt}
            <button on:click={() =>{handleOperator(txt)}} >{txt}</button>
        {/each}
    {/if}
    {#if arr.arr_txt_2}
            {#each arr.arr_txt_2 as txt}
                <button on:click={()=> utils.m_txt_1EvaluateAll_num(input)} >{txt}</button>
            {/each}
    {/if}
{/each}
