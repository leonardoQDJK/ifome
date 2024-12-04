import { createContext, useState } from "react"; 

export const AppContext = createContext();

export const AppProvider = ({ children }) => { 
    const [contador, setContador] = useState(0);
    const [itens, setItens] = useState([]);

    const adicionarItem = (item) => {
        const [nome, preco] = item.split('     '); 
        const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.')); 

        setContador(prev => prev + 1);
        setItens(prev => [...prev, { nome, preco: precoNumerico }]); 
    };

    return (
        <AppContext.Provider value={{ contador, itens, adicionarItem }}>
            {children}
        </AppContext.Provider>
    );
};

