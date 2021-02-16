import { SigninPage } from './pageObject/home/signin.po'
import { SignupPage} from './pageObject/home/signinup.po'

describe('Testando tela home', () => {
    let signinPage: SigninPage;
    let signupPage: SignupPage;

    let informacoesUsuario = [
        {nome: 'email', valor: 'sidneytest2@email.com' },
        {nome: 'fullName', valor: 'Sidney Testing' },
        {nome: 'userName', valor: 'sidneyteste2' },
        {nome: 'password', valor: '87654321' }
    ]

    beforeEach(() =>{
        signinPage = new SigninPage();
        signupPage = new SignupPage();
    });


    // it('Deve navegar para Signup', () => {
    //     signupPage.navegarparaSignup();

    // })

    // it('Deve cadastrar usuario', () => {
    //     informacoesUsuario.forEach(usuario => {
    //         signupPage.registraUsuario(usuario.nome, usuario.valor)

    //     })
    //     expect(signupPage.pegarBotaoRegister().click());
    // })

        it('Navegar para home' , () =>{
            signinPage.acessarHome();
        })

    it('Deve verificar a url' , () => {
        expect(signinPage.verificarUrl()).toBe('http://localhost:4200/#/home');
    })

    it('Deve fazer login', () =>{
        expect(signinPage.pegarInput('userName' , 'flavio'));
        expect(signinPage.pegarInput('password', '123'));
        expect(signinPage.pegarBotaoLogin().click());
        
    
    })

})