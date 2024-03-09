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
    let x: HTMLInputElement
    let calculator: Calculator;
    let container:HTMLDivElement;
    
    beforeEach(():void  => {
        container = document.createElement('div');
        document.body.appendChild(container);
    
        calculator = new Calculator({props: obj, target: container});
        x = screen.getByRole('textbox') as HTMLInputElement;
    })
    afterEach(() => {
        calculator.$destroy();
        document.body.removeChild(container);
    });

    it('should render the calculator', ():void =>{
    })
    
        it('should render title correctly', (): void =>{
            screen.getByText('Calculator')
        })
    
        it('should render numbers of the calculator', (): void => {
            obj.arr_arr.forEach((arr) => {
                if(arr.arr_num){
                    arr.arr_num.forEach((num) =>{
                        screen.getByText(num)
                    })
                } 
            })
        })

        
            it('should render 4 rows', ():void => {
                const arr_arr_num = screen.getAllByRole('row')
                expect(arr_arr_num.length).toBe(4)
            })
            it('should render operations', (): void => {
            
                obj.arr_arr.forEach((arr)=>{
                    if(arr.arr_txt){
                        arr.arr_txt.forEach((txt) =>{
                            screen.getByText(txt)
                        })
                    } 
                })
            
            }) 
            
                it('should render equal sign', (): void => {
                    screen.getByText('=')
                })
                
                it('should render input', (): void => {
                    screen.getByRole('textbox')
                })
            
                it('should show user input after clicking a number', async ():Promise<void> => {
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
                it('render should depend on functions', async ():Promise<void> =>{
            
                    // const input = screen.getByRole('textbox') as HTMLInputElement
                    
                    expect(calculator.num_handleNum_txt(1)).toEqual('1')
                   
                })
            
            
                it('should concat operators with numbers when clicking operations and show it in the input', async (): Promise<void> => {
                    const one = screen.getByText('1')
                    const plus = screen.getByText('+')
                    
                    await fireEvent.click(one)
                    await fireEvent.click(plus)
                    await fireEvent.click(one)
            
                    await waitFor(() =>{
                        expect(x.value).toBe('1+1')
                    })
                })
})
    

    
    
