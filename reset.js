localStorage.clear();
sessionStorage.clear();
document.cookie.split(";").forEach(function (cookie) {
    document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/");
});
alert("Local storage, session storage, and cookies have been cleared!");
