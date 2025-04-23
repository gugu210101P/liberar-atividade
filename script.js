// Espera o documento carregar completamente
$(document).ready(function() {
  // Seleciona o card com texto "Prototipagem"
  $('div.card:contains("Prototipagem")').each(function() {
    // Remove a classe "disabled"
    $(this).removeClass('disabled');

    // Adiciona um evento de clique para marcar como "liberado"
    $(this).on('click', function() {
      alert('Atividade "Prototipagem" liberada!');
      // Aqui você poderia redirecionar ou abrir a atividade
    });
  });
});
