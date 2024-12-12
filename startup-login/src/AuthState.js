export function isAuthenticated() {
    const ca = document.cookie.split(';');
    for (cookie of ca) {
        if (cookie.startsWith('token=') && cookie.length > 6) {
            return true;
        }
    }
    return false;
}