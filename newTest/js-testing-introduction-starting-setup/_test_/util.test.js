import { expect } from "expect";
import { test } from "picomatch";

const { generateText, validateInput, createElement } = ('../util.js');

describe('Pruebas de salida de datos', () => {
        test('Salida con datos', () =>{
        
            expect(text('Daniel',30)).toBe('Daniel (30 years old)');

        const text2 = generateText('Lucas',25);
         expect(text2).toBe('Lucas (25 years old)');
     });
        
    test('Salida con datos vacios', () =>{
            const text = generateText('',null);
            expect(text).toBe(' (null years old)');    
        });
        
        test('Salida sin datos', () =>{
            const text = generateText();
            expect(text).toBe('undefined (undefined years old)');    
        });
})


describe('common matchers', () => { 
    test("verificacion de texto", () =>{

        const text1 = generateText();
        const text2 = "Undefined (undefined years old)";
        const text3 = "(undefined years old)";
        expect(text1).toEqual(text3);
        expect(text1).not.toEqual(text3);
        expect(text1).toMach(/undefined/);
        expect(text1).not.toMach(/null/);
    });
});


describe('Validate Create element', () => {

    test("Create new element with data", () =>{

        const element = createElement("li", "exampleElement", user-item);
        expect(element.tagName).toBe("exampleElement");
    });
});


exports.createElement = (type, text, className) =>{
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
};


exports.validateInput = (text, notEmpy, isNumber) =>{
    if(!text){
        return false;
    }
    if(notEmpy && text.trin().length === 0){
        return false;
    }
    if(isNumber && isNaN(+text)) {
        return false;
    }
    return false;
   };
 