# Sensor_Admin
Solução fullstack para gerenciar sensores


# MODO DE USO
Baixar as pastas frontend, Backend e o arquivo do banco de dados
Adicionar o arquivo .env no Backend contendo os dados de acesso ao db Postgres
Abrir o prompt/powershell em abas as pastas e executar npm start

O frontend usa a porta 3000 enquanto o backend utiliza a 3333

# SOBRE A APLICAÇÃO

O frontend somente tem integradas as funções de vizualizar e excluir os sensores. Para adicionar um novo ou editar um já existente, basta utilizar um dos métodos a seguir:

http://localhost:3333/update/sensorID

http://localhost:3333/create

deve ser enviado no corpo de ambas um arquivo JSON com os parâmetros adequados. No caso da medida, o sistema assume que as unidades estão no padrão do SI, portanto deve ser passado somente o valor, conforme exemplo abaixo:

    {
	"voltage": "1.5",
	"brand":"T10",
	"type":"pressão",
	"measure":"2",
	"size":"[2,2.5,2.5]",
	"lon":" -45.04",
	"lat":"-19.8868"
    }

Se for um update, passar somente os parêmtros a serem atualizados. Ex:

  {
    "measure":"1"
    "lon":" -44.54",
    "lat":"-19.9"
    }
