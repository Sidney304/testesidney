import  { browser, element, by} from 'protractor';

export class SigninPage {
    acessarHome(){
        return browser.get('');
    }

    verificarUrl(){
        return browser.getCurrentUrl();
    }

   /* validarLogin(){

        element(by.css('input[formControlName="userName"]')).sendKeys("flavio");
        element(by.css('input[formControlName="password"]')).sendKeys("123");
        element(by.className('btn btn-primary btn-block')).click();
    }*/

    pegarInput(formControlName, valor){
        return element(by.css(`input[formControlName="${formControlName}"]`)).sendKeys(valor);
    }

    pegarBotaoLogin() {
        return element(by.buttonText('login'));
   }

}