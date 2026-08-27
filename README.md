# Plataforma Educacional — V1

## Conteúdo
- `index.html` — plataforma completa em um único arquivo.
- `iniciar-quiosque.sh` — exemplo de inicialização com Chromium/Chrome em modo quiosque.
- `iniciar-firefox.sh` — exemplo de inicialização com Firefox em tela cheia.
- `README.md` — instruções.

## Teste rápido
Abra `index.html` no navegador.

## Linux + Chromium/Chrome
Torne o script executável:
`chmod +x iniciar-quiosque.sh`

Depois:
`./iniciar-quiosque.sh`

O script usa `--kiosk` e aponta para o arquivo local.

## Observação de segurança
O JavaScript consegue controlar a interface da página, mas NÃO consegue impedir sozinho que o usuário saia do navegador, use atalhos do sistema ou abra outros programas. Para uma aplicação de avaliação realmente bloqueada, combine esta página com o modo quiosque do navegador e, se necessário, políticas do Linux/conta de usuário/Epoptes.

## Personalização
No `index.html`, procure o objeto `pages` no JavaScript. Ali estão as três páginas:
- `material`
- `atividade`
- `recursos`

A primeira versão já possui:
- exatamente três guias;
- botão de nova guia desabilitado;
- aparência semelhante a navegador;
- barra de endereço apenas visual;
- navegação interna;
- atividade com questões;
- salvamento local das respostas;
- calculadora;
- anotações;
- bloqueio de alguns atalhos e menu de contexto.
