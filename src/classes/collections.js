class Collections {
    geral() {
        const personagens = [
            {
                "nome": "Superman",
                "nome_real": "Clark Kent",
                "editora": "DC Comics",
                "classe": "heroi",
                "pfInicial": 100,
                "peInicial": 70,
                "pf": 100,
                "pe": 70,
                "mimico": false,
                "drenador": false,
                "poderes": [
                    {
                        "nome": "Força",
                        "dano": 10,
                        "pe": 8
                    },
                    {
                        "nome": "Visão de Raios",
                        "dano": 5,
                        "pe": 5
                    },
                    {
                        "nome": "Supersopro",
                        "dano": 4,
                        "pe": 4
                    },
                ]
            },
            {
                "nome": "Homem-Aranha",
                "nome_real": "Peter Parker",
                "editora": "Marvel Comics",
                "classe": "heroi",
                "pfInicial": 100,
                "peInicial": 70,
                "pf": 80,
                "pe": 50,
                "mimico": false,
                "drenador": false,
                "poderes": [
                    {
                        "nome": "Força",
                        "dano": 7,
                        "pe": 5
                    },
                    {
                        "nome": "Soltar teia ",
                        "dano": 5,
                        "pe": 5
                    },
                ]
            },
            {
                "nome": "Fênix",
                "nome_real": "Jean Grey",
                "editora": "Marvel Comics",
                "classe": "heroi",
                "pfInicial": 100,
                "peInicial": 70,
                "pf": 150,
                "pe": 100,
                "mimico": false,
                "drenador": false,
                "poderes": [
                    {
                        "nome": "Força",
                        "dano": 12,
                        "pe": 10
                    },
                ]
            },
            {
                "nome": "Superbizarro",
                "nome_real": "",
                "editora": "DC Comics",
                "classe": "vilão",
                "pfInicial": 100,
                "peInicial": 70,
                "pf": 95,
                "pe": 65,
                "mimico": false,
                "drenador": false,
                "nivel_maldade": 50,
                "poderes": [
                    {
                        "nome": "Força",
                        "dano": 10,
                        "pe": 8
                    },
                    {
                        "nome": "Visão de Raios",
                        "dano": 5,
                        "pe": 5
                    },
                    {
                        "nome": "Supersopro",
                        "dano": 4,
                        "pe": 4
                    },
                ]
            },
            {
                "nome": "Duende-Verde",
                "nome_real": "",
                "editora": "Marvel Comics",
                "classe": "vilão",
                "pfInicial": 80,
                "peInicial": 60,
                "pf": 80,
                "pe": 60,
                "mimico": false,
                "drenador": false,
                "nivel_maldade": 70,
                "poderes": [
                    {
                        "nome": "Força",
                        "dano": 7,
                        "pe": 5
                    },
                    {
                        "nome": "Granada de Abóbora",
                        "dano": 5,
                        "pe": 5
                    },
                    {
                        "nome": "Supersopro",
                        "dano": 4,
                        "pe": 4
                    },
                ]
            },
            {
                "nome": "Doutor-Octopus",
                "nome_real": "",
                "editora": "Marvel Comics",
                "classe": "vilão",
                "pfInicial": 70,
                "peInicial": 40,
                "pf": 70,
                "pe": 40,
                "mimico": false,
                "drenador": false,
                "nivel_maldade": 40,
                "poderes": [
                    {
                        "nome": "Tentáculos",
                        "dano": 6,
                        "pe": 4
                    },
                ]
            },
            {
                "nome": "Super-Skrull",
                "nome_real": "",
                "editora": "Marvel Comics",
                "classe": "vilão",
                "pfInicial": 90,
                "peInicial": 60,
                "pf": 90,
                "pe": 60,
                "mimico": true,
                "drenador": false,
                "nivel_maldade": 100,
                "poderes": []
            },
            {
                "nome": "Mímico",
                "nome_real": "",
                "editora": "Marvel Comics",
                "classe": "heroi",
                "pfInicial": 70,
                "peInicial": 50,
                "pf": 70,
                "pe": 50,
                "mimico": true,
                "drenador": false,
                "poderes": []
            },
            {
                "nome": "Parasita",
                "nome_real": "",
                "editora": "DC Comics",
                "classe": "vilão",
                "pfInicial": 70,
                "peInicial": 40,
                "pf": 70,
                "pe": 40,
                "mimico": false,
                "drenador": true,
                "nivel_maldade": 70,
                "poderes": [
                    {
                        "nome": "Força",
                        "dano": 7,
                        "pe": 8
                    },
                    {
                        "nome": "Rajada Energética ",
                        "dano": 6,
                        "pe": 8
                    },
                ]
            },
        ]

        return personagens;
    }

}

module.exports = new Collections();