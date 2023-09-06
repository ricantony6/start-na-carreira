const primeiroNome = prompt("informe o primeiro nome do recruta:")
const sobrenome = prompt("informe o sobrenome do recruta:")
const capmpoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com sucesso!\n" + 
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de Estudo: " + capmpoDeEstudo + 
    "\nIdade: " + (2023 - anoDeNascimento) 
)

