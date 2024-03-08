<script lang="ts">
	import Calculator from '../lib/Calculator.svelte';
    import type { PageData } from "./$types";

    export const data: PageData = {};

   
let obj = {
    v_txt_1: 'Calculator',
    v_txt_2: '',
    arr_arr: [
        {arr_num:[1,2,3,4,5,6,7,8,9]},
        {arr_txt: ['+', '-', '*', '/']},
        {arr_arr_num: [[7,8,9],[4, 5, 6], [1,2,3],[0]]},
        {arr_txt_2: ['=']}
    ]
}

</script>

<Calculator {...obj}></Calculator>