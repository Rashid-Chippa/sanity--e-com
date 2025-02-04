import { Chef } from "../../../types/chefs";

export const addToCart = (chef :Chef ) => {
    const cart : Chef [] =JSON.parse(localStorage.getItem('cart') || '[]')

    const exsistingChefIndex =cart.findIndex(item => item.name === chef.name )
    if(exsistingChefIndex > -1){
        cart[exsistingChefIndex].experience +=1
    }else{
        cart.push({...chef,experience:1})
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (chefId :string) => {
    let cart : Chef [] =JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== chefId)
    localStorage.setItem('cart', JSON.stringify(cart))
    }

    export const upDateCartQuantity =(chefId :string,quantity:number) => {
        const cart : Chef [] =JSON.parse(localStorage.getItem('cart') || '[]')
        const exsistingChefIndex =cart.findIndex(item => item._id === chefId )
        if(exsistingChefIndex > -1){
            cart[exsistingChefIndex].experience = quantity
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }
    
    export const getCartItems = ():Chef[] => {
        return JSON.parse(localStorage.getItem('cart') || '[]')
        
    }
    