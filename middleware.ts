export {default} from "next-auth/middleware"

// applies nextauth only to matching routes 
export const config = {matcher:["/extra","/dashboard"]}