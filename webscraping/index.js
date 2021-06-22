const axios = require('axios')
const cheerio = require('cheerio')

//substituir os espaços por + 
var pergunta = 'como os indios chegaram no brasil'
var perguntacorrigida = ('https://www.google.com/search?q='+pergunta+'&rlz=1C1ISCS_pt-PTBR934BR934&oq=como+os+indios+chegaram+na+america&aqs=chrome.0.0j69i57j0l8.3641j0j7&sourceid=chrome&ie=UTF-8')
var pesquisa = perguntacorrigida.replace(/ /g, '+')

const fetchData = async(url) => {
    const result = await axios.get(url)
    return result.data
}

const main = async () => {
    const content = await fetchData(pesquisa)
    const $ = cheerio.load(content)

    $('h3').each((i, e) => {
        console.log(`o h2 na posição ${i} tem o valor igual a: ${$(e).text()}`)
    })  
}

main()

