# Sprints de ExecuÃ§Ã£o â€” Vistoria de Frota

> Planejamento completo do desenvolvimento do app, da ideaÃ§Ã£o atÃ© a entrega final.
> Cada sprint tem duraÃ§Ã£o estimada, entregÃ¡veis claros e critÃ©rios de aceite.

---

## VisÃ£o Geral do Roadmap

```
FASE 1 â€” FUNDAÃ‡ÃƒO          â–ˆâ–ˆâ–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘  Sprint 0â€“1
FASE 2 â€” MVP               â–ˆâ–ˆâ–ˆâ–ˆâ–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘  Sprint 2â€“4
FASE 3 â€” MÃDIA & EVIDÃŠNCIA â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘  Sprint 5â€“6
FASE 4 â€” PAINEL & GESTÃƒO   â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘  Sprint 7â€“8
FASE 5 â€” DADOS & BACKUP    â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–‘â–‘â–‘â–‘  Sprint 9â€“10
FASE 6 â€” POLIMENTO & QA    â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  Sprint 11â€“12
```

---

## FASE 1 â€” FUNDAÃ‡ÃƒO

### Sprint 0 Â· IdeaÃ§Ã£o e Planejamento

**Objetivo:** Definir escopo, requisitos e arquitetura antes de escrever qualquer cÃ³digo.

| EntregÃ¡vel | DescriÃ§Ã£o |
|---|---|
| `dor.md` | Mapeamento das dores e fluxo operacional atual |
| `contexto.md` | Documento de contexto: objetivo, arquitetura, funcionalidades, pÃºblico |
| `sprint.md` | Este arquivo â€” roadmap completo de execuÃ§Ã£o |
| Wireframe mental | DefiniÃ§Ã£o das telas/seÃ§Ãµes do app (fluxo de navegaÃ§Ã£o) |

**CritÃ©rios de aceite:**
- [x] Dores do processo atual documentadas
- [x] Arquitetura monolÃ­tica HTML definida
- [x] Funcionalidades listadas e priorizadas
- [x] Sprints planejadas com entregÃ¡veis claros

---

### Sprint 1 Â· Esqueleto HTML + Sistema de NavegaÃ§Ã£o

**Objetivo:** Criar a estrutura base do arquivo HTML monolÃ­tico com navegaÃ§Ã£o entre seÃ§Ãµes (SPA-like).

**Tarefas tÃ©cnicas:**
1. Criar o arquivo `index.html` com estrutura semÃ¢ntica
2. Implementar sistema de **rotas por hash** (`#inicio`, `#vistoria`, `#painel`) â€” navegaÃ§Ã£o SPA sem recarregar a pÃ¡gina
3. Criar **layout responsivo** base com CSS embutido (mobile-first)
4. Implementar **barra de navegaÃ§Ã£o** inferior ou lateral
5. Criar **tela inicial** com botÃ£o "Nova Vistoria" e acesso ao painel

**EntregÃ¡veis:**
- Arquivo `index.html` funcional com navegaÃ§Ã£o entre 4 seÃ§Ãµes vazias
- CSS responsivo base (funciona em celular e desktop)
- Sem dependÃªncias externas

**CritÃ©rios de aceite:**
- [ ] Arquivo abre diretamente no navegador sem servidor
- [ ] NavegaÃ§Ã£o entre seÃ§Ãµes funciona via hash
- [ ] Layout se adapta a telas de 320px atÃ© 1920px
- [ ] Zero requisiÃ§Ãµes de rede (verificar no DevTools â†’ Network)

---

## FASE 2 â€” MVP (MÃ­nimo ViÃ¡vel)

### Sprint 2 Â· IdentificaÃ§Ã£o do VeÃ­culo + FormulÃ¡rio Base

**Objetivo:** Implementar a primeira etapa da vistoria â€” identificaÃ§Ã£o do Ã´nibus e do motorista.

**Tarefas tÃ©cnicas:**
1. Criar formulÃ¡rio de **identificaÃ§Ã£o do veÃ­culo**:
   - Campo: nÃºmero/prefixo do Ã´nibus (texto ou seleÃ§Ã£o)
   - Campo: nome do motorista
   - Campo: data/hora (preenchido automaticamente)
   - Campo: nome do vistoriador
2. Implementar **validaÃ§Ã£o de campos** obrigatÃ³rios
3. Criar **modelo de dados** em JavaScript (objeto da vistoria)
4. Implementar **persistÃªncia no localStorage** (salvar rascunho enquanto preenche)

**EntregÃ¡veis:**
- Tela de identificaÃ§Ã£o funcional e validada
- Dados persistem no localStorage (nÃ£o perdem ao recarregar)

**CritÃ©rios de aceite:**
- [ ] Todos os campos obrigatÃ³rios possuem validaÃ§Ã£o visual
- [ ] Dados sobrevivem ao recarregar a pÃ¡gina (F5)
- [ ] Data/hora Ã© capturada automaticamente
- [ ] Fluxo avanÃ§a para a prÃ³xima etapa ao confirmar

---

### Sprint 3 Â· Checklist de Vistoria

**Objetivo:** Implementar o checklist completo de inspeÃ§Ã£o do veÃ­culo.

**Tarefas tÃ©cnicas:**
1. Criar **componente de checklist** reutilizÃ¡vel
2. Implementar itens de inspeÃ§Ã£o com 3 estados: `OK` / `Defeito` / `N/A`
3. Itens do checklist:
   - Carroceria (batidas, riscos, amassados)
   - Pneus (estado geral, desgaste)
   - FarÃ³is (dianteiros e traseiros)
   - Setas (indicadores de direÃ§Ã£o)
   - Limpador de para-brisa (funcionamento + palhetas)
   - CondiÃ§Ãµes gerais (bancos, portas, janelas, piso)
4. Campo de **observaÃ§Ã£o por item** (texto livre, opcional)
5. **Indicador visual** â€” itens com defeito destacados em vermelho
6. **Contador de progresso** â€” "4 de 6 itens inspecionados"

**EntregÃ¡veis:**
- Checklist completo e interativo
- Feedback visual claro por status (cores: verde/vermelho/cinza)
- Dados do checklist vinculados ao objeto da vistoria

**CritÃ©rios de aceite:**
- [ ] Todos os 6 itens de inspeÃ§Ã£o estÃ£o presentes
- [ ] Cada item permite selecionar OK / Defeito / N/A
- [ ] Itens com defeito sÃ£o visualmente destacados
- [ ] ObservaÃ§Ãµes opcionais funcionam por item
- [ ] Progresso Ã© exibido ao usuÃ¡rio

---

### Sprint 4 Â· Instrumentos + Relato do Motorista + Encaminhamento

**Objetivo:** Completar o fluxo da vistoria com leitura de instrumentos, relato e decisÃ£o final.

**Tarefas tÃ©cnicas:**
1. **Leitura de instrumentos:**
   - Campo numÃ©rico para odÃ´metro (km)
   - Campo numÃ©rico para roleta (passageiros)
   - ValidaÃ§Ã£o: valores devem ser numÃ©ricos e positivos
2. **Relato do motorista:**
   - Campo de texto livre (textarea)
   - Placeholder orientativo: "Descreva defeitos ou observaÃ§Ãµes..."
3. **DecisÃ£o de encaminhamento:**
   - BotÃ£o/toggle: **Liberar para operaÃ§Ã£o** ou **Encaminhar para oficina**
   - Se oficina â†’ campo obrigatÃ³rio de motivo
4. **Salvar vistoria completa** no IndexedDB
5. **Tela de confirmaÃ§Ã£o** â€” resumo da vistoria antes de finalizar

**EntregÃ¡veis:**
- Fluxo completo de vistoria funcional (identificaÃ§Ã£o â†’ checklist â†’ instrumentos â†’ decisÃ£o)
- Vistoria salva no IndexedDB com todos os dados
- Tela de resumo/confirmaÃ§Ã£o

**CritÃ©rios de aceite:**
- [ ] OdÃ´metro e roleta aceitam apenas nÃºmeros vÃ¡lidos
- [ ] Relato do motorista Ã© salvo corretamente
- [ ] DecisÃ£o liberar/oficina funciona com campo condicional
- [ ] Vistoria completa Ã© persistida no IndexedDB
- [ ] Tela de confirmaÃ§Ã£o exibe todos os dados antes de salvar
- [ ] âœ… **MVP funcional:** Ã© possÃ­vel realizar uma vistoria completa do inÃ­cio ao fim

---

## FASE 3 â€” MÃDIA E EVIDÃŠNCIA VISUAL

### Sprint 5 Â· Captura de VÃ­deo da Carroceria

**Objetivo:** Implementar gravaÃ§Ã£o de vÃ­deo usando a cÃ¢mera do dispositivo.

**Tarefas tÃ©cnicas:**
1. Implementar acesso Ã  cÃ¢mera via **`navigator.mediaDevices.getUserMedia()`**
2. Criar **interface de gravaÃ§Ã£o:**
   - Preview da cÃ¢mera (elemento `<video>`)
   - BotÃ£o iniciar/parar gravaÃ§Ã£o
   - Timer de duraÃ§Ã£o da gravaÃ§Ã£o
   - Indicador visual de "gravando" (ponto vermelho pulsante)
3. Gravar vÃ­deo usando **`MediaRecorder API`**
4. Armazenar vÃ­deo como **Blob no IndexedDB** vinculado Ã  vistoria
5. Implementar **preview do vÃ­deo gravado** antes de confirmar
6. Permitir **regravar** caso necessÃ¡rio
7. Tratar **permissÃµes negadas** (mensagem amigÃ¡vel se o usuÃ¡rio bloquear a cÃ¢mera)

**EntregÃ¡veis:**
- GravaÃ§Ã£o de vÃ­deo funcional via cÃ¢mera do dispositivo
- VÃ­deo armazenado localmente no IndexedDB
- Interface de gravaÃ§Ã£o intuitiva

**CritÃ©rios de aceite:**
- [ ] CÃ¢mera abre corretamente (traseira por padrÃ£o em mobile)
- [ ] GravaÃ§Ã£o inicia, mostra timer e para ao clicar
- [ ] VÃ­deo gravado pode ser assistido antes de confirmar
- [ ] VÃ­deo Ã© salvo como Blob no IndexedDB vinculado Ã  vistoria
- [ ] Mensagem de erro amigÃ¡vel se cÃ¢mera for negada
- [ ] Funciona em Chrome Android e Chrome Desktop

---

### Sprint 6 Â· Galeria de VÃ­deos e ReproduÃ§Ã£o

**Objetivo:** Permitir visualizar e reproduzir vÃ­deos anteriores vinculados a cada vistoria.

**Tarefas tÃ©cnicas:**
1. Criar **galeria de vÃ­deos** por veÃ­culo
2. Implementar **player de vÃ­deo** inline para reproduÃ§Ã£o dos blobs
3. Exibir **metadados** junto ao vÃ­deo (data, veÃ­culo, vistoriador)
4. Implementar **exclusÃ£o de vÃ­deos** antigos para liberar espaÃ§o
5. Exibir **uso de armazenamento** (estimativa do espaÃ§o usado no IndexedDB)

**EntregÃ¡veis:**
- Galeria de vÃ­deos navegÃ¡vel por veÃ­culo/data
- Player funcional para reproduÃ§Ã£o offline
- GestÃ£o bÃ¡sica de armazenamento

**CritÃ©rios de aceite:**
- [ ] VÃ­deos de vistorias anteriores podem ser reproduzidos
- [ ] Galeria organizada por data e veÃ­culo
- [ ] ExclusÃ£o de vÃ­deos funciona e libera espaÃ§o
- [ ] Indicador de uso de armazenamento visÃ­vel

---

## FASE 4 â€” PAINEL E GESTÃƒO

### Sprint 7 Â· Painel do Operador de TrÃ¡fego

**Objetivo:** Criar a tela de gestÃ£o com visÃ£o consolidada de todas as vistorias.

**Tarefas tÃ©cnicas:**
1. Criar **tabela/lista de vistorias** do dia com colunas:
   - Prefixo do Ã´nibus
   - Motorista
   - Vistoriador
   - HorÃ¡rio
   - Status (Liberado / Oficina)
   - Quantidade de defeitos
   - OdÃ´metro / Roleta
2. Implementar **filtros:**
   - Por status (Liberado / Oficina / Todos)
   - Por data (seletor de data)
   - Por prefixo do veÃ­culo (busca)
3. Implementar **cards de resumo** no topo:
   - Total de vistorias do dia
   - Liberados vs. encaminhados para oficina
   - Percentual de veÃ­culos com defeito
4. Implementar **visualizaÃ§Ã£o de detalhes** â€” clicar em uma vistoria abre o resumo completo

**EntregÃ¡veis:**
- Painel funcional com tabela, filtros e cards de resumo
- Drill-down para detalhes de cada vistoria

**CritÃ©rios de aceite:**
- [ ] Tabela exibe todas as vistorias salvas no IndexedDB
- [ ] Filtros por status, data e veÃ­culo funcionam
- [ ] Cards de resumo atualizam em tempo real
- [ ] Clique na vistoria abre detalhes completos (incluindo link para vÃ­deo)
- [ ] Responsivo â€” funciona no computador da sala de trÃ¡fego e em tablet

---

### Sprint 8 Â· HistÃ³rico por VeÃ­culo

**Objetivo:** Permitir consultar o histÃ³rico completo de vistorias de um veÃ­culo especÃ­fico.

**Tarefas tÃ©cnicas:**
1. Criar **tela de histÃ³rico** por prefixo do veÃ­culo
2. Exibir **timeline** de vistorias (mais recente primeiro)
3. Comparar **odÃ´metro entre vistorias** (km rodados no perÃ­odo)
4. Listar **defeitos recorrentes** por veÃ­culo
5. Acesso rÃ¡pido aos **vÃ­deos histÃ³ricos** do veÃ­culo

**EntregÃ¡veis:**
- Tela de histÃ³rico por veÃ­culo com timeline
- MÃ©tricas comparativas entre vistorias
- Acesso a vÃ­deos anteriores

**CritÃ©rios de aceite:**
- [ ] Busca por prefixo retorna histÃ³rico completo
- [ ] Timeline ordenada cronologicamente
- [ ] DiferenÃ§a de km entre vistorias Ã© calculada
- [ ] Defeitos recorrentes sÃ£o identificados
- [ ] VÃ­deos histÃ³ricos acessÃ­veis pela timeline

---

## FASE 5 â€” DADOS E BACKUP

### Sprint 9 Â· ExportaÃ§Ã£o de Dados

**Objetivo:** Permitir exportar os dados das vistorias para backup externo.

**Tarefas tÃ©cnicas:**
1. Implementar **exportaÃ§Ã£o JSON** (dados estruturados completos)
2. Implementar **exportaÃ§Ã£o CSV** (compatÃ­vel com Excel/planilhas)
3. Usar **`URL.createObjectURL()` + `<a download>`** para gerar download sem servidor
4. OpÃ§Ãµes de exportaÃ§Ã£o:
   - Exportar todas as vistorias
   - Exportar por perÃ­odo (data inÃ­cio / data fim)
   - Exportar por veÃ­culo especÃ­fico
5. Incluir **metadados** no arquivo exportado (data da exportaÃ§Ã£o, versÃ£o do app)

**EntregÃ¡veis:**
- BotÃ£o de exportaÃ§Ã£o JSON e CSV funcional
- Filtros de exportaÃ§Ã£o por perÃ­odo e veÃ­culo
- Download automÃ¡tico do arquivo gerado

**CritÃ©rios de aceite:**
- [ ] JSON exportado contÃ©m todos os dados da vistoria
- [ ] CSV abre corretamente no Excel com colunas separadas
- [ ] Filtros de perÃ­odo e veÃ­culo funcionam na exportaÃ§Ã£o
- [ ] Download funciona offline (sem requisiÃ§Ã£o de rede)

---

### Sprint 10 Â· ImportaÃ§Ã£o e RestauraÃ§Ã£o de Dados

**Objetivo:** Permitir importar dados de backup para restaurar ou transferir entre dispositivos.

**Tarefas tÃ©cnicas:**
1. Implementar **importaÃ§Ã£o de JSON** via `<input type="file">`
2. **Validar** estrutura do arquivo antes de importar
3. EstratÃ©gia de conflito:
   - Mesclar (manter existentes + adicionar novos)
   - Substituir (apagar tudo e importar)
4. **Barra de progresso** para importaÃ§Ãµes grandes
5. **RelatÃ³rio de importaÃ§Ã£o** â€” quantos registros importados/ignorados/erros
6. Implementar **limpeza de dados** â€” botÃ£o para apagar todos os dados (com confirmaÃ§Ã£o dupla)

**EntregÃ¡veis:**
- ImportaÃ§Ã£o de JSON funcional com validaÃ§Ã£o
- EstratÃ©gias de merge/replace implementadas
- Limpeza total de dados com confirmaÃ§Ã£o

**CritÃ©rios de aceite:**
- [ ] Arquivo JSON vÃ¡lido Ã© importado corretamente
- [ ] Arquivo invÃ¡lido exibe mensagem de erro clara
- [ ] Mesclar nÃ£o duplica registros existentes
- [ ] Substituir apaga dados anteriores antes de importar
- [ ] Limpeza total exige confirmaÃ§Ã£o dupla antes de executar

---

## FASE 6 â€” POLIMENTO E QA

### Sprint 11 Â· UI/UX, Acessibilidade e Performance

**Objetivo:** Polir a interface, melhorar a experiÃªncia do usuÃ¡rio e garantir performance.

**Tarefas tÃ©cnicas:**
1. **Design visual refinado:**
   - Paleta de cores profissional (tema da empresa/transporte)
   - Ãcones SVG inline (sem fontes de Ã­cones externas)
   - Tipografia legÃ­vel em ambientes de garagem (tamanhos maiores, contraste alto)
2. **UX de garagem:**
   - BotÃµes grandes (uso com luvas ou mÃ£os sujas)
   - Feedback tÃ¡til/visual a cada aÃ§Ã£o (animaÃ§Ãµes sutis)
   - Fluxo linear claro (passo 1 â†’ 2 â†’ 3 â†’ finalizar)
3. **Acessibilidade:**
   - Atributos `aria-label` nos elementos interativos
   - NavegaÃ§Ã£o por teclado funcional
   - Contraste WCAG AA em todos os textos
4. **Performance:**
   - Otimizar queries ao IndexedDB (Ã­ndices por data e veÃ­culo)
   - Lazy load de vÃ­deos na galeria
   - Testar com 500+ vistorias armazenadas sem travamento
5. **Tema claro/escuro** â€” toggle ou detecÃ§Ã£o automÃ¡tica via `prefers-color-scheme`

**EntregÃ¡veis:**
- Interface polida e profissional
- Acessibilidade WCAG AA
- Performance testada com volume realista de dados

**CritÃ©rios de aceite:**
- [ ] App usÃ¡vel com uma mÃ£o em tela de celular
- [ ] Contraste atende WCAG AA
- [ ] NavegaÃ§Ã£o por teclado funciona em todas as telas
- [ ] Carregamento do painel com 500+ vistorias em < 2 segundos
- [ ] Tema claro e escuro funcionais

---

### Sprint 12 Â· Testes, ValidaÃ§Ã£o Final e Entrega

**Objetivo:** Testar exaustivamente, corrigir bugs e entregar o app pronto para uso.

**Tarefas tÃ©cnicas:**
1. **Testes de compatibilidade de navegadores:**
   - Chrome Android (principal)
   - Chrome Desktop
   - Edge Desktop
   - Firefox Desktop
   - Safari iOS (se aplicÃ¡vel)
2. **Testes de cenÃ¡rios reais:**
   - Vistoria completa do inÃ­cio ao fim
   - GravaÃ§Ã£o de vÃ­deo + salvamento
   - Consulta no painel do operador
   - ExportaÃ§Ã£o â†’ importaÃ§Ã£o em outro dispositivo
   - Uso com 50+ vistorias no mesmo dia
3. **Testes de edge cases:**
   - Fechar o app no meio da vistoria (rascunho salvo?)
   - Negar permissÃ£o da cÃ¢mera
   - IndexedDB cheio (tratar erro de quota)
   - Arquivo HTML corrompido (self-healing?)
4. **CorreÃ§Ã£o de bugs** encontrados
5. **DocumentaÃ§Ã£o de uso** â€” guia rÃ¡pido embutido no prÃ³prio app (tela de ajuda)
6. **Versionamento** â€” incluir nÃºmero de versÃ£o e data de build no rodapÃ© do app

**EntregÃ¡veis:**
- App 100% testado e funcional
- Guia de uso embutido
- VersÃ£o final do arquivo `index.html`

**CritÃ©rios de aceite:**
- [ ] Zero bugs crÃ­ticos ou bloqueantes
- [ ] Funciona em todos os navegadores listados
- [ ] Todos os cenÃ¡rios reais passam sem erro
- [ ] Guia de ajuda acessÃ­vel dentro do app
- [ ] VersÃ£o e data visÃ­veis no rodapÃ©
- [ ] âœ… **APP 100% CONCLUÃDO â€” Pronto para distribuiÃ§Ã£o**

---

## Resumo das Sprints

| Sprint | Fase | TÃ­tulo | Status |
|--------|------|--------|--------|
| 0 | FundaÃ§Ã£o | IdeaÃ§Ã£o e Planejamento | âœ… ConcluÃ­da |
| 1 | FundaÃ§Ã£o | Esqueleto HTML + NavegaÃ§Ã£o | âœ… ConcluÃ­da |
| 2 | MVP | IdentificaÃ§Ã£o do VeÃ­culo | âœ… ConcluÃ­da |
| 3 | MVP | Checklist de Vistoria | âœ… ConcluÃ­da |
| 4 | MVP | Instrumentos + Relato + Encaminhamento | âœ… ConcluÃ­da |
| 5 | MÃ­dia | Captura de VÃ­deo | âœ… ConcluÃ­da |
| 6 | MÃ­dia | Galeria de VÃ­deos | âœ… ConcluÃ­da |
| 7 | Painel | Painel do Operador de TrÃ¡fego | âœ… ConcluÃ­da |
| 8 | Painel | HistÃ³rico por VeÃ­culo | âœ… ConcluÃ­da |
| 9 | Dados | ExportaÃ§Ã£o de Dados | âœ… ConcluÃ­da |
| 10 | Dados | ImportaÃ§Ã£o e RestauraÃ§Ã£o | âœ… ConcluÃ­da |
| 11 | Polimento | UI/UX, Acessibilidade e Performance | âœ… ConcluÃ­da |
| 12 | Polimento | Testes, ValidaÃ§Ã£o Final e Entrega | âœ… ConcluÃ­da |

---

> **Status Geral:** ðŸŽ‰ **APP 100% CONCLUÃDO E PRONTO PARA USO OFFLINE** (todas as sprints entregues no arquivo Ãºnico `index.html`).
