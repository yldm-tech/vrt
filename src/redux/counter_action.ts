// 专门为counter生成action对象
import { Add, Minus } from "@/redux/constant";

const add = (data: number) => ({type: Add, payload: data})
const minus = (data: number) => ({type: Minus, payload: data})

export { add, minus }