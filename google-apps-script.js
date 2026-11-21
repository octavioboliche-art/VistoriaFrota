/**
 * ============================================================================
 * SISTEMA DE VISTORIA DE FROTA - INTEGRAÇÃO GOOGLE SHEETS
 * Planilha: https://docs.google.com/spreadsheets/d/1fwMgiLEUwKvKaAQWhP7v8RX5B2Cx6MFeZ9H-tDAbEBY/edit
 * ============================================================================
 * 
 * INSTRUÇÕES DE IMPLANTAÇÃO:
 * 1. Abra a sua planilha no Google Sheets:
 *    https://docs.google.com/spreadsheets/d/1fwMgiLEUwKvKaAQWhP7v8RX5B2Cx6MFeZ9H-tDAbEBY/edit
 * 2. No menu superior, clique em: Extensões > Apps Script.
 * 3. Apague todo o conteúdo do arquivo Código.gs e cole este código completo.
 * 4. Clique no ícone de "Salvar" (disquete) ou pressione Ctrl + S.
 * 5. Clique no botão azul "Implantar" (Deploy) no canto superior direito > "Nova implantação".
 * 6. Na engrenagem ao lado de "Selecione o tipo", escolha "Aplicativo da Web".
 * 7. Preencha as configurações:
 *    - Descrição: API Vistoria de Frota
 *    - Executar como: Eu (seu email)
 *    - Quem pode acessar: Qualquer pessoa (Anyone)  <-- IMPORTANTE!
 * 8. Clique em "Implantar". Autorize as permissões se solicitado.
 * 9. Copie o "URL do aplicativo da Web" gerado (termina com /exec).
 * 10. No aplicativo Vistoria de Frota, clique no ícone da Nuvem no topo e cole a URL!
 * ============================================================================
 */

const SHEET_NAME = 'Vistorias';

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  // Se a aba estiver vazia, cria os cabeçalhos formatados
  if (sheet.getLastRow() === 0) {
    const headers = [
      'ID Vistoria',
      'Data/Hora',
      'Prefixo Veículo',
      'Motorista',
      'Vistoriador',
      'Odômetro (KM)',
      'Roleta',
      'Resultado',
      'Motivo / Encaminhamento',
      'Relato do Motorista',
      'Checklist Resumo',
      'Carroceria (Status)',
      'Carroceria (Obs)',
      'Pneus (Status)',
      'Pneus (Obs)',
      'Faróis (Status)',
      'Faróis (Obs)',
      'Setas (Status)',
      'Setas (Obs)',
      'Limpador (Status)',
      'Limpador (Obs)',
      'Condições Gerais (Status)',
      'Condições Gerais (Obs)',
      'Possui Vídeo?',
      'Tamanho do Vídeo',
      'Data ISO',
      'Sincronizado Em'
    ];
    
    sheet.appendRow(headers);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#063888');
    headerRange.setFontColor('#ffffff');
    headerRange.setFontWeight('bold');
    headerRange.setHorizontalAlignment('center');
    sheet.setFrozenRows(1);
    
    // Auto-ajuste de colunas principais
    sheet.setColumnWidth(1, 140); // ID
    sheet.setColumnWidth(2, 140); // Data/Hora
    sheet.setColumnWidth(3, 110); // Prefixo
    sheet.setColumnWidth(4, 180); // Motorista
    sheet.setColumnWidth(5, 180); // Vistoriador
    sheet.setColumnWidth(8, 120); // Resultado
    sheet.setColumnWidth(9, 200); // Motivo
    sheet.setColumnWidth(10, 220); // Relato
    sheet.setColumnWidth(11, 260); // Resumo
  }
  return sheet;
}

/**
 * Endpoint POST: Recebe as vistorias enviadas pelo aplicativo
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return criarRespostaJson({ status: 'error', message: 'Nenhum dado recebido no corpo da requisição.' });
    }

    const contents = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();
    const agora = Utilities.formatDate(new Date(), 'America/Manaus', 'dd/MM/yyyy HH:mm:ss');
    
    // Suporte tanto a envio único quanto lote
    const lista = Array.isArray(contents.vistorias) ? contents.vistorias : [contents.vistoria || contents];
    let inseridos = 0;
    let atualizados = 0;
    
    const data = sheet.getDataRange().getValues();
    const idColumnIndex = 0; // Coluna A (ID Vistoria)
    
    lista.forEach(v => {
      if (!v || !v.id) return;
      
      const resumoChecklist = Object.entries(v.checklist || {})
        .map(([k, val]) => `${k.toUpperCase()}: ${val.status || 'OK'}${val.obs ? ' (' + val.obs + ')' : ''}`)
        .join(' | ');
      
      const getCheckItem = (key) => {
        const item = (v.checklist && v.checklist[key]) || {};
        return [item.status || 'conforme', item.obs || ''];
      };
      
      const [carrStatus, carrObs] = getCheckItem('carroceria');
      const [pneuStatus, pneuObs] = getCheckItem('pneus');
      const [farolStatus, farolObs] = getCheckItem('farois');
      const [setaStatus, setaObs] = getCheckItem('setas');
      const [limpStatus, limpObs] = getCheckItem('limpador');
      const [geralStatus, geralObs] = getCheckItem('geral');
      
      const row = [
        v.id,
        formatarData(v.dataHora),
        (v.veiculo && v.veiculo.prefixo) || '',
        (v.veiculo && v.veiculo.motorista) || '',
        (v.veiculo && v.veiculo.vistoriador) || '',
        (v.instrumentos && v.instrumentos.odometro) || '',
        (v.instrumentos && v.instrumentos.roleta) || '',
        (v.encaminhamento && v.encaminhamento.destino) || '',
        (v.encaminhamento && v.encaminhamento.motivo) || '',
        v.relatoMotorista || '',
        resumoChecklist,
        carrStatus, carrObs,
        pneuStatus, pneuObs,
        farolStatus, farolObs,
        setaStatus, setaObs,
        limpStatus, limpObs,
        geralStatus, geralObs,
        v.videoId ? 'SIM' : 'NÃO',
        v.videoTamanho ? (v.videoTamanho / (1024 * 1024)).toFixed(1) + ' MB' : '-',
        v.dataISO || '',
        agora
      ];
      
      // Procura se já existe na planilha para atualizar em vez de duplicar
      let linhaExistente = -1;
      for (let i = 1; i < data.length; i++) {
        if (String(data[i][idColumnIndex]) === String(v.id)) {
          linhaExistente = i + 1; // 1-based index
          break;
        }
      }
      
      if (linhaExistente > 0) {
        sheet.getRange(linhaExistente, 1, 1, row.length).setValues([row]);
        atualizados++;
      } else {
        sheet.appendRow(row);
        inseridos++;
      }
    });
    
    return criarRespostaJson({
      status: 'success',
      message: `Sincronização concluída: ${inseridos} nova(s), ${atualizados} atualizada(s).`,
      inseridos: inseridos,
      atualizados: atualizados,
      totalProcessado: lista.length
    });
    
  } catch (error) {
    return criarRespostaJson({
      status: 'error',
      message: 'Erro no Google Apps Script: ' + error.toString()
    });
  }
}

/**
 * Endpoint GET: Para teste de conexão e status da planilha
 */
function doGet(e) {
  try {
    const sheet = getOrCreateSheet();
    const total = Math.max(0, sheet.getLastRow() - 1);
    return criarRespostaJson({
      status: 'ok',
      message: 'API Google Sheets Vistoria de Frota ativa e conectada!',
      totalVistorias: total,
      aba: SHEET_NAME,
      spreadsheetUrl: SpreadsheetApp.getActiveSpreadsheet().getUrl()
    });
  } catch (err) {
    return criarRespostaJson({
      status: 'error',
      message: err.toString()
    });
  }
}

function formatarData(iso) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return Utilities.formatDate(d, 'America/Manaus', 'dd/MM/yyyy HH:mm');
  } catch (e) {
    return iso;
  }
}

function criarRespostaJson(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto))
    .setMimeType(ContentService.MimeType.JSON);
}
