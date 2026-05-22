// ferramentas/delay.js

// Função base que faz o bot esperar alguns milissegundos
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * MÓDULO ANTIBAN: Delay Dinâmico e Aleatório
 * Em vez de mandar mensagens com tempo fixo (ex: a cada 30 segundos cravados),
 * ele varia os segundos para enganar o sistema de detecção de spam do WhatsApp/Telegram.
 * @param {number} minSegundos - Tempo mínimo de espera
 * @param {number} maxSegundos - Tempo máximo de espera
 */
const delayAntiBan = async (minSegundos, maxSegundos) => {
    const min = minSegundos * 1000;
    const max = maxSegundos * 1000;
    
    // Gera um tempo aleatório entre o mínimo e o máximo estipulado
    const tempoAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log(`[VELTRIX-ANTIBAN] Simulando comportamento humano. Aguardando ${tempoAleatorio / 1000} segundos antes do próximo envio...`);
    return esperar(tempoAleatorio);
};

module.exports = { esperar, delayAntiBan };

