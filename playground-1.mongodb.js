// Usando o banco de dados
use("BD3-NoSQL-AtlasMongoDB")

// Inserindo um aluno
db["bd3-nosql-atv6"].insertOne({
  cod_aluno: 1,
  cod_turma: 101,
  nome: "João Silva",
  cpf: "123.456.789-00",
  rg: "MG-12.345.678",
  telefone_aluno: "31987654321",
  telefone_responsavel: "31987654322",
  email: "joao.silva@example.com",
  data_nascimento: new Date("2000-01-01")
})

// Inserindo 09 alunos
db["bd3-nosql-atv6"].insertMany([
  {
    cod_aluno: 2,
    cod_turma: 101,
    nome: "Maria Souza",
    cpf: "123.456.789-01",
    rg: "MG-12.345.679",
    telefone_aluno: "31987654323",
    telefone_responsavel: "31987654324",
    email: "maria.souza@example.com",
    data_nascimento: new Date("2000-02-01")
  },
  {
    cod_aluno: 3,
    cod_turma: 101,
    nome: "Pedro Lima",
    cpf: "123.456.789-02",
    rg: "MG-12.345.680",
    telefone_aluno: "31987654325",
    telefone_responsavel: "31987654326",
    email: "pedro.lima@example.com",
    data_nascimento: new Date("2000-03-01")
  },
  {
    cod_aluno: 4,
    cod_turma: 102,
    nome: "Ana Pereira",
    cpf: "123.456.789-03",
    rg: "MG-12.345.681",
    telefone_aluno: "31987654327",
    telefone_responsavel: "31987654328",
    email: "ana.pereira@example.com",
    data_nascimento: new Date("2000-04-01")
  },
  {
    cod_aluno: 5,
    cod_turma: 102,
    nome: "Lucas Fernandes",
    cpf: "123.456.789-04",
    rg: "MG-12.345.682",
    telefone_aluno: "31987654329",
    telefone_responsavel: "31987654330",
    email: "lucas.fernandes@example.com",
    data_nascimento: new Date("2000-05-01")
  },
  {
    cod_aluno: 6,
    cod_turma: 103,
    nome: "Carla Nunes",
    cpf: "123.456.789-05",
    rg: "MG-12.345.683",
    telefone_aluno: "31987654331",
    telefone_responsavel: "31987654332",
    email: "carla.nunes@example.com",
    data_nascimento: new Date("2000-06-01")
  },
  {
    cod_aluno: 7,
    cod_turma: 103,
    nome: "Bruno Silva",
    cpf: "123.456.789-06",
    rg: "MG-12.345.684",
    telefone_aluno: "31987654333",
    telefone_responsavel: "31987654334",
    email: "bruno.silva@example.com",
    data_nascimento: new Date("2000-07-01")
  },
  {
    cod_aluno: 8,
    cod_turma: 104,
    nome: "Paula Almeida",
    cpf: "123.456.789-07",
    rg: "MG-12.345.685",
    telefone_aluno: "31987654335",
    telefone_responsavel: "31987654336",
    email: "paula.almeida@example.com",
    data_nascimento: new Date("2000-08-01")
  },
  {
    cod_aluno: 9,
    cod_turma: 104,
    nome: "Ricardo Santos",
    cpf: "123.456.789-08",
    rg: "MG-12.345.686",
    telefone_aluno: "31987654337",
    telefone_responsavel: "31987654338",
    email: "ricardo.santos@example.com",
    data_nascimento: new Date("2000-09-01")
  },
  {
    cod_aluno: 10,
    cod_turma: 105,
    nome: "Fernanda Costa",
    cpf: "123.456.789-09",
    rg: "MG-12.345.687",
    telefone_aluno: "31987654339",
    telefone_responsavel: "31987654340",
    email: "fernanda.costa@example.com",
    data_nascimento: new Date("2000-10-01")
  }
])

// Listando todos os alunos
db["bd3-nosql-atv6"].find().pretty()

// Listando um aluno pelo CPF sem o campo de “cod_aluno”
db["bd3-nosql-atv6"].find(
  { cpf: "123.456.789-00" },
  { cod_aluno: 0 }
).pretty()
