const axios = require('axios');
const qs = require('qs');

onmessage = async (e) =>
{
    var message = e.data
    const USER_CONFIG = message.USER_CONFIG
    const DEFAULT_INI_SETTINGS = message.DEFAULT_INI_SETTINGS
    const API_END_POINT = DEFAULT_INI_SETTINGS.Server_Settings.API_END_POINT
    const REQ_URL = `${API_END_POINT}Employees/Types/Permissions/index`

    sendRequest()

    setInterval(() => {
       
        sendRequest()

    }, 60*1000); // 1 min

    function sendRequest()
    {
        axios.post(REQ_URL, qs.stringify({
            administration_id: USER_CONFIG.administration_id,
            employee_type_id: USER_CONFIG.employee_type_id
        }), 
        {
            headers: { 
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        .then(res =>
        {
            postMessage(res.data)
        })
    }

}

// fetch('https://docteur-aoun.com/api/Employees/Types/Permissions/setBatch', qs.stringify({
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: {
//         administration_id: 4, 
//         employee_type_id: 3, 
//         permissions: {
//             granted: [
//                 'appointments', 
//             ],
//             denied: [
//                 'patients', 
//             ]
//         }
//     }
// }) )
//   .then(response => {
//     console.info(response);
//   })
//   .catch(err => console.error(err));
// var gg = ()=> console.info("//////////////////////");