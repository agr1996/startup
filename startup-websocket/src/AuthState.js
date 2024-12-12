export function isAuthenticated() {
    const ca = document.cookie.split(';');
    for (var cookie of ca) {
        console.log(cookie);
        if (cookie.startsWith('token=') && cookie.length > 6) {
            console.log('User is authenticated');
            return true;
        }
    }
    console.log('User is not authenticated');
    return false;
}