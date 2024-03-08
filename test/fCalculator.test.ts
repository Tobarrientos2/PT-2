import { afterEach, beforeEach, describe, expect, it, test } from "vitest";
import * as utils from '../src/lib/utils/index'
import { getByRole, getByText, render, screen, cleanup, fireEvent, waitFor } from "@testing-library/svelte";
import Calculator from "../src/lib/Calculator.svelte";



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

describe('m_txt_1SplitAll_arr_txt function', ():void => {

    it('m_txt_1SplitAll_arr_txt function should take an array of strings and return an array of string', (): void =>{
        expect(utils.m_txt_1SplitAll_arr_txt("121-1-1")).toEqual(['121', '1', '1'])
    })

    it('test', ():void => {

    })
}) 

describe('m_txt_1EvaluateAll_num function', () =>{
    it('m_txt_1EvaluateAll_num function should take a string as evaluate that string and return a string. Ej: 1+1', () => {
        // expect(() => utils.m_txt_1EvaluateAll_num(`1+1`))
        // expect(() => utils.m_txt_1EvaluateAll_num('1+1+1')).to.deep.equal('3')
        // expect(() => utils.m_txt_1EvaluateAll_num('1+1+2')).toEqual('4')
    }); 

})

// describe('m_txt_Pairing function ', ():void =>{
    
//     it('m_txt_Pairing function shoud take a string as input and return an array of array. Each child array willl have two strings. Each pair shoud have to numbers.', async (): Promise<void> => {
//         const calculator = new Calculator({props: obj, target: document.body});

//         expect(utils.m_txt_Pairing_arr_arr_txt('111+1')).toEqual([['111', '1']])
//         expect(utils.m_txt_Pairing_arr_arr_txt('121+1')).toEqual([['121', '1']])
//         expect(utils.m_txt_Pairing_arr_arr_txt('121+1+1')).toEqual([['121', '1'], ['1']])

//         //Testeo depende del correcto funcionamiento de la funcion m_arr_txt_Split_txt
//         expect(utils.m_txt_Pairing_arr_arr_txt('121-1-1')).toEqual([['121', '1'], ['1']])
//         expect(utils.m_txt_Pairing_arr_arr_txt('121*1*1')).toEqual([['121', '1'], ['1']])
//         expect(utils.m_txt_Pairing_arr_arr_txt('121/1/1')).toEqual([['121', '1'], ['1']])
//         expect(utils.m_txt_Pairing_arr_arr_txt('121/1/1+1')).toEqual([['121', '1'], ['1', '1']])
//         expect(utils.m_txt_Pairing_arr_arr_txt('1+1')).toEqual([['1','1']])


//     })

//     it('g_m_txt_Pairing function shoud take a string as input and return an array of objects. Each object will have an array of two strings as a value and an operation as key.', async (): Promise<void> => {
//         const calculator = new Calculator({props: obj, target: document.body});

//         expect(utils.g_m_txt_Pairing_arr_arr_txt('111+1')).toEqual([['111', '1']])
     
//     })
// })