function abrir_reclamacao(cpf_user, matricula_user, nome_user){
    var dados = {cpf: cpf_user, matricula: matricula_user, nome: nome_user};

    writeFile(cpf_user, dados);

    window.open(`reclamacao.html?cpf=${cpf_user}`, "_self");
}

function abrir_admin(cpf_user, matricula_user, nome_user){


    window.open(`admin.html?cpf=${cpf_user}`, "_self"); 
}

 function digito_2(cpf_user_int, aux, cont, resultado) {
        // essa funcao calcula o segundo digito verificador
        if(aux == 10) {
          return resultado;
        }
        else {
          resultado += (cpf_user_int % 10) * cont;
          return digito_2(Math.trunc(cpf_user_int / 10), aux + 1, cont + 1, resultado);
        }
      }
    function digito_1(cpf_user_int, aux, cont, resultado) {
        // essa funcao calcula o primeiro digito verificador
        if(aux == 9) {
            return resultado;
        }
        else {
            resultado += (cpf_user_int % 10) * cont;
            return digito_1(Math.trunc(cpf_user_int / 10), aux + 1, cont + 1, resultado);
        }
      }

    function user() {
      // declaracao das variaveis que peguei no formulario do usuario
      var nome_user = document.getElementById("nome_usuario").value;
      var matricula_user = document.getElementById("matricula").value;
      var cpf_user = document.getElementById("cpf").value;

      // aqui eu transformo os dados que peguei no campo do cpf em inteiro
      var cpf_user_int = parseInt(cpf_user);

      // aqui eu declaro as duas variaveis que estão relacionadas ao digito verificador um e digito verificador dois, que são calculados nas funcoes digito_1 e digito_2
      var digito_ver_1 = parseInt(digito_1(Math.trunc(cpf_user_int / 100), 0, 2, 0));
      var digito_ver_2 = parseInt(digito_2(Math.trunc(cpf_user_int / 10), 0, 2, 0))

      // as condicoes abaixo verificam se o digito verificador 1 e 2 calculados nas funcoes correspondem ao que o usuario digitou
      if(11 - (digito_ver_1 % 11) > 9) {
        if(Math.trunc(cpf_user_int / 10) % 10 == 0) {
          if(11 - (digito_ver_2 % 11) > 9) {
            if(cpf_user_int % 10 == 0) {
              // vai pra proxima pagina
              
              abrir_reclamacao(cpf_user, matricula_user, nome_user);
            }
            else {
              // errou o segundo digito verificador
              alert("Cpf inválido.");
            }
          }
          else {
            if(11 - (digito_ver_2 % 11) == cpf_user_int % 10) {
              // vai pra proxima pagina
              abrir_reclamacao(cpf_user, matricula_user, nome_user);
            }
            else {
              // errou o segundo digito verificador
              alert("Cpf inválido.");
            }
          }
        }
        else {
          // errou o primeiro digito verificador
          alert("Cpf inválido.");
        }
      }
      else {
        if(11 - (digito_ver_1 % 11) == Math.trunc(cpf_user_int / 10) % 10) {
          if(11 - (digito_ver_2 % 11) > 9) {
            if(cpf_user_int % 10 == 0) {
              // vai pra proxima pagina
              abrir_reclamacao(cpf_user, matricula_user, nome_user);
            }
            else {
              // errou o segundo digito verificador
              alert("Cpf inválido.");
            }
          }
          else {
            if(11 - (digito_ver_2 % 11) == cpf_user_int % 10) {
              // vai pra proxima pagina

              abrir_reclamacao(cpf_user, matricula_user, nome_user);
            }
            else {
              // errou o segundo digito verificador
              alert("Cpf inválido.");
            }
          }
        }
        else {
          // errou o primeiro digito verificador
          alert("Cpf inválido.");
        }
      }
    }

    function admin() {
      // declaracao das variaveis que peguei no formulario do administrador
      var nome_administrador = document.getElementById("login_admin").value;
      var senha_administrador = document.getElementById("senha_admin").value;

      // aqui eu verifico se o que o administrador preencheu corresponde com o login e a senha corretos
      if(nome_administrador != "Administrador" || senha_administrador != 175) {
        alert("Login ou senha inválido(s)");
      }
      else {
        // vai pra proxima pagina
        abrir_admin();
      }
    }