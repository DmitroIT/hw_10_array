// исходный массив
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,]
console.log(arr)

// создаем копию исходного массива и сортируем по увеличению 
let sortArr = arr.slice().sort((a, b) => a - b)
//console.log(sortArr)

//находим минимальный элемент массива
let minArr = sortArr[0]
console.log(`Минимальный элемент массива: ${minArr}`)

//находим порядковый номер минимального числа
let indexMinItem = arr.findIndex((item) => item === minArr)
console.log(`Порядковый номер минимального элемента: ${indexMinItem +1}`)

//находим максимальный элемент массива
let maxArr = sortArr.pop()
console.log(`Максимальный элемент массива: ${maxArr}`)

// находим порядковый номер максимального элемента массива
let indexMaxItem = arr.findIndex((item) => item === maxArr)
console.log(`Порядковый номер максимального элемента: ${indexMaxItem +1}`)

//находим только положительные элементы
let positiveItem = arr.filter((item) => item > 0)
console.log(`Положительные элементы: ${positiveItem}`)

//находим колличество положительных элементов
let positiveItemLeng = positiveItem.length
console.log(`Колличество положительных элементов: ${positiveItemLeng}`)

//находим сумму положительных элементов
let positiveItemSum = positiveItem.reduce((acc, item) => acc += item, 0)
console.log(`Сумма положительных элементов: ${positiveItemSum}`)

//находим только отрицательные элементы
let negativeItem = arr.filter((item) => item < 0)
console.log(`Отрицательные элементы: ${negativeItem}`)

//находим колличество отрицательных элементов
let negativeItemLeng = negativeItem.length
console.log(`Колличество отрицательных элементов: ${negativeItemLeng}`)





