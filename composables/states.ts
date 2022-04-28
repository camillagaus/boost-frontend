// Man definierar en type med interface
interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    vegetarian: boolean;
    allergies: string[];
}

// tillägg, man skapar en ny CartProduct 

interface CartProduct extends Product {
    quantity: number;
}

// här heter composables useCart för att man exporterar. Vill man ha en fil som heter 
// useCart kan man ha export default istället. 
export const useCart = () => {
    // för att ett värde ska uppdateras globalt på alla ställen som använder en variabel 
    // måste man använda useState

    // använder usestate för att skapa en global reaktiv variable, som använder product objektet 
    // som kommer sparas i en array, och det det börjar med en tom array.n

    // man kan använda js med const cart = useState("cart", () => [])
    // useState i Nuxt blir en global variabel, inte samma som i react. 
    // useCart gör att vi inte behöver "cart" nyckeln för att nå denna composablen, 
    // hade man bara haft useState hade man behövt nyckeln för att nå composablen. 

    // <CartProdut[]> är generics. Det säger att useState ska ha ett state av CartProduct
    const cart = useState<CartProduct[]>("cart", () => [])
  

    const addToCart = (product) => {
        // om producten redan finns i varukorgen 
        
        const currentProduct = cart.value.find(p => p.id === product.id)

        if(currentProduct) {
            // ta ut produkten från cart.value 
            //öka quantity med ett
            // stoppa tillbaka den i cart.value - görs oftast genom att skriva över cart.value men ny lista.

            // newCart använder vi för att man inte ska mutera en lista  
            // const newCart = cart.value.filter(p => p.id !== product.id )

            currentProduct.quantity += 1

            // newCart.push(currentProduct)

        } else {
            // vi trycker in hela product till cartProduct och lägger till quantity med default värde 1. 
            const cartProduct: CartProduct = { ...product, quantity: 1 }
            cart.value.push(cartProduct)
        }
       
        
    }

    return {
        cart: readonly(cart),
        addToCart,

        
    };
}



