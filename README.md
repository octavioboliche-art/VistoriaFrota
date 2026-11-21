# Vistoria de Frota - InspeÃ§Ã£o Veicular 100% Offline

Sistema moderno, responsivo e 100% offline para vistoria, auditoria tÃ©cnica e controle de manutenÃ§Ã£o de frotas operacionais (Ã´nibus, micro-Ã´nibus e utilitÃ¡rios).

Desenvolvido para atender operaÃ§Ãµes de campo em garagens, terminais rodoviÃ¡rios e pÃ¡tios sem dependÃªncia de conexÃ£o de internet.

---

## ðŸš€ CaracterÃ­sticas Principais

- **100% Offline & MonolÃ­tico:** Todo o sistema roda em um Ãºnico arquivo HTML (`index.html`), sem dependÃªncias externas de CDN, servidor ou banco de dados remoto.
- **Armazenamento Local Robusto (IndexedDB):** PersistÃªncia segura no navegador com suporte a transaÃ§Ãµes e esquemas versionados (`DB_VERSION = 2`).
- **Checklist TÃ©cnico Completo:**
  - Pneus e Rodas (calibragem, desgaste, estepe)
  - IluminaÃ§Ã£o e SinalizaÃ§Ã£o (farÃ³is, setas, lanternas, freio, rÃ©)
  - Freios e SuspensÃ£o (nÃ­vel de fluido, freio de estacionamento, ruÃ­dos)
  - Motor e TransmissÃ£o (Ã³leo, arrefecimento, vazamentos, embreagem)
  - SeguranÃ§a e EmergÃªncia (extintor, cintos, tacÃ³grafo, triÃ¢ngulo)
  - Carroceria e Acessibilidade (lataria, elevador PCD, bancos, portas)
  - DocumentaÃ§Ã£o (CRLV, CNH, seguro, certificado tacÃ³grafo)
- **EvidÃªncias em Foto e VÃ­deo:**
  - Captura direta via cÃ¢mera (`navigator.mediaDevices.getUserMedia` / `MediaRecorder`)
  - Galeria de mÃ­dias com visualizaÃ§Ã£o em modal e exportaÃ§Ã£o
- **Dashboard e HistÃ³rico por VeÃ­culo:**
  - EstatÃ­sticas de aprovaÃ§Ã£o, reprovaÃ§Ã£o e pendÃªncias
  - Linha do tempo e histÃ³rico individual por nÃºmero de frota/placa
- **RelatÃ³rio e Backup:**
  - RelatÃ³rio formatado pronto para impressÃ£o ou salvamento em PDF
  - ExportaÃ§Ã£o e importaÃ§Ã£o de dados em **JSON** e **CSV**

---

## ðŸ› ï¸ Tecnologias Utilizadas

- **HTML5 & CSS3 Moderno:** Design responsivo adaptado para smartphones, tablets e desktops (Mobile-First).
- **Vanilla JavaScript (ES6+):** CÃ³digo limpo, sem frameworks pesados, garantindo alta velocidade de carregamento e execuÃ§Ã£o.
- **IndexedDB API:** Armazenamento relacional offline estruturado com Ã­ndices de busca rÃ¡pida.
- **MediaStream & MediaRecorder APIs:** Captura de vÃ­deo nativa com fallback e prÃ©-visualizaÃ§Ã£o instantÃ¢nea.
- **SVG Design System:** Ãcones e logotipos embutidos em SVG nativo e vetores inline.

---

## ðŸ“‚ Estrutura do Projeto

```text
â”œâ”€â”€ index.html                        # AplicaÃ§Ã£o monolÃ­tica completa (HTML + CSS + JS)
â”œâ”€â”€ logo.svg                             # Logotipo vetorial oficial CMT
â”œâ”€â”€ Captura de tela 2026-11-21 140909.png# Logotipo institucional parceiro
â”œâ”€â”€ contexto.md                          # Documento de arquitetura, contexto e objetivos
â”œâ”€â”€ dor.md                               # Mapeamento de dores operacionais e soluÃ§Ãµes
â”œâ”€â”€ sprint.md                            # Roadmap de engenharia de software e sprints
â””â”€â”€ README.md                            # DocumentaÃ§Ã£o do repositÃ³rio
```

---

## ðŸ Como Executar

1. Baixe ou clone o repositÃ³rio:
   ```bash
   git clone https://github.com/octavioboliche-art/VistoriaFrota.git
   ```
2. DÃª um duplo clique no arquivo `index.html` ou abra-o em qualquer navegador web moderno (Google Chrome, Microsoft Edge, Firefox, Safari).
3. **NÃ£o requer instalaÃ§Ã£o de servidor, Node.js ou banco de dados.** Pronto para uso imediato em qualquer computador ou dispositivo mÃ³vel!

---

## ðŸ“„ LicenÃ§a

Uso interno operacional. Todos os direitos reservados.
