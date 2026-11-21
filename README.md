# Vistoria de Frota - Inspeção Veicular 100% Offline

Sistema moderno, responsivo e 100% offline para vistoria, auditoria técnica e controle de manutenção de frotas operacionais (ônibus, micro-ônibus e utilitários).

Desenvolvido para atender operações de campo em garagens, terminais rodoviários e pátios sem dependência de conexão de internet.

---

## 🚀 Características Principais

- **100% Offline & Monolítico:** Todo o sistema roda em um único arquivo HTML (`vistoria.html`), sem dependências externas de CDN, servidor ou banco de dados remoto.
- **Armazenamento Local Robusto (IndexedDB):** Persistência segura no navegador com suporte a transações e esquemas versionados (`DB_VERSION = 2`).
- **Checklist Técnico Completo:**
  - Pneus e Rodas (calibragem, desgaste, estepe)
  - Iluminação e Sinalização (faróis, setas, lanternas, freio, ré)
  - Freios e Suspensão (nível de fluido, freio de estacionamento, ruídos)
  - Motor e Transmissão (óleo, arrefecimento, vazamentos, embreagem)
  - Segurança e Emergência (extintor, cintos, tacógrafo, triângulo)
  - Carroceria e Acessibilidade (lataria, elevador PCD, bancos, portas)
  - Documentação (CRLV, CNH, seguro, certificado tacógrafo)
- **Evidências em Foto e Vídeo:**
  - Captura direta via câmera (`navigator.mediaDevices.getUserMedia` / `MediaRecorder`)
  - Galeria de mídias com visualização em modal e exportação
- **Dashboard e Histórico por Veículo:**
  - Estatísticas de aprovação, reprovação e pendências
  - Linha do tempo e histórico individual por número de frota/placa
- **Relatório e Backup:**
  - Relatório formatado pronto para impressão ou salvamento em PDF
  - Exportação e importação de dados em **JSON** e **CSV**

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3 Moderno:** Design responsivo adaptado para smartphones, tablets e desktops (Mobile-First).
- **Vanilla JavaScript (ES6+):** Código limpo, sem frameworks pesados, garantindo alta velocidade de carregamento e execução.
- **IndexedDB API:** Armazenamento relacional offline estruturado com índices de busca rápida.
- **MediaStream & MediaRecorder APIs:** Captura de vídeo nativa com fallback e pré-visualização instantânea.
- **SVG Design System:** Ícones e logotipos embutidos em SVG nativo e vetores inline.

---

## 📂 Estrutura do Projeto

```text
├── vistoria.html                        # Aplicação monolítica completa (HTML + CSS + JS)
├── logo.svg                             # Logotipo vetorial oficial CMT
├── Captura de tela 2026-11-21 140909.png# Logotipo institucional parceiro
├── contexto.md                          # Documento de arquitetura, contexto e objetivos
├── dor.md                               # Mapeamento de dores operacionais e soluções
├── sprint.md                            # Roadmap de engenharia de software e sprints
└── README.md                            # Documentação do repositório
```

---

## 🏁 Como Executar

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/octavioboliche-art/VistoriaFrota.git
   ```
2. Dê um duplo clique no arquivo `vistoria.html` ou abra-o em qualquer navegador web moderno (Google Chrome, Microsoft Edge, Firefox, Safari).
3. **Não requer instalação de servidor, Node.js ou banco de dados.** Pronto para uso imediato em qualquer computador ou dispositivo móvel!

---

## 📄 Licença

Uso interno operacional. Todos os direitos reservados.
