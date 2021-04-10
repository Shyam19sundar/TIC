import axios from '../axios.js'

export const refresh = () => {
    let cookie = document.cookie;
    var getCookie = cookie.split(/[=;]+/)
    axios.post('/refresh', {
        refresh: getCookie[1]
    }).then(res => {
        console.log(res.data)
        var d = new Date();
        d.setTime(d.getTime() + (5 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = `access=${res.data.access}; expires=${expires}; SameSite=Strict`;
    }).catch(err => console.log(err.message))
}