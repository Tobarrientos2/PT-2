import { afterEach, beforeEach, describe, expect, it, test } from "vitest";
import { getByRole, getByText, render, screen, cleanup, fireEvent, waitFor } from "@testing-library/svelte";
import * as utils from '../src/lib/utils/index'
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
describe('Calculator', ():void => {

    it('should render the calculator', ():void =>{
        render(Calculator, obj)
    })
    it('should render title correctly', (): void =>{
        render(Calculator, obj)
        screen.getByText('Calculator')
    })

    it('should render numbers of the calculator', (): void => {
        render(Calculator, obj)
        obj.arr_arr.forEach((arr) => {
            if(arr.arr_num){
                arr.arr_num.forEach((num) =>{
                    screen.getByText(num)
                })
            } 
        })
    })


    it('should render 4 rows', ():void => {
        render(Calculator, obj)
        const arr_arr_num = screen.getAllByRole('row')
        expect(arr_arr_num.length).toBe(4)
    })

    it('should render operations', (): void => {
        render(Calculator, obj)

        obj.arr_arr.forEach((arr)=>{
            if(arr.arr_txt){
                arr.arr_txt.forEach((txt) =>{
                    screen.getByText(txt)
                })
            } 
        })
   
    }) 

    it('should render equal sign', (): void => {
        render(Calculator, obj)
        screen.getByText('=')
    })
    
    it('should render input', (): void => {
        render(Calculator, obj)
        screen.getByRole('textbox')
    })

    it('should show user input after clicking a number', async ():Promise<void> => {
        render(Calculator, obj)
        const one = screen.getByText('1')
        fireEvent.click(one)

        
        const two = screen.getByText('2')
        fireEvent.click(two)

        const three = screen.getByText('3')
        fireEvent.click(three)


        const input = screen.getByRole('textbox') as HTMLInputElement
        await waitFor(() => {

            expect(input.value).toBe('123')
        })
    })
    it('should concat operators with numbers when clicking operations and show it in the input', async (): Promise<void> => {
        render(Calculator ,obj)
        const one = screen.getByText('1')
        fireEvent.click(one)

        const plus = screen.getByText('+')
        fireEvent.click(plus)
        fireEvent.click(one)

        const input = screen.getByRole('textbox') as HTMLInputElement
        await waitFor(() =>{
            expect(input.value).toBe('1+1')
        })
    })

    it('render should depend on functions', async ():Promise<void> =>{
        const calculator = new Calculator({props: obj, target: document.body}); 
        expect(utils.m_Initialize_arr_txt())
        expect(utils.m_txt_1SplitAll_arr_txt('1-1-1')).toEqual(['1', '1', '1'])

        expect(utils.m_arr_txt_ConvertAll_arr_num(['1','1','1'])).toEqual([1,1,1])
        expect(utils.m_txt_1EvaluateAll_num('1+1')).toEqual('2')

        expect(utils.m_num_Convert_txt(2)).toEqual('2')
    })
   
})