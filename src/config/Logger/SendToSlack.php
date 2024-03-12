<?php

// Recibe los datos de error de la aplicación React
$title = $_POST['title'];
$errorInfo = $_POST['errorInfo'];


// Convierte el mensaje a JSON
$messageJson = json_encode($message);

// URL de la integración entrante de Slack
$slackWebhookURL = 'https://hooks.slack.com/services/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';

// Configura la solicitud POST a Slack
$curl = curl_init($slackWebhookURL);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $messageJson);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

// Ejecuta la solicitud
$response = curl_exec($curl);

// Maneja la respuesta de Slack (puedes personalizar esto según tus necesidades)
if ($response === false) {
    echo 'Error al enviar el registro de error a Slack: ' . curl_error($curl);
} else {
    echo 'Registro de error enviado a Slack con éxito';
}

// Cierra la conexión cURL
curl_close($curl);

?>