# ANÁLISE DE PROBLEMAS - HOME FEST & EVENTOS

## Data: 03/12/2025

## 1. ESTRUTURA DO PROJETO

- **Tecnologia**: React + TypeScript + Vite + TailwindCSS
- **Roteamento**: Baseado em pathname (sem React Router)
- **Modal**: Sistema de contexto customizado (useModal)

## 2. PROBLEMAS IDENTIFICADOS

### 2.1 PROBLEMA CRÍTICO: ModalProvider não está envolvendo as páginas de serviço

**Localização**: `src/App.tsx`

**Descrição do problema**:
- O `ModalProvider` está envolvendo apenas a **home page** (linha 473)
- As páginas dedicadas de serviço (BuffetInfantilPage, ChurrascoPage, etc.) são renderizadas **FORA** do ModalProvider
- Quando essas páginas tentam usar o hook `useModal`, ele retorna `undefined` porque não há contexto disponível
- Isso causa o travamento/erro: "useModal must be used within a ModalProvider"

**Páginas afetadas**:
- `/buffet-infantil-bh` → BuffetInfantilPage
- `/buffet-churrasco-bh` → ChurrascoPage
- `/buffet-almoco-jantar-bh` → AlmocoJantarPage
- `/festa-escolar-bh` → FestaEscolarPage
- `/festa-15-anos-bh` → QuinzeAnosPage
- `/aniversario-adulto-bh` → AniversarioAdultoPage
- `/buffet-casamento-bh` → CasamentoPage
- `/confraternizacao-corporativa-bh` → ConfraternizacaoCorporativaPage

### 2.2 Páginas de serviço não possuem botões para abrir cardápio

**Análise**: 
- Verifiquei BuffetInfantilPage e não há nenhuma chamada para `openModal`
- As páginas mostram o conteúdo estático, mas não têm interação com o modal de cardápio
- Isso pode ser intencional (páginas informativas) ou um recurso faltante

### 2.3 Scroll pode travar após fechar modal

**Localização**: `src/hooks/useModal.tsx` (linhas 29 e 36)

**Análise**:
- O código já tem proteção para scroll (`document.body.style.overflow`)
- Mas se houver erro antes de `closeModal()` ser chamado, o scroll fica travado
- Precisa adicionar cleanup no useEffect

## 3. SOLUÇÕES NECESSÁRIAS

### 3.1 SOLUÇÃO PRINCIPAL: Envolver todo o App com ModalProvider

**Ação**: Mover o `ModalProvider` para envolver TODAS as rotas, não apenas a home

**Implementação**:
```tsx
// Envolver todo o retorno do App com ModalProvider
return (
  <ModalProvider>
    {/* todas as rotas aqui */}
  </ModalProvider>
);
```

### 3.2 Adicionar botões de cardápio nas páginas de serviço (se necessário)

**Decisão**: Verificar com o usuário se as páginas dedicadas devem ter botão para abrir cardápio

### 3.3 Adicionar proteção de scroll no Modal

**Ação**: Garantir que o scroll seja restaurado mesmo em caso de erro

### 3.4 Adicionar mensagens amigáveis

**Ação**: 
- Se cardapioId não existir no mapeamento → mostrar mensagem amigável
- Se serviço não tiver cardápio → mostrar "Cardápio em atualização"

## 4. MAPEAMENTO DE CARDÁPIOS

**Cardápios disponíveis** (src/components/Modal.tsx):
- `infantil` → CARDAPIO_COQUETEL_ATUALIZADO
- `15anos` → CARDAPIO_COQUETEL_ATUALIZADO
- `casamento` → CARDAPIO_COQUETEL_ATUALIZADO
- `churrasco` → CARDAPIO_CHURRASCO
- `boteco` → CARDAPIO_BOTECO
- `empresas` → CARDAPIO_COQUETEL_BASE
- `escolar` → CARDAPIO_ESCOLAR
- `coquetel` → CARDAPIO_COQUETEL_BASE
- `brunch` → CARDAPIO_BRUNCH
- `almoco-jantar` → CARDAPIO_ALMOCO_JANTAR

## 5. PRÓXIMOS PASSOS

1. ✅ Identificar problema principal (ModalProvider)
2. ⏳ Corrigir estrutura do App.tsx
3. ⏳ Adicionar proteções de erro
4. ⏳ Testar todas as rotas
5. ⏳ Verificar scroll após modal
