import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHightlight]'
})
export class BasicHighLight implements OnInit{

    constructor(private elementRef:ElementRef){
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}