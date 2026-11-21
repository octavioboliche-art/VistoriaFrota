# Contexto do App â€” Vistoria de Frota

---

## 1. Objetivo

Digitalizar e padronizar o processo de vistoria diÃ¡ria dos Ã´nibus ao chegarem na garagem, substituindo fichas em papel e lanÃ§amentos manuais por um fluxo Ãºnico, rÃ¡pido e 100% offline. O app deve permitir que o vistoriador registre todas as condiÃ§Ãµes do veÃ­culo, capture evidÃªncias visuais (vÃ­deo da carroceria) e encaminhe o veÃ­culo para manutenÃ§Ã£o ou liberaÃ§Ã£o â€” tudo em um Ãºnico arquivo HTML que funciona sem internet.

---

## 2. Arquitetura

| Aspecto | DecisÃ£o |
|---|---|
| **Formato** | Arquivo HTML Ãºnico e monolÃ­tico (`index.html`) |
| **DependÃªncias externas** | Nenhuma â€” zero CDN, zero API, zero backend |
| **Conectividade** | 100% offline â€” funciona abrindo o arquivo direto no navegador |
| **CSS** | Embutido dentro de `<style>` no prÃ³prio HTML |
| **JavaScript** | Embutido dentro de `<script>` no prÃ³prio HTML |
| **Armazenamento** | `localStorage` / `IndexedDB` do navegador para persistir dados localmente |
| **MÃ­dia (vÃ­deo)** | Captura via `MediaDevices API` (cÃ¢mera do dispositivo), armazenada como Blob no IndexedDB |
| **ExportaÃ§Ã£o de dados** | GeraÃ§Ã£o de relatÃ³rio/resumo na tela + possibilidade de exportar JSON/CSV para backup local |

### Diagrama de Arquitetura

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚           ARQUIVO HTML ÃšNICO                â”‚
â”‚                                             â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚   HTML   â”‚  â”‚   CSS    â”‚  â”‚    JS     â”‚ â”‚
â”‚  â”‚ (layout) â”‚  â”‚ (estilo) â”‚  â”‚ (lÃ³gica)  â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                     â”‚                       â”‚
â”‚         â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”           â”‚
â”‚         â–¼                       â–¼           â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”      â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ localStorageâ”‚      â”‚   IndexedDB      â”‚ â”‚
â”‚  â”‚  (config,   â”‚      â”‚  (vistorias,     â”‚ â”‚
â”‚  â”‚   estado)   â”‚      â”‚   vÃ­deos/blobs)  â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜      â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                             â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚       MediaDevices API (cÃ¢mera)        â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## 3. Funcionalidades

### 3.1 IdentificaÃ§Ã£o do VeÃ­culo
- Selecionar ou digitar o **nÃºmero/prefixo do Ã´nibus**
- Registrar **motorista** responsÃ¡vel pela entrega

### 3.2 Checklist de Vistoria
InspeÃ§Ã£o sistemÃ¡tica dos seguintes itens com status (OK / Defeito / N/A):

- **Carroceria** â€” verificar batidas, riscos, amassados
- **Pneus** â€” estado geral, calibragem visual, desgaste
- **FarÃ³is** â€” dianteiros e traseiros, funcionamento
- **Setas** â€” indicadores de direÃ§Ã£o, funcionamento
- **Limpador de para-brisa** â€” funcionamento e estado das palhetas
- **CondiÃ§Ãµes gerais** â€” bancos, portas, janelas, piso interno

### 3.3 Relato do Motorista
- Campo de texto livre para o motorista informar **defeitos ou observaÃ§Ãµes**

### 3.4 Leitura de Instrumentos
- Registro do **odÃ´metro** (quilometragem atual)
- Registro da **roleta** (contagem de passageiros)

### 3.5 Captura de VÃ­deo
- GravaÃ§Ã£o de **vÃ­deo completo da carroceria** (360Â° ao redor do veÃ­culo)
- VÃ­deo armazenado localmente como arquivo de evidÃªncia visual da frota

### 3.6 DecisÃ£o de Encaminhamento
- Vistoriador decide: **Liberar para operaÃ§Ã£o** ou **Encaminhar para oficina**
- Se encaminhado para oficina, registrar motivo/defeitos encontrados

### 3.7 Painel do Operador de TrÃ¡fego
- Tela de resumo com **todas as vistorias realizadas**
- Exibe status de cada Ã´nibus: liberado / em oficina
- Lista de defeitos encontrados, quilometragem, contagem de roleta
- Possibilidade de filtrar e buscar por veÃ­culo

### 3.8 ExportaÃ§Ã£o e Backup
- Exportar dados em **JSON** ou **CSV** para backup externo
- Importar dados de backup anteriores

---

## 4. PÃºblico-Alvo

| Perfil | Papel no App |
|---|---|
| **Vistoriador** | UsuÃ¡rio principal â€” realiza a inspeÃ§Ã£o, preenche o checklist, grava o vÃ­deo e decide o encaminhamento do veÃ­culo |
| **Motorista** | Colaborador â€” relata defeitos ou observaÃ§Ãµes ao entregar o Ã´nibus na garagem |
| **Operador de TrÃ¡fego** | Gestor â€” visualiza o painel com o resumo de todas as vistorias do dia para tomada de decisÃ£o operacional |

---

## 5. Contexto Geral

O cenÃ¡rio Ã© o de uma **empresa de transporte pÃºblico urbano** (ou fretamento). Diariamente, ao final ou inÃ­cio de cada turno, os Ã´nibus retornam Ã  garagem e passam por uma vistoria de recebimento. Hoje esse processo pode ser feito em papel ou planilhas, gerando:

- **Perda de informaÃ§Ã£o** â€” fichas se perdem, dados nÃ£o sÃ£o centralizados
- **Falta de evidÃªncia visual** â€” nÃ£o hÃ¡ registro em vÃ­deo do estado do veÃ­culo
- **Demora no fluxo** â€” lanÃ§amento manual no sistema Ã© lento e propenso a erros
- **Dificuldade de rastreabilidade** â€” sem histÃ³rico confiÃ¡vel de cada veÃ­culo

O app resolve esses problemas oferecendo um **fluxo digital completo, padronizado e com evidÃªncia visual**, tudo rodando offline em qualquer dispositivo com navegador moderno (celular, tablet ou computador da garagem) â€” sem necessidade de infraestrutura de servidor, internet ou instalaÃ§Ã£o de software.

---

## 6. RestriÃ§Ãµes e Premissas

- O app **nÃ£o requer internet** em nenhum momento da operaÃ§Ã£o
- Os dados ficam **armazenados no navegador** do dispositivo utilizado
- O vÃ­deo Ã© capturado pela **cÃ¢mera nativa** do dispositivo via API do navegador
- O arquivo HTML pode ser **distribuÃ­do por pendrive, WhatsApp ou qualquer meio** â€” basta abrir no navegador
- CompatÃ­vel com **navegadores modernos** (Chrome, Edge, Firefox, Safari recentes)
