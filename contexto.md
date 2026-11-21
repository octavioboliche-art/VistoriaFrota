# Contexto do App — Vistoria de Frota

---

## 1. Objetivo

Digitalizar e padronizar o processo de vistoria diária dos ônibus ao chegarem na garagem, substituindo fichas em papel e lançamentos manuais por um fluxo único, rápido e 100% offline. O app deve permitir que o vistoriador registre todas as condições do veículo, capture evidências visuais (vídeo da carroceria) e encaminhe o veículo para manutenção ou liberação — tudo em um único arquivo HTML que funciona sem internet.

---

## 2. Arquitetura

| Aspecto | Decisão |
|---|---|
| **Formato** | Arquivo HTML único e monolítico (`.html`) |
| **Dependências externas** | Nenhuma — zero CDN, zero API, zero backend |
| **Conectividade** | 100% offline — funciona abrindo o arquivo direto no navegador |
| **CSS** | Embutido dentro de `<style>` no próprio HTML |
| **JavaScript** | Embutido dentro de `<script>` no próprio HTML |
| **Armazenamento** | `localStorage` / `IndexedDB` do navegador para persistir dados localmente |
| **Mídia (vídeo)** | Captura via `MediaDevices API` (câmera do dispositivo), armazenada como Blob no IndexedDB |
| **Exportação de dados** | Geração de relatório/resumo na tela + possibilidade de exportar JSON/CSV para backup local |

### Diagrama de Arquitetura

```
┌─────────────────────────────────────────────┐
│           ARQUIVO HTML ÚNICO                │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌───────────┐ │
│  │   HTML   │  │   CSS    │  │    JS     │ │
│  │ (layout) │  │ (estilo) │  │ (lógica)  │ │
│  └──────────┘  └──────────┘  └───────────┘ │
│                     │                       │
│         ┌───────────┴───────────┐           │
│         ▼                       ▼           │
│  ┌─────────────┐      ┌──────────────────┐ │
│  │ localStorage│      │   IndexedDB      │ │
│  │  (config,   │      │  (vistorias,     │ │
│  │   estado)   │      │   vídeos/blobs)  │ │
│  └─────────────┘      └──────────────────┘ │
│                                             │
│  ┌────────────────────────────────────────┐ │
│  │       MediaDevices API (câmera)        │ │
│  └────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

---

## 3. Funcionalidades

### 3.1 Identificação do Veículo
- Selecionar ou digitar o **número/prefixo do ônibus**
- Registrar **motorista** responsável pela entrega

### 3.2 Checklist de Vistoria
Inspeção sistemática dos seguintes itens com status (OK / Defeito / N/A):

- **Carroceria** — verificar batidas, riscos, amassados
- **Pneus** — estado geral, calibragem visual, desgaste
- **Faróis** — dianteiros e traseiros, funcionamento
- **Setas** — indicadores de direção, funcionamento
- **Limpador de para-brisa** — funcionamento e estado das palhetas
- **Condições gerais** — bancos, portas, janelas, piso interno

### 3.3 Relato do Motorista
- Campo de texto livre para o motorista informar **defeitos ou observações**

### 3.4 Leitura de Instrumentos
- Registro do **odômetro** (quilometragem atual)
- Registro da **roleta** (contagem de passageiros)

### 3.5 Captura de Vídeo
- Gravação de **vídeo completo da carroceria** (360° ao redor do veículo)
- Vídeo armazenado localmente como arquivo de evidência visual da frota

### 3.6 Decisão de Encaminhamento
- Vistoriador decide: **Liberar para operação** ou **Encaminhar para oficina**
- Se encaminhado para oficina, registrar motivo/defeitos encontrados

### 3.7 Painel do Operador de Tráfego
- Tela de resumo com **todas as vistorias realizadas**
- Exibe status de cada ônibus: liberado / em oficina
- Lista de defeitos encontrados, quilometragem, contagem de roleta
- Possibilidade de filtrar e buscar por veículo

### 3.8 Exportação e Backup
- Exportar dados em **JSON** ou **CSV** para backup externo
- Importar dados de backup anteriores

---

## 4. Público-Alvo

| Perfil | Papel no App |
|---|---|
| **Vistoriador** | Usuário principal — realiza a inspeção, preenche o checklist, grava o vídeo e decide o encaminhamento do veículo |
| **Motorista** | Colaborador — relata defeitos ou observações ao entregar o ônibus na garagem |
| **Operador de Tráfego** | Gestor — visualiza o painel com o resumo de todas as vistorias do dia para tomada de decisão operacional |

---

## 5. Contexto Geral

O cenário é o de uma **empresa de transporte público urbano** (ou fretamento). Diariamente, ao final ou início de cada turno, os ônibus retornam à garagem e passam por uma vistoria de recebimento. Hoje esse processo pode ser feito em papel ou planilhas, gerando:

- **Perda de informação** — fichas se perdem, dados não são centralizados
- **Falta de evidência visual** — não há registro em vídeo do estado do veículo
- **Demora no fluxo** — lançamento manual no sistema é lento e propenso a erros
- **Dificuldade de rastreabilidade** — sem histórico confiável de cada veículo

O app resolve esses problemas oferecendo um **fluxo digital completo, padronizado e com evidência visual**, tudo rodando offline em qualquer dispositivo com navegador moderno (celular, tablet ou computador da garagem) — sem necessidade de infraestrutura de servidor, internet ou instalação de software.

---

## 6. Restrições e Premissas

- O app **não requer internet** em nenhum momento da operação
- Os dados ficam **armazenados no navegador** do dispositivo utilizado
- O vídeo é capturado pela **câmera nativa** do dispositivo via API do navegador
- O arquivo HTML pode ser **distribuído por pendrive, WhatsApp ou qualquer meio** — basta abrir no navegador
- Compatível com **navegadores modernos** (Chrome, Edge, Firefox, Safari recentes)
