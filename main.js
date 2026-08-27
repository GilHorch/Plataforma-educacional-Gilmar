
    const pages = {
      material: `
<div class="page">
 <div class="hero">
    <h1>📚 Material de Estudo</h1>
    <p>Bem-vindo à plataforma. Consulte somente os materiais disponibilizados pelo professor.</p>
</div>

<div class="grid">
    <div class="card">
        <h3>📘 Conceitos principais</h3>
        <p>Espaço destinado ao texto, conceitos e explicações da aula.</p>
        
        <button class="primary" onclick="showText()">Abrir conteúdo</button>

        <a href="https://cursos.alura.com.br/loginForm?urlAfterLogin=%5BaHR0cHM6Ly9jdXJzb3MuYWx1cmEuY29tLmJyLw%5D">Plataforma alura</a>
    </div>


    <div class="card">
        <h3>🎬 Vídeo da aula</h3>
        <p>Área reservada para um vídeo selecionado pelo professor.</p>
        <button class="secondary" onclick="toast('Vídeo ainda não configurado.')">Assistir</button>
    </div>
  
    <div class="card">
        <h3>📄 Documento</h3>
        <p>Área para apostilas, roteiros ou outros documentos da atividade.</p>
        <button class="secondary" onclick="toast('Documento ainda não configurado.')">Abrir documento</button>
    </div>
 
    </div>


 <div id="textArea"></div>
 <footer>Material disponibilizado pelo professor • Plataforma Educacional v1.0</footer>
</div>`,
      atividade: `
<div class="page">
 <div class="hero"><h1>📝 Atividade</h1><p>Responda às questões abaixo. Suas respostas ficam armazenadas nesta sessão.</p></div>
 <div class="section">
  <div class="notice">Leia cada questão com atenção. Ao finalizar, clique em <b>Finalizar atividade</b>.</div>
  <div class="question"><b>1. Qual é a função principal desta plataforma?</b>
   <label class="option"><input type="radio" name="q1" value="a"> Permitir acesso irrestrito à internet</label>
   <label class="option"><input type="radio" name="q1" value="b"> Organizar materiais e atividades em um ambiente controlado</label>
   <label class="option"><input type="radio" name="q1" value="c"> Substituir o professor</label>
  </div>
  <div class="question"><b>2. Quantas guias estão disponíveis?</b>
   <label class="option"><input type="radio" name="q2" value="a"> Uma</label>
   <label class="option"><input type="radio" name="q2" value="b"> Três</label>
   <label class="option"><input type="radio" name="q2" value="c"> Quantas o estudante quiser</label>
  </div>
  <div class="question"><b>3. Escreva uma observação sobre a atividade:</b><input type="text" id="q3" placeholder="Digite sua resposta"></div>
  <button class="primary" onclick="finish()">Finalizar atividade</button>
  <button class="secondary" onclick="saveAnswers()">Salvar respostas</button>
 </div>
 <footer>As questões podem ser substituídas pelo conteúdo da sua aula.</footer>
</div>`,
      recursos: `
<div class="page">
 <div class="hero"><h1>🔧 Recursos</h1><p>Ferramentas disponibilizadas para a realização da atividade.</p></div>
 <div class="tools">
  <div class="section"><h2>🧮 Calculadora</h2><input type="number" id="n1" placeholder="Número 1"><input type="number" id="n2" placeholder="Número 2"><button class="primary" onclick="calc()">Somar</button><p id="result"></p></div>
  <div class="section"><h2>📋 Anotações</h2><input type="text" id="note" placeholder="Digite uma anotação"><button class="primary" onclick="saveNote()">Salvar anotação</button><p id="noteStatus"></p></div>
 </div>
 <div class="section"><h2>🌐 Recursos externos</h2><div class="notice">Nesta primeira versão, os recursos externos devem ser cadastrados pelo professor. Não há campo para digitar endereços de sites.</div></div>
 <footer>Somente ferramentas autorizadas pelo professor devem ser adicionadas.</footer>
</div>`
    };

    let current = 'material';
    let historyStack = ['material'], historyPos = 0;
    function render(page, push = true) {
      current = page;
      document.getElementById('content').innerHTML = pages[page];
      document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.page === page));
      if (push) {historyStack = historyStack.slice(0, historyPos + 1); historyStack.push(page); historyPos++;}
    }
    document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => render(t.dataset.page)));
    document.getElementById('back').onclick = () => {if (historyPos > 0) {historyPos--; render(historyStack[historyPos], false)} };
    document.getElementById('forward').onclick = () => {if (historyPos < historyStack.length - 1) {historyPos++; render(historyStack[historyPos], false)} };
    document.getElementById('reload').onclick = () => render(current, false);

    function toast(msg) {const e = document.getElementById('toast'); e.textContent = msg; e.style.display = 'block'; setTimeout(() => e.style.display = 'none', 2500)}
    function showText() {document.getElementById('textArea').innerHTML = '<div class="section"><h2>Conteúdo</h2><p>Este espaço pode receber o conteúdo da sua sequência didática, textos, imagens e instruções para os estudantes.</p><p><b>Dica:</b> substitua este conteúdo pelo material real da aula.</p></div>'}
    function saveAnswers() {localStorage.setItem('atividade_q3', document.getElementById('q3')?.value || ''); toast('Respostas salvas nesta sessão.')}
    function finish() {saveAnswers(); toast('Atividade finalizada nesta sessão.')}
    function calc() {const a = Number(document.getElementById('n1').value), b = Number(document.getElementById('n2').value); document.getElementById('result').textContent = `Resultado: ${a + b}`}
    function saveNote() {localStorage.setItem('note', document.getElementById('note').value); document.getElementById('noteStatus').textContent = 'Anotação salva.'}

    // Bloqueios de interface: atalhos comuns de abertura/navegação são interceptados.
    // O bloqueio real do sistema deve ser feito pelo navegador/ambiente Linux em modo quiosque.
    document.addEventListener('keydown', e => {
      const blocked = (e.ctrlKey && ['l', 't', 'n', 'w', 'r', 'u', 's', 'o'].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) ||
        e.key === 'F11';
      if (blocked) {e.preventDefault(); e.stopPropagation(); toast('Ação bloqueada no ambiente educacional.')}
    });
    document.addEventListener('contextmenu', e => e.preventDefault());
    window.addEventListener('beforeunload', e => {e.preventDefault(); e.returnValue = '';});
    render('material', false);
 