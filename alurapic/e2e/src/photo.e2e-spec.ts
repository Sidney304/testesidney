import { PhotoFormPage } from './pageObject/photos/photo-form.po';
import { PhotoListPage } from './pageObject/photos/photo-list.po';


describe('Testando funcionalidade de Photos' , () => {
let photoFormPage : PhotoFormPage;
let photoListPage : PhotoListPage;
let comentario =  'Photo Legal!';
let comentarioInserido = 'Sorte';

beforeEach(() => {
    photoFormPage = new PhotoFormPage();
    photoListPage = new PhotoListPage();
});

    it('Deve navegar para /p/add uploadPage' , () => {
        photoFormPage.navegarParaPhotoForm();
    })

    it('Deve Cadastrar imagem', () => {
        photoFormPage.carregarImagem();
        photoFormPage.comentarImagem(comentario);

        photoFormPage.pegarBotaoUpload().click();
    })

    it('Busca de imagem', ()=> {
        photoListPage.navegarParaPhotoList();
        photoListPage.buscarImagem(comentario);
        photoListPage.pegarImagem();

    })

    it('Deve apagar a imagem', () => {
        photoListPage.pegarImagem();
        photoListPage.apagarImagem().click();
   

    })

    it('Deve inserir comentario na imagem', () => {
        photoListPage.navegarParaPhotoList();
        photoListPage.pegarImagem();
        photoFormPage.inserirComentario(comentarioInserido);
        photoFormPage.pegarBotaoInserirComentario().click();

    })

})
