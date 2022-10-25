# Api Mercanalisa
> Projeto construído em Node JS / Express.

Api para cotação de preços de mais de 100 criptomoedas e moedas fiat. 

Veja a api em funcionamento aqui: https://api-mercanalisa.herokuapp.com

imagem aqui

## Sobre

Mercanalisa surgiu de um projeto pessoal para estudo de conceitos e ferramentas. Pois necessitava de uma api para cotação de preços de criptomoedas e moedas fiat. Depois de testar opções do mercado e não ter os resultados esperados, resolvi criar minha própria solução.

## Features

- Response em formato JSON
- Cotação Atualizada de 5 em 5 minutos
- Mais de 100 criptomoedas diferentes
- Cotação das criptos em Dólar Americano e Real Brasileiro
- Cotação fiat: Dólar Americano/Real Brasileiro

## Como utilizar?
### #Criptomoedas

Para usar a api de cotação de criptomoedas utilize o path **/crypto** em seguida informe a moeda (**/USD** para Dólar ou **/BRL** para Real) e depois o símbolo da criptomoeda que queira consultar.(**/:symbol**)

Exemplo:
```
 https://api-mercanalisa.herokuapp.com/crypto/USD/BTC
```

Tabela das criptomoedas disponíveis aqui

### #Moedas Fiat

Para usar a api de cotação de moedas fiat utilize o path **/fiat** em seguida a moeda que deseja consultar.

Exemplo:
```
 https://api-mercanalisa.herokuapp.com/fiat/USD
```

Tabela das moedas fiat disponíveis:
| **#** | **Moedas Fiat** | **Símbolo** |
|:-----:|:---------------:|:-----------:|
| **1** | Dólar           |     USD     |

## Tecnologias

Projeto foi construído com as seguintes tecnologias:

- Javascript
- Node.js
- Express
- Cheerio

## License

MIT

   [Api Mercanalisa]: <https://google.com.br>
