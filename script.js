const avanca = document.querySelectorAll('.btn-próxima');

avanca.forEach(button => {
  button.addEventListener('click',function(){
    const atual = document.equerySelector(".ativo");
    const proximo passo = 'passo-' + this.this .getAttribute('data-proximo');

    atual.classList.remove("ativo);
    document.getElementById(proximoPasso).classList.add("ativo");
  }) 
})
