import { BUY_CAKE } from "./cakeTypes"

//default number is only for NewCakeContainer
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}