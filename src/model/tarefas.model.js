const tarefas = [
  { id: 1, descricao: "Estudar química", concluida: false },
  { id: 2, descricao: "Criar páginas no Figma", concluida: true }
];
function encontrarIndiceTarefa(id) {
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      return i;
    }
  }
  return -1;
}

/**
 * Gera um novo id para a próxima tarefa
 * Se o array estiver vazio, começa com 1
 * Caso contrário, pega o maior id existente e soma 1
 */
function gerarNovoId() {
  if (tarefas.length === 0) return 1;

  let maiorId = 0;
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id > maiorId) {
      maiorId = tarefas[i].id;
    }
  }

  return maiorId + 1;
}

/**
 * Retorna todas as tarefas cadastradas
 */
function obterTodasTarefas() {
  return tarefas;
}

/**
 * Procura uma tarefa específica pelo id
 * Retorna a tarefa encontrada ou null
 */
function obterTarefaPorId(id) {
  const indice = encontrarIndiceTarefa(id);

  if (indice === -1) return null;

  return tarefas[indice];
}

/**
 * Cria uma nova tarefa
 * A descrição é limpa com trim() para remover espaços extras
 * Toda nova tarefa começa com concluida = false
 */
function criarNovaTarefa(descricao) {
  const novaTarefa = {
    id: gerarNovoId(),
    descricao: descricao.trim(),
    concluida: false
  };

  tarefas.push(novaTarefa);
  return novaTarefa;
}

/**
 * Atualiza uma tarefa existente
 * Pode atualizar:
 * - a descrição
 * - o status de conclusão
 *
 * Retorna:
 * - a tarefa atualizada, se encontrar
 * - null, se não encontrar
 */
function atualizarTarefa(id, novaDescricao, novoStatus) {
  const indice = encontrarIndiceTarefa(id);

  if (indice === -1) return null;

  const tarefa = tarefas[indice];

  // Atualiza a descrição apenas se ela foi enviada
  if (novaDescricao !== undefined) {
    tarefa.descricao = novaDescricao.trim();
  }

  // Atualiza o status apenas se ele foi enviado
  if (novoStatus !== undefined) {
    tarefa.concluida = novoStatus;
  }

  return tarefa;
}

/**
 * Exclui uma tarefa pelo id
 * Retorna:
 * - a tarefa removida, se encontrar
 * - null, se não encontrar
 */
function excluirTarefa(id) {
  const indice = encontrarIndiceTarefa(id);

  if (indice === -1) return null;

  const tarefaRemovida = tarefas[indice];

  // Remove 1 elemento do array na posição encontrada
  tarefas.splice(indice, 1);

  return tarefaRemovida;
}