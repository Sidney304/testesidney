
import {browser, element, by} from 'protractor';

export class SignupPage {

    navegarparaSignup(){

        return browser.get('/#/home/signup');
    }

    registraUsuario(formControlName, valor){
        return element(by.formControlName(formControlName)).sendKeys(valor)

    }

    pegarBotaoRegister(){

        return element(by.buttonText('Register'));
    }
}