let locais = [
    {
        nome: "O Boteco",
        contato: "(51) 3232-1024",
        desc: "Um restaurante com ambiente acolhedor e atendimento especializado para pessoas com deficiência visual. Menu em braille, iluminação adequada, descrição detalhada dos pratos pelo garçom e espaço suficiente para cães-guia.",
        acess: "visual cegos cegas cegueira guias",
        horario: "Segunda-feira: Fechado / De terça-feira a sexta-feira: das 11h00 às 00h00 / Sábados: das 09h00 às 00h00 / Domingos: das 16h30 às 23h30",
        tags : "almoços jantares almoçar lanches lanchar beber bares restaurantes comer",
        link : "https://www.google.com/search?client=opera-gx&sca_esv=bd7c79c83c879c30&sca_upv=1&sxsrf=ADLYWIKskPatLzLAWnRfpaeFypYOmy1qag:1725751043158&q=O+Boteco+Porto+Alegre&nirf=O+Buteco+Porto+Alegre&sa=X&ved=2ahUKEwiEvJfP-7GIAxU6r5UCHTZjCM8Q8BYoAXoECAoQAg&biw=1879&bih=969&dpr=1"
    },
    {
        nome: "Casa de Francisca",
        endereco: "Rua José do Patrocínio, 1050 - Centro Histórico",
        contato: "(51) 3232-1050",
        desc: "Um local com atmosfera familiar e atendimento personalizado. Menu em braille, descrição detalhada dos pratos e espaço amplo para manobra de bengalas.",
        acess: "visual cegos cegas cegueira bengalas",
        horario: "Segunda-feira: Fechado / De terça a sexta: Almoço: das 11h30 às 15h00 - Jantar: das 19h30 às 01h00 / Sábados: Almoço: das 12h00 às 18h00 - Jantar: das 19h30 às 01h00 / Domingos: das 12h00 às 18h00",
        tags : "almoços jantares almoçar restaurantes comer",
        link : "https://www.google.com/search?q=Casa+de+Francisca+Porta+Alegre&client=opera-gx&hs=5pT&sca_esv=bd7c79c83c879c30&sca_upv=1&sxsrf=ADLYWIKJiUpdggg6G89ok8hmZp7UZeqKIA%3A1725750754323&ei=4t3cZvCiE6Cp1sQPt5i9sAU&ved=0ahUKEwjwm7rF-rGIAxWglJUCHTdMD1YQ4dUDCBA&uact=5&oq=Casa+de+Francisca+Porta+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiHkNhc2EgZGUgRnJhbmNpc2NhIFBvcnRhIEFsZWdyZTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGKIEGIkFSNAPUABYsgJwAHgAkAEAmAHlAaAB6AKqAQUwLjEuMbgBA8gBAPgBAvgBAZgCAqAC7QKYAwDiAwUSATEgQJIHBTAuMS4xoAe4CA&sclient=gws-wiz-serp"
    },
    {
        nome: "Amadu Bistrô",
        endereco: "Rua João Alfredo, 770 - Moinhos de Vento",
        contato: "(51) 3330-7700",
        desc: "Um restaurante com gastronomia contemporânea e um ambiente elegante. Menu com descrição detalhada dos pratos, iluminação adequada e equipe treinada para atender pessoas com deficiência visual.",
        acess: "visual",
        horario: "Segunda a domingo: das 12h00 às 22h00",
        tags : "almoços jantares almoçar restaurantes bistros comer",
        link : "https://www.google.com/search?q=Amadu+Bistrô+Porto+Alegre&client=opera-gx&hs=ZvT&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIJvowyA7WFFE9nA5OcsIon4RrWJJw%3A1725751094591&ei=Nt_cZqvdI-Xm1sQP1bvg8AY&ved=0ahUKEwir0Nrn-7GIAxVls5UCHdUdGG4Q4dUDCBA&uact=5&oq=Amadu+Bistrô+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiGkFtYWR1IEJpc3Ryw7QgUG9ydG8gQWxlZ3JlMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEjyDFCnBVinBXABeACQAQCYAZcBoAGAAqoBAzAuMrgBA8gBAPgBAZgCAqACnAHCAgoQABiwAxjWBBhHmAMAiAYBkAYGkgcDMS4xoAfUBg&sclient=gws-wiz-serp"
    },
    {
        nome: "Bar do Celsu",
        endereco: "Rua José do Patrocínio, 1080 - Centro Histórico",
        contato: "(51) 3232-1080",
        desc: "Um bar com ambiente descontraído e atendimento personalizado para pessoas com deficiência auditiva. Cardápio com fotos dos pratos, equipe de garçons com conhecimento em Libras e sistema de vibração para alertas sonoros.",
        acess: "auditivas auditivos libras surdos",
        horario: "Segunda a sexta: das 11h00 às 00h00 / Sábados: das 09h00 às 00h00 / Domingos: das 16h30 às 23h30",
        tags : "almoços almoçar lanches lanchar beber bares v",
        link : "https://www.google.com/search?q=Bar+do+Celsu+Porto+Alegre&client=opera-gx&hs=Dco&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIIG-YARCb0PfAEz0toW0R56YAfOzA%3A1725751177605&ei=id_cZtrTJLPd1sQP4N21mAw&ved=0ahUKEwiavKWP_LGIAxWzrpUCHeBuDcMQ4dUDCBA&uact=5&oq=Bar+do+Celsu+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiGUJhciBkbyBDZWxzdSBQb3J0byBBbGVncmUyBxAjGLACGCcyCBAAGIAEGKIEMggQABiABBiiBEi4FlD_BljMCnABeAGQAQCYAYMBoAH5AaoBAzAuMrgBA8gBAPgBAZgCA6AC_wHCAgoQABiwAxjWBBhHmAMAiAYBkAYEkgcDMS4yoAfMCA&sclient=gws-wiz-serp"
    },
    {
        nome: "Boteco do Centro",
        endereco: "Rua José do Patrocínio, 1150 - Centro Histórico",
        contato: "(51) 3232-1150",
        desc: "Um local com uma variedade de petiscos e bebidas, ideal para um happy hour acessível. Cardápio com fotos dos pratos, equipe de garçons com conhecimento básico em Libras e sistema de vibração para alertas sonoros.",
        acess: "auditivas auditivos libras surdos",
        horario: "Segunda a domingo: das 11h00 às 23h00 / Domingos: até as 15h00",
        tags : "almoços jantares almoçar lanches lanchar beber bares restaurantes comer",
        link : "https://www.google.com/search?q=Boteco+do+Centro+Porto+Alegre&client=opera-gx&hs=gH9&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIKSoYj2McW5t2uiZCmvXRjI2RX7WA%3A1725751187634&ei=k9_cZtW3JrHJ1sQPhJ_e4QY&ved=0ahUKEwiVzYmU_LGIAxWxpJUCHYSPN2wQ4dUDCBA&uact=5&oq=Boteco+do+Centro+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiHUJvdGVjbyBkbyBDZW50cm8gUG9ydG8gQWxlZ3JlMggQIRigARjDBDIIECEYoAEYwwRIoghQAFjXAXAAeAGQAQCYAacBoAGjAqoBAzAuMrgBA8gBAPgBAvgBAZgCAqACqQLCAgoQIRigARjDBBgKmAMA4gMFEgExIECSBwMwLjKgB9EH&sclient=gws-wiz-serp"
    },
    {
        nome: "La Vineria",
        endereco: "Rua José do Patrocínio, 1170 - Centro Histórico",
        contato: "(51) 3232-1170",
        desc: "Uma vinoteca com uma ampla variedade de vinhos e um ambiente sofisticado. Cardápio com fotos dos pratos, equipe de garçons com conhecimento básico em Libras e sistema de vibração para alertas sonoros.",
        acess: "auditivas libras surdos motoras cadeirantes físicas auditivos",
        horario: "Quarta-feira a sábado: das 18h30 às 02h00 / Demais dias: Fechado",
        tags : "jantares beber vinhos adegas restaurantes comer",
        link : "https://www.google.com/search?q=La+Vineria+Porto+Alegre&client=opera-gx&hs=UxT&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIIbmQa-p1Ya7CmJhnxEWMEOQlkUPQ%3A1725751213610&ei=rd_cZuX4JKzI1sQPgZn8qAs&ved=0ahUKEwilg7ug_LGIAxUspJUCHYEMH7UQ4dUDCBA&uact=5&oq=La+Vineria+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiF0xhIFZpbmVyaWEgUG9ydG8gQWxlZ3JlMgQQIxgnMggQABiABBiiBDIIEAAYgAQYogRIrgJQAFgAcAB4AZABAJgBhgGgAYYBqgEDMC4xuAEDyAEA-AEC-AEBmAIBoAKJAZgDAJIHAzAuMaAH5gI&sclient=gws-wiz-serp"
    },
    {
        nome: "Nonno Ludovico Pizzaria",
        endereco: "Rua José do Patrocínio, 1035 - Centro Histórico",
        contato: "(51) 3232-1035",
        desc: "Considerado o restaurante mais acessível de Porto Alegre, com rampas, banheiros adaptados e espaço amplo para manobra de cadeiras de rodas. Possui selo de acessibilidade reconhecido por órgãos fiscalizadores.",
        acess: "cadeirantes motoras visual físicas",
        horario: "Segunda a sexta: Almoço: das 11h30 às 14h30 - Jantar: das 18h00 às 23h00 / Sábados: das 11h30 às 00h00 / Domingos: das 11h30 às 15h00",
        tags : "almoços jantares almoçar lanches lanchar pizzas restaurantes comer",
        link : "https://www.google.com/search?q=Nonno+Ludovico+Pizzaria+Porto+Alegre&client=opera-gx&hs=nI9&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIJDaXSrU2ZmpcmFz15R7x4KMXjiKQ%3A1725751256369&ei=2N_cZuqWFuLc1sQPlbjE2QE&ved=0ahUKEwjq4uy0_LGIAxVirpUCHRUcMRsQ4dUDCBA&uact=5&oq=Nonno+Ludovico+Pizzaria+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiJE5vbm5vIEx1ZG92aWNvIFBpenphcmlhIFBvcnRvIEFsZWdyZTIHECMYsAIYJzIIEAAYCBgNGB4yCBAAGIAEGKIEMggQABiABBiiBEjZDFDpB1jpB3ABeAGQAQCYAZEBoAGRAaoBAzAuMbgBA8gBAPgBAZgCAqACmAHCAgoQABiwAxjWBBhHmAMAiAYBkAYIkgcDMS4xoAfTBQ&sclient=gws-wiz-serp"
    },
    {
        nome: "Casa da Nonna",
        endereco: "Rua José do Patrocínio, 1070 - Centro Histórico",
        contato: "(51) 3232-1070",
        desc: " Especializada na culinária italiana, um dos restaurantes mais recomendados neste quesito. Possui rampas de acesso, banheiros adaptados e mesas com altura adequada para pessoas em cadeiras de rodas.",
        acess: "cadeirantes motoras físicas",
        horario: "Segunda-feira: Fechado / De terça a sexta: Almoço: das 11h30 às 15h00 - Jantar: das 19h30 às 01h00 / Sábados: Almoço: das 12h00 às 18h00 - Jantar: das 19h30 às 01h00 / Domingos: das 12h00 às 18h00",
        tags : "almoços jantares almoçar lanches lanchar comer",
        link : "https://www.google.com/search?q=Casa+da+Nonna+Porto+Alegre&client=opera-gx&hs=tI9&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIIEPPzlpmPE7ffvf2VfGxNVMDdfaw%3A1725751262036&ei=3t_cZsPrAevK1sQPhsK36AU&ved=0ahUKEwjD0sa3_LGIAxVrpZUCHQbhDV0Q4dUDCBA&uact=5&oq=Casa+da+Nonna+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiGkNhc2EgZGEgTm9ubmEgUG9ydG8gQWxlZ3JlSO0BUABYAHAAeAGQAQCYAZUBoAGVAaoBAzAuMbgBA8gBAPgBAvgBAZgCAKACAJgDAOIDBRIBMSBAkgcAoAdO&sclient=gws-wiz-serp"
    },
    {
        nome: "Bar do Beto",
        endereco: "Rua José do Patrocínio, 1135 - Centro Histórico",
        contato: "(51) 3232-1135",
        desc: "Barzinho clássico de rua, desde 1971 sendo administrado pelo Beto mesmo. Local descontraído, com opção de mesas dentro ou fora. Oferece rampas de acesso, banheiros adaptados e mesas com espaço suficiente para cadeiras de rodas.",
        acess: "cadeirantes motoras físicas",
        horario: "Segunda-feira a sexta-feira: das 11h00 às 00h00 / Sábados: das 09h00 às 00h00 / Domingos: das 16h30 às 23h30",
        tags : "almoços almoçar lanches jantares lanchar beber bares comer",
        link : "https://www.google.com/search?q=Bar+do+Betu+Porto+Alegre&client=opera-gx&hs=geo&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIIndPZjsehLSbkZvYcAm6VquugylQ%3A1725751330883&ei=IuDcZorINezX1sQPpJjs6Ag&ved=0ahUKEwiK4bDY_LGIAxXsq5UCHSQMG40Q4dUDCBA&uact=5&oq=Bar+do+Betu+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiGEJhciBkbyBCZXR1IFBvcnRvIEFsZWdyZTIHECMYsAIYJzIHEAAYgAQYDTIQEC4YgAQYxwEYDRiOBRivATIGEAAYDRgeMggQABgIGA0YHkiPFFCGB1jLDXABeAGQAQCYAbMBoAHJAqoBAzAuMrgBA8gBAPgBAZgCA6AC0QLCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAhwQLhiABBiwAxhDGMcBGMgDGIoFGI4FGK8B2AEBwgIREC4YExgHGMcBGB4YjgUYrwHCAggQABgTGAcYHpgDAIgGAZAGDLoGBAgBGAiSBwMxLjKgB6oT&sclient=gws-wiz-serp"
    },
    {
        nome: "Pão Quentinho da Cêci",
        endereco: "Rua da Praia, 100 - Centro Histórico",
        contato: "(51) 3232-1234",
        desc: "Padaria tradicional com um ambiente acolhedor e atendimento especializado para pessoas com deficiência visual. Cardápio em braille, iluminação adequada e descrição detalhada dos produtos pelo vendedor.",
        acess: "visual cegueira cegos cegas",
        horario: "Segunda-feira a sexta-feira: 6h-20h / Sábado: 7h-19h / Domingo: 8h-18h",
        tags : "cafés manhãs cafeterias padarias almoços almoçar lanches lanchar beber comer café da manhã",
        link : "https://www.google.com/search?q=Pão+Quentinho+da+Cêci+Porto+Alegre&client=opera-gx&hs=vzT&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIK6CXJtNg-Tuhep6OBi6gdGKafU0Q%3A1725751364814&ei=RODcZrq6Mdvd1sQPtKCakAM&ved=0ahUKEwi67Mfo_LGIAxXbrpUCHTSQBjIQ4dUDCBA&uact=5&oq=Pão+Quentinho+da+Cêci+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiJFDDo28gUXVlbnRpbmhvIGRhIEPDqmNpIFBvcnRvIEFsZWdyZTIKECEYoAEYwwQYCjIKECEYoAEYwwQYCkjxclD3O1iicXABeACQAQCYAaIBoAHfCqoBBDAuMTC4AQPIAQD4AQGYAgigAqAHwgIKECMYsAIYsAMYJ8ICCxAAGIAEGLADGKIEwgIHECMYsAIYJ8ICCBAAGIAEGKIEwgIEECMYJ8ICCBAhGKABGMMEmAMA4gMFEgExIECIBgGQBgGSBwMxLjegB-kp&sclient=gws-wiz-serp"
    },
    {
        nome: "Delícias da Vó",
        endereco: "Avenida Independência, 456",
        contato: "(51) 9876-5432",
        desc: "Padaria familiar com ambiente acolhedor. Oferece opções sem glúten e sem lactose, com cardápio em braille e atendimento personalizado.",
        acess: "visual cegos cegas cegueira",
        horario: "Segunda-feira a sexta-feira: 6h-21h / Sábado: 7h-22h / Domingo: 8h-18h",
        tags: "cafés manhãs cafeterias padarias almoços almoçar lanches lanchar jantares beber comer café da manhã",
        link : "https://www.google.com/search?q=Delícias+da+Vó+Porto+Alegre&client=opera-gx&hs=a0T&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWILx_vXkTTHumuU4KAa3JsSa6nKuyg%3A1725751405242&ei=beDcZsS6Dv_Q1sQPtaWrsAI&ved=0ahUKEwiEpev7_LGIAxV_qJUCHbXSCiYQ4dUDCBA&uact=5&oq=Delícias+da+Vó+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiHURlbMOtY2lhcyBkYSBWw7MgUG9ydG8gQWxlZ3JlSLIHUABYuQVwAHgAkAEAmAGFAaABhwKqAQMwLjK4AQPIAQD4AQL4AQGYAgGgAogBwgIHECMYsAIYJ8ICCBAAGIAEGKIEmAMAkgcDMC4xoAfvBQ&sclient=gws-wiz-serp"
    },
    {
        nome: "Pão e Muita Cia",
        endereco: "Rua Voluntários da Pátria, 1500 - Higienópolis",
        contato: "(51) 3333-5555",
        desc: "Padaria moderna com diversas opções de pães e doces. Oferece cardápio digital com fotos e descrições dos produtos, além de atendimento em Libras.",
        acess: "auditivas surdos visual auditivos",
        horario: "Segunda-feira a domingo: 6h-22h",
        tags: "cafés manhãs cafeterias padarias beber pão lanches lanchar comer café da manhã",
        link : "https://www.google.com/search?q=Pão+e+Muita+Cia+Porto+Alegre&client=opera-gx&hs=X1T&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWII5pSIldnSwYJ9RSQ45hmj3o1dtLg%3A1725751464076&ei=qODcZq-uBLPd1sQPo9i6wAM&ved=0ahUKEwivovKX_bGIAxWzrpUCHSOsDjgQ4dUDCBA&uact=5&oq=Pão+e+Muita+Cia+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiHVDDo28gZSBNdWl0YSBDaWEgUG9ydG8gQWxlZ3JlMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEiENlBpWOYycAZ4AJABAJgBnQGgAd8LqgEEMC4xMbgBA8gBAPgBAZgCDqACvQnCAgQQIxgnwgIHECMYsAIYJ8ICChAhGKABGMMEGAqYAwCIBgGSBwM1LjmgB84k&sclient=gws-wiz-serp"
    },
    {
        nome: "Brotinho",
        endereco: "Rua dos Andradas, 123 - Centro",
        contato: "(51) 3232-6789",
        desc: "Padaria com foco em produtos orgânicos e integrais. Possui rampas de acesso, banheiros adaptados e um espaço kids com brinquedos.",
        acess: "cadeirantes motoras físicas",
        horario: "Segunda-feira a sábado: 7h-20h / Domingo: 8h-19h",
        tags: "cafés manhãs cafeterias padarias beber pão comer",
        link : "https://www.google.com/search?q=Brotinho+Porto+Alegre&client=opera-gx&hs=4go&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWILSCFcswplSKOmB6SMnIjJ43fatxw%3A1725751478373&ei=tuDcZq24FvrT1sQPgafKoQM&ved=0ahUKEwit69qe_bGIAxX6qZUCHYGTMjQQ4dUDCBA&uact=5&oq=Brotinho+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUJyb3RpbmhvIFBvcnRvIEFsZWdyZTIIECEYoAEYwwRIrgtQAFgAcAB4AJABAJgBlAGgAZQBqgEDMC4xuAEDyAEA-AEC-AEBmAIBoAKWAZgDAJIHAzAuMaAHwAE&sclient=gws-wiz-serp"
    },
    {
        nome: "Gostos da Itália",
        endereco: "Rua João Alfredo, 456 - Moinhos de Vento",
        contato: "(51) 3333-7890",
        desc: "Padaria especializada em produtos italianos. Oferece menu em braille, descrições detalhadas dos ingredientes e um ambiente com iluminação adequada.",
        acess: "visual cegos cegas cegueira",
        horario: "Segunda-feira a domingo: 8h-22h",
        tags: "cafés manhãs cafeterias padarias almoços almoçar jantares comer",
        link : "https://www.google.com/search?q=Gostos+da+Itália+Porto+Alegre&client=opera-gx&hs=U3T&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIKj7eGkLteKqfExArIC4hSmOlSiuw%3A1725751585975&ei=IeHcZoqlO7nW1sQP0cr22A4&ved=0ahUKEwjKuYLS_bGIAxU5q5UCHVGlHesQ4dUDCBA&uact=5&oq=Gostos+da+Itália+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiHkdvc3RvcyBkYSBJdMOhbGlhIFBvcnRvIEFsZWdyZUjdDlAAWJ4HcAB4AZABAJgBkgGgAdkGqgEDMC42uAEDyAEA-AEBmAICoAKeAsICCBAAGAcYCBgewgIIEAAYBRgHGB7CAggQABiABBiiBMICChAhGKABGMMEGAqYAwCSBwMwLjKgB4UN&sclient=gws-wiz-serp"
    },
    {
        nome: "Vibra Club",
        endereco: "Avenida Independência, 1500",
        contato: "(51) 99999-9999",
        desc: "Casa noturna com pista de dança ampla, rampas de acesso, banheiros adaptados e iluminação ajustável para pessoas com sensibilidade à luz. Possui equipe treinada em primeiros socorros e atendimento especializado para PcD.",
        acess: "cadeirantes motoras visual intelectual",
        horario: "Sexta-feira e sábado: 22h-5h",
        tags: "festas bares dançar noturnas baladas",
        link : "https://www.google.com/search?q=Vibra+Club+Porto+Alegre&client=opera-gx&hs=D4T&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWILjXQBQahIDLtNd4gvHhbnZyhOfbg%3A1725751630986&ei=TuHcZrXzO-HL1sQPy86HqQQ&ved=0ahUKEwi10r3n_bGIAxXhpZUCHUvnIUUQ4dUDCBA&uact=5&oq=Vibra+Club+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiF1ZpYnJhIENsdWIgUG9ydG8gQWxlZ3JlSIGyBFDErwRYxK8EcAJ4AJABAJgByAGgAcgBqgEDMi0xuAEDyAEA-AEC-AEBmAICoAIFwgILEAAYgAQYsAMYogSYAwCIBgGQBgSSBwEyoAdL&sclient=gws-wiz-serp"
      },
      {
        nome: "Bar do Jazz",
        endereco: "Rua da Praia, 500",
        contato: "(51) 88888-8888",
        desc: "Bar com música ao vivo e ambiente intimista. Possui rampas de acesso, banheiros adaptados e cardápio com informações em braille. A casa oferece intérprete de Libras para eventos especiais.",
        acess: "cadeirantes cegos cegas cegueiras visual auditivas auditivos motoras",
        horario: "Quinta-feira a sábado: 20h-2h",
        tags: "festas bares noitadas vivo noturnas baladas",
        link : "https://www.google.com/search?q=Bar+do+Jazz+Porto+Alegre&client=opera-gx&hs=4P9&sca_esv=4fd6679d0a9c996a&sca_upv=1&sxsrf=ADLYWIL5dU_HkEqdAyhHUaJmbkRGyl1o-w%3A1725751707991&ei=m-HcZqeSPMj51sQPpYa6iQ8&ved=0ahUKEwjny5mM_rGIAxXIvJUCHSWDLvEQ4dUDCBA&uact=5&oq=Bar+do+Jazz+Porto+Alegre&gs_lp=Egxnd3Mtd2l6LXNlcnAiGEJhciBkbyBKYXp6IFBvcnRvIEFsZWdyZTIIECEYoAEYwwQyCBAhGKABGMMESMYBUABYAHAAeAGQAQCYAY4BoAGOAaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACkAGYAwCSBwMwLjGgB8AC&sclient=gws-wiz-serp"
      },

      //Gostaria de adicionar ainda mais opções, como parques, shoppings, campings. Todos os estabelecimentos são fictícios, devido a qualquer questão burocrática, mas a maioria foi inspirada e pesquisada levando em consideração um verdadeiro.
];