import {
    Component
} from '@angular/core';



@Component({
    selector     : 'ng2-aside',
    template     : `
            <ng-content select=".ng2-aside-menu" class="ng2-aside-menu"></ng-content>
            <ng-content select=".ng2-aside-content" class="ng2-aside-content"></ng-content>
       `,
    styles       : [`
body{
    overflow-x: hidden;
}

.aside-menu{
    background-color: #28374f;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    min-height: 100%;
    max-height: 100%;
    width: 275px;
    display: block;
}

.open{
    display: block;
}


.aside-menu-content{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
    -webkit-transform: none;
    transform: none;
    z-index: 1;
}
.aside-menu-animate{
    -webkit-transition: -webkit-transform 400ms ease;
    transition: transform 400ms ease;
}

.aside-back-drop{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background: #000000;
    opacity: 0;
    -webkit-transition: opacity .15s linear;
    -o-transition: opacity .15s linear;
    transition: opacity .15s linear;
}

.aside-back-drop.in{
    opacity: .1;
}`]
})

export class AsideComponent {

}


