
async function checkUserPermission() {
    const user = sessionStorage.getItem('user');
    if (!user) {
        window.location = "/pages/admin/autenticar.html";
        return;
    }
    let res;

    const options = {
        token: user,
    };
    const resp = await fetch('https://pincel-de-luz.onrender.com/auth/verifyToken', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(options)
    }).then(response => { return response.json() })
        .then(data => res = data)
        .catch(error => alert(error));

    if (resp.result.error) {
        alert('É necessário se autenticar antes de acessar páginas privadas!');
        window.location = "/pages/admin/autenticar.html";
        return;
    }
    return;
}


checkUserPermission();