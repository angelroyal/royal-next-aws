# Realiza la solicitud a la API y almacena la respuesta en una variable
response=$(curl -s https://api.sandboxmexico.com/server-time)

# Extrae el valor de server_timestamp de la respuesta JSON y almacénalo en una variable
server_timestamp=$(echo $response | jq -r '.server_timestamp')

# Obtiene el timestamp local en milisegundos
# local_timestamp=$(date +%s%3N)
local_timestamp=$(date +%s)

# Calcula el intervalo restando el timestamp del servidor del timestamp local
interval=$((local_timestamp - server_timestamp))

# Reemplaza el valor del intervalo en el archivo StaticTimeInterval.js
sed -i "s/interval: [0-9]*/interval: $interval/" StaticTimeInterval.js
echo $server_timestamp
