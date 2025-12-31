/**
 * auth.js — Módulo de autenticação para material extra do livro
 * Usa Google Apps Script + Google Sheets como backend
 */

const AUTH_CONFIG = {
    // URL do Google Apps Script (Web App)
    apiUrl: 'https://script.google.com/macros/s/AKfycby2bUMECl__qoR_4k_1ZD2pPo7IBxPE7lEYHJVI_aV8xu8uewjCbz9-p5JfqQ6K3XHp/exec',
    // Chave do localStorage
    storageKey: 'bd9passos_user',
    // URL da página de login
    loginPage: 'login.html',
    // URL da página principal
    mainPage: 'index.html'
};

/**
 * Faz login do usuário via API
 * @param {string} email - Email do usuário
 * @param {string} senha - Senha do usuário
 * @returns {Promise<{success: boolean, nome?: string, message: string}>}
 */
async function login(email, senha) {
    try {
        const url = `${AUTH_CONFIG.apiUrl}?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`;

        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        });

        const data = await response.json();

        if (data.success) {
            // Salva sessão no localStorage
            const userData = {
                email: email,
                nome: data.nome,
                loginTime: new Date().toISOString()
            };
            localStorage.setItem(AUTH_CONFIG.storageKey, JSON.stringify(userData));
        }

        return data;
    } catch (error) {
        console.error('Erro no login:', error);
        return {
            success: false,
            message: 'Erro de conexão. Tente novamente.'
        };
    }
}

/**
 * Faz logout do usuário
 */
function logout() {
    localStorage.removeItem(AUTH_CONFIG.storageKey);
    window.location.href = AUTH_CONFIG.loginPage;
}

/**
 * Verifica se o usuário está autenticado
 * @returns {boolean}
 */
function isAuthenticated() {
    const userData = localStorage.getItem(AUTH_CONFIG.storageKey);
    return userData !== null;
}

/**
 * Retorna os dados do usuário logado
 * @returns {Object|null}
 */
function getUser() {
    const userData = localStorage.getItem(AUTH_CONFIG.storageKey);
    if (userData) {
        try {
            return JSON.parse(userData);
        } catch {
            return null;
        }
    }
    return null;
}

/**
 * Requer autenticação - redireciona para login se não autenticado
 * Deve ser chamado no início de páginas protegidas
 */
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = AUTH_CONFIG.loginPage;
    }
}

/**
 * Redireciona para página principal se já estiver logado
 * Usar na página de login
 */
function redirectIfAuthenticated() {
    if (isAuthenticated()) {
        window.location.href = AUTH_CONFIG.mainPage;
    }
}
